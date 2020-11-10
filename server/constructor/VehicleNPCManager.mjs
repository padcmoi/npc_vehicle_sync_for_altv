import alt from 'alt'

import Utils from './Utils.mjs'
import VehicleCreator from './VehicleCreator.mjs'
import VehicleNPCShapeManager from './VehicleNPCShapeManager.mjs'
import spawnPoints from '../data/spawnPoints.mjs'
import { randomPed, randomVehicleAndPed } from './RandomVehicleAndPed.mjs'

/**
 * Citizen Vehicle PNJ
 *
 * Gestion des vehicules PNJ
 *
 * Note importante :
 * lorsqu'un véhicule n'est plus stream par au moins un joueur
 * le vehicule est détruit puis rajouté à un autre endroit.²
 *
 * Liste des styles de conduite configurés pour les PNJ: flag 427
 * - Stop before vehicles
 * - Stop before peds
 * - Avoid empty vehicles
 * - Avoid objects
 * - Stop at traffic lights
 * - Use blinkers
 *
 * Pour d'autres styles de conduite: https://www.vespura.com/fivem/drivingstyle/
 *
 *     Crée par Julien J. / contact: julien@naskot.fr
 *     le 08 aout 2019 pour RageMP réécrit pour AltV
 *     Licence MIT
 */
class VehicleNPCManager {
  constructor() {
    this.npcNumber = 500
    alt.logWarning('VehicleNPCManager: loaded...')

    VehicleNPCShapeManager.createShape()
    this.init()
  }

  /**
   * Initialise les premiers véhicules
   * NOTE:
   * un délai de 1 seconde a été spécifié,
   * afin de laisser le temps pour que le colShape s'initialise,
   * en cas de problème on peut rajouter du délai selon les cas
   *
   * @return {void}
   */
  init() {
    setTimeout(() => {
      for (let i = 0; i < parseInt(this.npcNumber); i++) {
        this.spawnNPC(-1, 0, true)
      }
      alt.logWarning(
        'VehicleNPCManager: ' + alt.Vehicle.all.length + ' vehicles'
      )
    }, 1000)
  }

  /**
   * Spawn Vehicule
   *
   * @param {Int} randomSpawnPoint - -1 pour obtenir une selection aléatoire dans les spawn, 0 et + pour spécifier un index
   * @param {Int} attempt - Tentative echoué à rechercher un autre point de spawn
   * @param {Boolean} atBoot - permet d'alleger seulement au boot les vérifications colShape
   *
   * @return {void}
   */
  spawnNPC(randomSpawnPoint = -1, attempt = 0, atBoot = false) {
    randomSpawnPoint =
      randomSpawnPoint === -1
        ? Utils.getRandomInt(0, spawnPoints.length - 1)
        : randomSpawnPoint

    // Evitons les boucles de la mort ...
    if (attempt >= 5) return // alt.log('Pas assez de choix dans la liste des points de spawn ...')
    // Evitons les boucles de la mort ...

    // colShape occupé par une entité, alors on recommence la methode
    if (!VehicleNPCShapeManager.canSpawnAtPointId(randomSpawnPoint, atBoot)) {
      // alt.log('can not spawn at ' + randomSpawnPoint + ' search another point') // DEBUG
      return this.spawnNPC(-1, attempt + 1, atBoot) // Ce spawn est occupé, on recherche un autre point
    }
    // colShape occupé par une entité, alors on recommence la methode

    alt.log('Spawn at ' + randomSpawnPoint) // DEBUG

    const coord = spawnPoints[randomSpawnPoint]
    const vehicleAndPed = randomVehicleAndPed()
    const pedDriver = [
      {
        model: vehicleAndPed['ped'] || randomPed(),
        speed: vehicleAndPed['speed'] || 20,
        drivingStyle: parseInt(vehicleAndPed['drivingStyle'] || 427),
        weapon: vehicleAndPed['weapon'] || false,
      },
    ]

    if (vehicleAndPed['passenger'].length > 0) {
      for (const p of vehicleAndPed['passenger']) {
        if (!p.model) continue
        pedDriver.push({ model: p.model, weapon: p.weapon || false })
      }
    }

    const bodyColor = vehicleAndPed['forceColor']
      ? vehicleAndPed['forceColor']
      : Utils.getRandomInt(0, 161)

    new VehicleCreator(
      vehicleAndPed['vehicle'] || 'infernus',
      coord.x,
      coord.y,
      coord.z,
      coord.rx,
      coord.ry,
      coord.rz,
      0,
      bodyColor,
      pedDriver,
      randomSpawnPoint
    )
  }
}
const vehicleNPCManager = new VehicleNPCManager() // Singleton

export default vehicleNPCManager
