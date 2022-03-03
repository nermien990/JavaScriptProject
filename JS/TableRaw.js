let localData = {};
export default class EmulatedlocalStorage {
  static getItem(key) {
    return localData[key];
  }
  static setItem(key, value) {
    localData[key] = value;
  }
}
