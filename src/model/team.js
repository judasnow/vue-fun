'use strict'


export default class Team {
  constructor(name, desc) {
    this._name = name
    this._desc = desc
  }

  toString() {
    return `Team: ${this._name}`
  }
}
