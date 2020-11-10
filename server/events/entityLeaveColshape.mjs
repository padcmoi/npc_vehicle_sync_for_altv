import alt from 'alt'

/**
 * Evenement lorsqu'un joueur sort d'une colShape
 *
 * n'executera les shapes contenant l'attribut 'spawnNpcVehicle'
 *
 * @param shape
 * @param entity
 *
 * @return {void}
 */
function entityLeaveColshape(shape, entity) {
  if (!shape || shape.is !== 'spawnNpcVehicle') return
  shape.hasEntity = false
}

alt.on('entityLeaveColshape', entityLeaveColshape)
