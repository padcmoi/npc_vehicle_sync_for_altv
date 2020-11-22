import alt from 'alt'

/**
 * Evenement lorsqu'un joueur déconnecte
 *
 * @param player
 * @param reason
 *
 * @return {void}
 */
function playerDisconnect(player, reason) {
  player.isConnect = false

  // NPCVehicle
  // à vérifier, car le netOwner peut changer à tout moment voir migrationDistance de AltV
  // for (const vehicle of alt.Vehicle.all) {
  //   if (vehicle.netOwner != player) continue
  //   if (vehicle.hasStreamSyncedMeta('WasNPCVehicle')) {
  //     vehicle.destroy()
  //   }
  // }
  // NPCVehicle
}

alt.on('playerDisconnect', playerDisconnect)
