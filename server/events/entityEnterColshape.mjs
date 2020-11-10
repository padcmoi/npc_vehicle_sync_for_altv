import alt from 'alt'

/**
 * Evenement lorsqu'un joueur entre dans une colShape
 *
 * n'executera les shapes contenant l'attribut 'spawnNpcVehicle'
 *
 * @param shape
 * @param entity
 *
 * @return {void}
 */
function entityEnterColshape(shape, entity) {
  if (!shape || shape.is !== 'spawnNpcVehicle') return
  shape.hasEntity = true
}

alt.on('entityEnterColshape', entityEnterColshape)
