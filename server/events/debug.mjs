import alt from 'alt'

/**
 * Pour le debogage, nous pouvons appeler cet evenement à partir du client
 * afin de connaitre le contenu d'un attribut ou d'un objet
 * NOTE: désactiver pour une production
 *
 * @param player
 * @param msg
 *
 * @return {void}
 */
function consoleLog(player, msg) {
  if (!player || !player.isConnect) return
  alt.log(msg)
}

alt.onClient('console.log', consoleLog)
