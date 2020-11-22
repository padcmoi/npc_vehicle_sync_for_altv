import alt from 'alt'
import native from 'natives'

import Utils from '../common/Utils'
import pedsList from './data/pedsList'

/**
 * Gestion des peds en véhicule, NON TERMINE
 */
class PedDriverManager {
  constructor() {
    this.vehicleHandle = {}
    this.streamPedsList = []
    this.loadPeds()
    this.checkPeds()
  }

  loadPeds() {
    for (const ped of pedsList) {
      this.loadPed(ped)
    }
  }

  checkPeds() {
    alt.emitServer('console.log', JSON.stringify(this.streamPedsList))
    for (const ped of this.streamPedsList) {
      if (native.isPedInAnyVehicle(ped, false)) continue
      if (native.getEntityHealth(ped) === 0) {
        native.deleteEntity(ped)
        this.streamPedsList.splice(this.streamPedsList.indexOf(ped), 1)
      }
    }
    alt.setTimeout(() => this.checkPeds(), 2000)
  }

  loadPed(ped) {
    if (!native.hasModelLoaded(alt.hash(ped))) {
      native.requestModel(alt.hash(ped))
    }
  }

  create(vehicle) {
    if (!vehicle) return
    if (!vehicle instanceof alt.Vehicle) return
    if (!vehicle.hasStreamSyncedMeta('NPCVehicle')) return

    alt.emitServer('NPCVehicle.addSeenByID', vehicle)

    const pedsObjects = JSON.parse(vehicle.getStreamSyncedMeta('NPCVehicle'))

    this.vehicleHandle[vehicle.id] = []
    let seat = -1

    const groupId = native.createGroup(0)
    native.setGroupFormation(groupId, 1)

    // alt.emitServer('console.log', groupId + ' group created')
    for (const pedObject of pedsObjects) {
      this.loadPed(pedObject['model'])

      const pedID = native.createPedInsideVehicle(
        vehicle.scriptID,
        26,
        alt.hash(pedObject['model']),
        parseInt(seat)
      )

      native.setPedAsGroupMember(pedID, groupId)
      native.setPedRelationshipGroupDefaultHash(
        pedID,
        alt.hash('AMBIENT_GANG_BALLAS')
      )
      native.taskVehicleDriveWander(
        pedID,
        vehicle.scriptID,
        pedObject['speed'] || 20,
        pedObject['drivingStyle'] || 427
      )

      if (pedObject['weapon']) {
        native.giveWeaponToPed(
          pedID,
          alt.hash(pedObject['weapon']),
          9999,
          false,
          true
        )
        // alt.emitServer('console.log', pedID + ' has weapon')
      }

      this.vehicleHandle[vehicle.id].push(pedID)
      if (this.streamPedsList.indexOf(pedID) === -1) {
        this.streamPedsList.push(pedID)
      }

      seat += 1
    }

    native.setVehicleOnGroundProperly(vehicle.scriptID, 5.0) // à la création de l'entité on place proprement le véhicule au sol
    native.setVehicleFixed(vehicle.scriptID) // On répare uniquement à la création
  }

  destroy(vehicle) {
    if (!vehicle) return
    if (!vehicle instanceof alt.Vehicle) return
    if (!vehicle.hasStreamSyncedMeta('NPCVehicle')) return

    if (this.vehicleHandle.hasOwnProperty(vehicle.id)) {
      for (const pedID of this.vehicleHandle[vehicle.id]) {
        native.deleteEntity(pedID)
      }
      delete this.vehicleHandle[vehicle.id]
    }

    alt.emitServer('NPCVehicle.removeSeenByID', vehicle)
  }

  stolen(vehicle) {
    if (!vehicle) return
    if (!vehicle instanceof alt.Vehicle) return
    if (!vehicle.hasStreamSyncedMeta('NPCVehicle')) return

    if (this.vehicleHandle.hasOwnProperty(vehicle.id)) {
      delete this.vehicleHandle[vehicle.id]
    }

    alt.emitServer('NPCVehicle.removeSeenByID', vehicle)
  }
}

const pedDriverManager = new PedDriverManager()

alt.on('gameEntityCreate', (entity) => {
  pedDriverManager.create(entity)
})
alt.on('gameEntityDestroy', (entity) => {
  pedDriverManager.destroy(entity)
})
alt.onServer('NPCVehicle.vehicleStolen', (entity) => {
  pedDriverManager.stolen(entity)
})
