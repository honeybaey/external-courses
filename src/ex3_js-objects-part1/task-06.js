function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  if (obj instanceof Array) {
    let copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    let copy = {};
    for (let key in obj) {
      copy[key] = deepClone(obj[key]);
    }
    return copy;
  }
}

module.exports = deepClone;
