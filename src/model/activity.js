'use strict'


export default class Activity {
  constructor(name="") {
    this._name = name
  }

  toString() {
    return `Activity: ${this._name}`
  }
}
