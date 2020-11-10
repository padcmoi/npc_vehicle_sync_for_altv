import alt from 'alt'
import vehicleNPCManager from '../constructor/VehicleNPCManager.mjs'

/**
 * Evenement lorsqu'un joueur est deja entré dans un véhicule
 *
 * @param player
 * @param vehicle
 * @param seat
 *
 * @return {void}
 */
function playerEnteredVehicle(player, vehicle, seat) {
  if (!player || !player.isConnect) return
  if (vehicle.hasStreamSyncedMeta('NPCVehicle')) {
    vehicle.setNetOwner(player, true)
    vehicle.setStreamSyncedMeta(
      'WasNPCVehicle',
      JSON.stringify(vehicle.getStreamSyncedMeta('NPCVehicle'))
    )

    let pointSpawnID = vehicle.hasStreamSyncedMeta('NPCVehiclePointSpawnID')
      ? parseInt(vehicle.getStreamSyncedMeta('NPCVehiclePointSpawnID'))
      : -1

    vehicleNPCManager.spawnNPC(pointSpawnID, 0)

    vehicle.deleteStreamSyncedMeta('NPCVehicle')
    alt.emitClient(player, 'NPCVehicle.vehicleStolen', vehicle)
  }
}

alt.on('playerEnteredVehicle', playerEnteredVehicle)
