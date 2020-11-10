import alt from 'alt'

/**
 * Evenement lorsqu'un joueur se connecte
 *
 * @param player
 *
 * @return {void}
 */
function playerConnect(player) {
  player.spawn(2000, 6155, 50, 0)
  player.model = alt.hash('a_m_o_salton_01')
  player.giveWeapon(alt.hash('WEAPON_GRENADE'), 9999, false)
  player.giveWeapon(alt.hash('weapon_hominglauncher'), 9999, false)
  player.giveWeapon(alt.hash('weapon_grenadelauncher_smoke'), 9999, false)
  player.giveWeapon(alt.hash('WEAPON_SNIPERRIFLE'), 9999, false)
  player.giveWeapon(alt.hash('weapon_appistol'), 9999, false)
  player.dimension = 0
  player.isConnect = true
  alt.log('Connect ' + player.socialId + '[' + player.ip + ']' + ' connected')
}

alt.on('playerConnect', playerConnect)
