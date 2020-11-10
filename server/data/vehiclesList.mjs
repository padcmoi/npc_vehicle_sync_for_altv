// Exemple d'un fichier de configuration
// le drivingStyle 427 est le style de conduite courant de GTA 5 selon mon experience
// Les peds respecterong les points suivants:
// . Stop before vehicles
// . Stop before peds
// . Avoid empty vehicles
// . Avoid objects
// . Stop at traffic lights
// . Use blinkers
//
// Si vous souhaitez voir apparaitre le plus possible un model de véhicule,
// rajouter un véhicule identique à la liste comme
// { drivingStyle: 427, speed: 20, vehicle: 'emperor2' }
//
// Speed à 20, semble être la vitesse de conduite et semble être la vitesse par défaut,
// au dela le risque d'accident est elevé
//
// la clé ped n'est pas obligatoire,
// si ce champs n'est pas désigné ce sera alors un ped aléatoire
//
// si vous designez la clé weapon avec un id de l'arme, votre ped aura une arme si vous le braquez
//
// Il est possible d'ajouter un passenger ou plus (verifiez avant si le vehicule le permet, pas de vérification),
// pour cela ajouter un objet dans passenger: ped et weapon (optionnel)
// les peds seront placés dans l'ordre:
//  -1 pour conducteur,
//   0 pour passenger et ainsi de suite ...
export default [
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'emperor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'imperator', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'ninef', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'kanjo', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'brioso', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'asbo', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'f620', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'windsor2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'daemon', passenger: [] },
  { drivingStyle: 427, speed: 300, vehicle: 'bati2', passenger: [] },
  { drivingStyle: 427, speed: 300, vehicle: 'hakuchou', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'buccaneer', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'ellie', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'hotknife', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'sabregt', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'stalion2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'impaler', passenger: [] },
  { drivingStyle: 262571, speed: 20, vehicle: 'brawler', passenger: [] },
  { drivingStyle: 262571, speed: 150, vehicle: 'kamacho', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'bodhi2', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'mesa3', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'rebel', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'blazer4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'dubsta3', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'yosemite', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'towtruck2', passenger: [] },
  { drivingStyle: 262571, speed: 20, vehicle: 'baller4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'mesa', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'huntley', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'toros', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'cog55', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'cheburek', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'carbonizzare', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'comet3', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'buffalo3', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'buffalo', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'italigto', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'sentinel3', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'italigtb2', passenger: [] },
  { drivingStyle: 427, speed: 200, vehicle: 'zentorno', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'camper', passenger: [] },

  ///////////////////////////////////// Special /////////////////////////////////////
  {
    drivingStyle: 427,
    speed: 20,
    vehicle: 'mule4',
    ped: 's_m_m_trucker_01',
    weapon: 'weapon_appistol',
    passenger: [],
  },
  {
    drivingStyle: 262200,
    speed: 20,
    vehicle: 'bmx',
    ped: 'csb_ballasog',
    weapon: 'weapon_appistol',
    passenger: [],
  },
  {
    drivingStyle: 60,
    speed: 150,
    vehicle: 'contender',
    ped: 'csb_ballasog',
    weapon: 'weapon_appistol',
    forceColor: 42,
    passenger: [
      { model: 'csb_ballasog', weapon: 'weapon_appistol' },
      { model: 'csb_ballasog', weapon: 'weapon_appistol' },
      { model: 'csb_ballasog', weapon: 'weapon_microsmg' },
      { model: 'csb_ballasog', weapon: 'weapon_microsmg' },
    ],
  },
  {
    drivingStyle: 60,
    speed: 230,
    vehicle: 'elegy',
    ped: 'a_m_y_indian_01',
    weapon: 'weapon_marksmanpistol',
    passenger: [],
  },
  {
    drivingStyle: 60,
    speed: 230,
    vehicle: 'omnis',
    ped: 'g_f_y_vagos_01',
    weapon: 'weapon_microsmg',
    passenger: [],
  },
  {
    drivingStyle: 60,
    speed: 230,
    vehicle: 'sultan2',
    ped: 'csb_ballasog',
    weapon: 'weapon_appistol',
    passenger: [{ model: 'csb_ballasog', weapon: 'weapon_appistol' }],
  },
  {
    drivingStyle: 60,
    speed: 230,
    vehicle: 'tropos',
    ped: 'a_m_y_gay_01',
    weapon: 'weapon_knife',
    passenger: [],
  },
  {
    drivingStyle: 60,
    speed: 200,
    vehicle: 'jester2',
    ped: 'a_m_y_gay_01',
    weapon: 'weapon_knife',
    passenger: [],
  },
  {
    drivingStyle: 60,
    speed: 200,
    vehicle: 'kuruma',
    ped: 'csb_ballasog',
    weapon: 'weapon_appistol',
    passenger: [{ model: 'csb_ballasog', weapon: 'weapon_appistol' }],
  },
  {
    drivingStyle: 60,
    speed: 200,
    vehicle: 'pariah',
    ped: 'ig_benny',
    weapon: 'weapon_revolver',
    passenger: [],
  },
  // ///////////////////////////////////// Special /////////////////////////////////////

  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
  { drivingStyle: 427, speed: 20, vehicle: 'tornado4', passenger: [] },
]
