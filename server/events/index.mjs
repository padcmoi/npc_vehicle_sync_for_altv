import alt from 'alt'
// LOG Test from client
alt.onClient('console.log', (player, msg) => {
  if (!player || !player.isConnect) return
  alt.log(msg)
})

// Events natifs RageMP
import './playerConnect.mjs'
import './playerDisconnect.mjs'
import './entityEnterColshape.mjs'
import './entityLeaveColshape.mjs'
import './playerEnteredVehicle.mjs'
import './vehicleDestroy.mjs'

// Events personnalisés
import './VehicleNPCManager.mjs'
