import alt from 'alt'
import vehicleNPCManager from '../constructor/VehicleNPCManager.mjs'

/**
 * Evenement lorsqu'un véhicule est fortement endommagé
 *
 * @param vehicle
 *
 * @return {void}
 */
function vehicleDestroy(vehicle) {
  // NPCVehicle
  if (
    vehicle.hasStreamSyncedMeta('NPCVehicle') ||
    vehicle.hasStreamSyncedMeta('WasNPCVehicle')
  ) {
    let pointSpawnID = vehicle.hasStreamSyncedMeta('NPCVehiclePointSpawnID')
      ? parseInt(vehicle.getStreamSyncedMeta('NPCVehiclePointSpawnID'))
      : -1
    vehicle.destroy()

    vehicleNPCManager.spawnNPC(pointSpawnID, 0)
  }
  // NPCVehicle
}

alt.on('vehicleDestroy', vehicleDestroy)
