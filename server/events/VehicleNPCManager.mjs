import alt from 'alt'
import vehicleNPCManager from '../constructor/VehicleNPCManager.mjs'
import Utils from '../constructor/Utils.mjs'

/**
 * Evenement qui ajoute au tableau de la liste des Id joueurs qui ont dans leur zone de streaming, le vehicule
 * cet evenement ajoute son id au tableau du véhicule
 *
 * @param player
 * @param vehicle
 *
 * @return {void}
 */
function addSeenByID(player, vehicle) {
  if (!player || !player.isConnect) return
  if (!vehicle || !vehicle instanceof alt.Vehicle) return
  if (!vehicle.hasStreamSyncedMeta('NPCVehicleSeenByID')) return

  cleanNetOwner(vehicle)

  const NPCVehicleSeenByID = vehicle.getStreamSyncedMeta('NPCVehicleSeenByID')
  const index = NPCVehicleSeenByID.indexOf(parseInt(player.id))
  if (index === -1) {
    NPCVehicleSeenByID.push(parseInt(player.id))
    vehicle.setStreamSyncedMeta('NPCVehicleSeenByID', NPCVehicleSeenByID)
    updateNearestNetOwner(vehicle)
  }
}

/**
 * Evenement qui retire au tableau de la liste des Id joueurs qui ont dans leur zone de streaming, le vehicule
 * cet evenement ajoute son id au tableau du véhicule
 *
 * NOTE: lorsque le tableau est vide, apres l'execution de cet evenement,
 * le véhicule est détruit puis recréer au point d'origine du véhicule,
 * si ce point de spawn est disponible sinon il sera recrée aléatoirement sur la carte
 *
 * @param player
 * @param vehicle
 *
 * @return {void}
 */
function removeSeenByID(player, vehicle) {
  if (!player || !player.isConnect) return
  if (!vehicle || !vehicle instanceof alt.Vehicle) return
  if (!vehicle.hasStreamSyncedMeta('NPCVehicleSeenByID')) return

  cleanNetOwner(vehicle)

  const NPCVehicleSeenByID = vehicle.getStreamSyncedMeta('NPCVehicleSeenByID')
  const index = NPCVehicleSeenByID.indexOf(parseInt(player.id))
  if (index > -1) {
    NPCVehicleSeenByID.splice(index, 1)
    vehicle.setStreamSyncedMeta('NPCVehicleSeenByID', NPCVehicleSeenByID)
  }

  // Si le tableau des joueurs qui ont dans leur zone de stream ce véhicule est vide,
  // alors on détruit le véhicule et on le réinitialise au spawn initial attendant un nouveau streameur
  // Si le lieu de spawn n'est pas disponible on recherche un autre point de spawn libre
  if (NPCVehicleSeenByID.length === 0) {
    let pointSpawnID = vehicle.hasStreamSyncedMeta('NPCVehiclePointSpawnID')
      ? parseInt(vehicle.getStreamSyncedMeta('NPCVehiclePointSpawnID'))
      : -1

    vehicle.destroy()
    vehicleNPCManager.spawnNPC(pointSpawnID, 0)
  } else if (vehicle.netOwner != null && vehicle.netOwner.id === player.id) {
    updateNearestNetOwner(vehicle)
  }
}

/**
 *
 * @param vehicle
 */
function cleanNetOwner(vehicle) {
  if (!vehicle || !vehicle instanceof alt.Vehicle) return
  if (!vehicle.hasStreamSyncedMeta('NPCVehicleSeenByID')) return
  const NPCVehicleSeenByID = vehicle.getStreamSyncedMeta('NPCVehicleSeenByID')

  for (let i = 0; i < NPCVehicleSeenByID.length; i++) {
    const player = alt.Player.getByID(parseInt(NPCVehicleSeenByID[i]))
    if (player === null) {
      const index = NPCVehicleSeenByID.indexOf(parseInt(NPCVehicleSeenByID[i]))
      NPCVehicleSeenByID.splice(index, 1)
      vehicle.setStreamSyncedMeta('NPCVehicleSeenByID', NPCVehicleSeenByID)
    }
  }
}

/**
 *
 * @param vehicle
 */
function updateNearestNetOwner(vehicle) {
  const NPCVehicleSeenByID = vehicle.getStreamSyncedMeta('NPCVehicleSeenByID')

  let nearestID = -1
  let distance = 9999

  for (const id of NPCVehicleSeenByID) {
    const player = alt.Player.getByID(parseInt(id))
    if (player === null) continue
    if (!player.isConnect) continue

    const currentDistance = Utils.dist(vehicle, player)
    if (currentDistance < distance) {
      distance = currentDistance
      nearestID = player.id
    }
  }

  if (nearestID != -1) {
    const nearPlayer = alt.Player.getByID(parseInt(nearestID))

    if (nearPlayer && nearPlayer.isConnect) {
      vehicle.setNetOwner(nearPlayer, true)
    }
  }
}

alt.onClient('NPCVehicle.addSeenByID', addSeenByID)
alt.onClient('NPCVehicle.removeSeenByID', removeSeenByID)
