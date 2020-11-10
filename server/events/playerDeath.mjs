import alt from 'alt'

/**
 * Evenement lorsqu'un joueur tombe à 0 point de vie
 *
 * @param player
 * @param killer
 * @param weaponHash
 *
 * @return {void}
 */
function playerDeath(player, killer, weaponHash) {
  setTimeout(() => {
    if (!player || !player.isConnect) return
    player.spawn(player.pos.x, player.pos.y, player.pos.z, 0) // On respawn à l'endroit de la mort
    player.giveWeapon(alt.hash('WEAPON_GRENADE'), 9999, false)
    player.giveWeapon(alt.hash('weapon_hominglauncher'), 9999, false)
    player.giveWeapon(alt.hash('weapon_grenadelauncher_smoke'), 9999, false)
    player.giveWeapon(alt.hash('WEAPON_SNIPERRIFLE'), 9999, false)
    player.giveWeapon(alt.hash('weapon_appistol'), 9999, false)
  }, 2000)
}

alt.on('playerDeath', playerDeath)
