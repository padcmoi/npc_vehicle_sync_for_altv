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

  if (shape.hasEntity > 0) {
    shape.hasEntity -= 1
  }

  // Au boot 1 entité va créer 2 entités, dans le leaveShape on retira -1 entité supplémentaire uniquement 1 fois
  if (shape.serverInit) {
    shape.serverInit = false
    if (shape.hasEntity > 0) {
      shape.hasEntity -= 1
    }
  }
  // Au boot 1 entité va créer 2 entités, dans le leaveShape on retira -1 entité supplémentaire uniquement 1 fois
}

alt.on('entityLeaveColshape', entityLeaveColshape)
