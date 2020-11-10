import alt from 'alt'
import vehicleNPCManager from '../constructor/VehicleNPCManager.mjs'

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

  const NPCVehicleSeenByID = vehicle.getStreamSyncedMeta('NPCVehicleSeenByID')
  if (NPCVehicleSeenByID.indexOf(parseInt(player.id)) === -1) {
    NPCVehicleSeenByID.push(parseInt(player.id))
    vehicle.setStreamSyncedMeta('NPCVehicleSeenByID', NPCVehicleSeenByID)
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

  const NPCVehicleSeenByID = vehicle.getStreamSyncedMeta('NPCVehicleSeenByID')
  if (NPCVehicleSeenByID.indexOf(parseInt(player.id)) > -1) {
    NPCVehicleSeenByID.splice(
      NPCVehicleSeenByID.indexOf(parseInt(player.id)),
      1
    )
    vehicle.setStreamSyncedMeta('NPCVehicleSeenByID', NPCVehicleSeenByID)
  }

  if (NPCVehicleSeenByID.length === 0) {
    let pointSpawnID = vehicle.hasStreamSyncedMeta('NPCVehiclePointSpawnID')
      ? parseInt(vehicle.getStreamSyncedMeta('NPCVehiclePointSpawnID'))
      : -1

    vehicle.destroy()
    vehicleNPCManager.spawnNPC(pointSpawnID, 0)
  }
}

alt.onClient('NPCVehicle.addSeenByID', addSeenByID)
alt.onClient('NPCVehicle.removeSeenByID', removeSeenByID)
