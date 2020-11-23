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

  if (shape.hasEntity >= 0) {
    shape.hasEntity += 1
  }
}

alt.on('entityEnterColshape', entityEnterColshape)
