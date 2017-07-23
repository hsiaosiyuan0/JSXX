export class Enum {
  static _code = 0

  _code = 0
  _label = ""
  _extra = null

  constructor (label, extra = null, code = -1) {
    this._label = label
    this._extra = extra
    if (code === -1) {
      this._code = ++this.constructor._code
    }
  }

  get code () {
    return this._code
  }

  get label () {
    return this._label
  }

  get extra () {
    return this._extra
  }

  toJSON () {
    return {code: this._code, label: this._label}
  }
}

export const enumerate = (extra, code) => {
  return (target, prop, desc) => {
    desc.initializer = () => {
      return new target(prop, extra, code)
    }
  }
}
