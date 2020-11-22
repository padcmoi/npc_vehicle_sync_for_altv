import alt from 'alt'

/**
 * Evenement lorsqu'un joueur se connecte
 *
 * @param player
 *
 * @return {void}
 */
function playerConnect(player) {
  player.isConnect = true
}

alt.on('playerConnect', playerConnect)
