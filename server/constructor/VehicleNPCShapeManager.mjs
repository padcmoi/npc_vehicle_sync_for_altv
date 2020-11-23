import alt from 'alt'

import Utils from './Utils.mjs'
import spawnPoints from '../data/spawnPoints.mjs'

/**
 * Citizen Vehicle PNJ
 *
 * Création et Verification dans les colShapes de la présence d'une entité
 *
 *
 *     Crée par Julien J. / contact: julien@naskot.fr
 *     le 08 aout 2019 pour RageMP réécrit pour AltV
 *     Licence MIT
 */
class VehicleNPCShapeManager {
  constructor() {
    this.shapeList = []

    alt.logWarning('VehicleNPCShapeManager: loaded...')
  }

  /**
   * Création de toutes les shapes possible par rapport à liste des points de spawn
   *
   * @return {void}
   */
  createShape() {
    for (let index = 0; index < spawnPoints.length; index++) {
      const shape = new alt.ColshapeSphere(
        spawnPoints[index].x,
        spawnPoints[index].y,
        spawnPoints[index].z,
        15
      )
      shape.dimension = 0
      shape.is = 'spawnNpcVehicle'
      shape.pointId = parseInt(index)
      shape.hasEntity = 0
      shape.serverInit = false // Au boot 1 entité va créer 2 entités, dans le leaveShape on retira -1 entité supplémentaire uniquement 1 fois

      this.shapeList.push(shape)
    }
  }

  /**
   * Vérifie si la colShape contient une entité,
   * si elle n'en contient pas ajoutera true à ce dernier
   *
   * @param {Int} id - index du tableau de la liste des points de spawn
   * @param {Boolean} atBoot - Spécifie si on doit systématiquement ajouter un true à chaque hasEntity traité,
   *                           facilite les démarrages serveur
   *
   * @return {Boolean}
   */
  canSpawnAtPointId(id, atBoot = false) {
    for (const shape of this.shapeList) {
      if (shape.pointId != parseInt(id)) continue

      // atBoot
      if (atBoot && shape.hasEntity === 0) {
        shape.hasEntity += 1
        shape.serverInit = true
        return true
      }
      // atBoot

      // return !shape.hasEntity // on retourne l'opposé pour être cohérent avec le nom de la methode
      return shape.hasEntity > 0 ? false : true
    }
    return false
  }
}
const vehicleNPCShapeManager = new VehicleNPCShapeManager() // Singleton

export default vehicleNPCShapeManager
