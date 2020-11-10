import alt from 'alt'
import Utils from './Utils.mjs'
import pedsList from '../data/pedsList'
import vehiclesList from '../data/vehiclesList'

/**
 * Ped aléatoire
 *
 * @return {String} - Le ped
 */
const randomPed = function () {
  if (pedsList.length === 0) return 'mp_m_freemode_01'
  let randomMax = pedsList.length - 1
  let index = Utils.getRandomInt(0, randomMax)

  return pedsList[index]
}

/**
 * Retourne un véhicule, un ped et ses paramètres de conduite
 *
 * @returns {Object} drivingStyle, speed, vehicle, ped
 */
const randomVehicleAndPed = function () {
  if (vehiclesList.length === 0) return 'infernus'
  let randomMax = vehiclesList.length - 1
  let index = Utils.getRandomInt(0, randomMax)

  return vehiclesList[index]
}

export { randomPed, randomVehicleAndPed }
