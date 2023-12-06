// Create a directory task_1 and copy these configuration files into this folder:
// package.json, tsconfig.json, webpack.config.js

// firstName(string) and lastName(string). These two attributes should only
//  be modifiable when a Teacher is first initialized
// fullTimeEmployee(boolean) this attribute should always be defined
// yearsOfExperience(number) this attribute is optional
// location(string) this attribute should always be defined
// Add the possibility to add any attribute to the Object like
//  contract(boolean) without specifying the name of the attribute

// Task 1
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

// task 2
// Write an interface named Directors that extends Teacher. It requires an
//    attribute named numberOfReports(number)
export interface Director extends Teacher {
  numberOfReports: number;
}

// Task 3
// Write a function printTeacher:
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Task 4
// Write a Class named StudentClass:
export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export class StudentClass implements IStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this._firstName;
  }
}
