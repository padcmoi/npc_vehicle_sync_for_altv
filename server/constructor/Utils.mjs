import alt from 'alt'

export default {
  /**
   * Vérifie si l'argument est une chaine de caractères ou non
   *
   * @param {String} arg
   *
   * @return {Boolean}
   */
  isString(arg) {
    return typeof arg === 'string' ? true : false
  },

  /**
   * Vérifie si l'argument est un objet ou non
   *
   * @param {String} arg
   *
   * @return {Boolean}
   */
  isObject(arg) {
    return arg instanceof Object === true ? true : false
  },

  /**
   * Arrondir avec 0 ou plusieurs chiffres apres la décimale
   *
   * @param {Float} number
   * @param {Int} ends
   *
   * @return {Float}
   */
  roundNum(number, ends = 0) {
    return parseFloat(number.toFixed(ends))
  },

  /**
   * Génére un nombre aléatoire en spécifiant une valeur minimale et maximale
   *
   * @param {Int} min
   * @param {Int} max
   *
   * @return {Int}
   */
  getRandomInt(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  /**
   * Calcule de la distance entre 2 entités en Vector3
   *
   * @param {Object} entity1
   * @param {Object} entity2
   *
   * @return {Float}
   */
  dist(entity1, entity2) {
    if (!entity1 || !entity2) return

    const pos1 = entity1.pos
    const pos2 = entity2.pos

    let deltaX = pos2.x - pos1.x
    let deltaY = pos2.y - pos1.y
    let deltaZ = pos2.z - pos1.z
    let distance = Math.sqrt(
      deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ
    )
    return parseFloat(distance)
  },
}
