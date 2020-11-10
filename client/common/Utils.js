import alt from 'alt'

export default {
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
}
