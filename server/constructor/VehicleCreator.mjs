import alt from 'alt'

import Utils from './Utils.mjs'

/**
 * Citizen Vehicle PNJ
 *
 * Création et spawn du véhicule
 * Surcouche pour l'entité Vehicle de AltV
 *
 * Si vous souhaitez utiliser votre propre surcouche pour gerer vos véhicules,
 * comme la fermeture des portes, etc ...
 * vous pouvez soit utiliser cette class et y rajouter ce dont vous avez besoin,
 * soit appeler via un alt.emit() un événement distant pour créer votre véhicule
 *
 *
 *     Crée par Julien J. / contact: julien@naskot.fr
 *     le 08 aout 2019 pour RageMP réécrit pour AltV
 *     Licence MIT
 */
export default class VehicleCreator {
  /**
   * @param {String} model
   * @param {Float} x
   * @param {Float} y
   * @param {Float} z
   * @param {Float} rx
   * @param {Float} ry
   * @param {Float} rz
   * @param {Int} dim
   * @param {Int} color
   * @param {Array} pedDriver
   * @param {Int} index
   *
   * @return {alt.Vehicle} ou null
   */
  constructor(model, x, y, z, rx, ry, rz, dim, color, pedDriver, index) {
    this.vehicle = null // Entity Vehicle
    this.model = `${model}`
    this.x = parseFloat(x)
    this.y = parseFloat(y)
    this.z = parseFloat(z)
    this.rx = parseFloat(rx)
    this.ry = parseFloat(ry)
    this.rz = parseFloat(rz)
    this.dim = parseInt(dim)
    this.color = parseInt(color)
    this.pedDriver = JSON.stringify(pedDriver)
    this.index = parseInt(index) || -1

    this.create()
    this.properties()
    this.stream()

    return this.vehicle
  }

  create() {
    this.vehicle = new alt.Vehicle(
      alt.hash(this.model),
      parseFloat(this.x),
      parseFloat(this.y),
      parseFloat(this.z),
      parseFloat(this.rx),
      parseFloat(this.ry),
      parseFloat(this.rz)
    )
  }

  properties() {
    if (!this.vehicle) return
    this.vehicle.primaryColor = this.color
    this.vehicle.secondaryColor = this.color
    this.vehicle.dimension = parseInt(this.dim)
    this.vehicle.numberPlateText = 'NPC-' + this.vehicle.id
  }

  stream() {
    if (!this.vehicle) return
    // On spécifie un tableau vide,
    // dans ce tableau on stockera tous les Player.id qui auront vu ce vehicule,
    // lorsque ce dernier redeviendra vide alors on destroy le vehicule
    this.vehicle.setStreamSyncedMeta('NPCVehicleSeenByID', [])

    // Determine les occupants, le style de conduite et surtout,
    // on spécifie que c'est un vehicule pour NPC en le déclarant
    this.vehicle.setStreamSyncedMeta('NPCVehicle', this.pedDriver)

    // Nous spécifions l'index du point de spawn,
    // afin de si on le souhaite lors du despawn de pouvoir faire spawn au meme endroit initial
    this.vehicle.setStreamSyncedMeta(
      'NPCVehiclePointSpawnID',
      parseInt(this.index)
    )
  }
}
