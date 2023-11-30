// Implement a class named HolbertonCourse:
//      - Constructor attributes:
//          - name (String)
//          - length (Number)
//          - students (array of Strings)
//      - Make sure to verify the type of attributes during object creation
//      - Each attribute must be stored in an “underscore” attribute
//          version (ex: name is stored in _name)
//      - Implement a getter and setter for each attribute.
export default class HolbertonCourse {
  constructor(name, length, students) {
    switch (true) {
      case typeof name !== 'string':
        throw new TypeError('Name must be a string');
      case typeof length !== 'number':
        throw new TypeError('Length must be a number');
      case !Array.isArray(students):
        throw new TypeError('Students must be a array');
      default:
        break;
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  static assertType(variable, type, condition) {
    if (!condition) {
      throw new TypeError(`${variable} must be a ${type}`);
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    this.assertType('Name', 'string', typeof name === 'string');
    this._name = name;
  }

  set length(l) {
    this.assertType('Length', 'number', typeof l === 'number');
    this._length = l;
  }

  set students(stdnts) {
    this.assertType('Students', 'array', Array.isArray(stdnts));
    this._students = stdnts;
  }
}
