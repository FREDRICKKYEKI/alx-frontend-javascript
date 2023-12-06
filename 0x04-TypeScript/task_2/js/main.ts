//task 5
// Create the DirectorInterface interface with the 3 expected methods:
//  - workFromHome() returning a string
//  - getCoffeeBreak() returning a string
//  - workDirectorTasks() returning a string
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Create the TeacherInterface interface with the 3 expected methods:
// - workFromHome() returning a string
// - getCoffeeBreak() returning a string
// - workTeacherTasks() returning a string
export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create a class Director that will implement DirectorInterface
// - workFromHome should return the string Working from home
// - getToWork should return the string Getting a coffee break
// - workDirectorTasks should return the string Getting to director tasks
export class Director implements DirectorInterface {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  numberOfReports: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = true;
    this.location = 'London';
    this.numberOfReports = 17;
  }

  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Create a class Teacher that will implement TeacherInterface
// - workFromHome should return the string Cannot work from home
// - getCoffeeBreak should return the string Cannot have a break
// - workTeacherTasks should return the string Getting to work
export class Teacher implements TeacherInterface {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = true;
    this.location = 'London';
    this.yearsOfExperience = 12;
  }

  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create a function createEmployee with the following requirements:
// -  It can return either a Director or a Teacher instance
// -  It accepts 1 arguments:
//      -  `salary`(either number or string)
// -  if salary is a number and less than 500 - It should return a new Teacher.
//        Otherwise it should return a Director
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher('John', 'Doe');
  }
  return new Director('John', 'Doe');
}

// task 6
// Write a function isDirector:
// -  it accepts employee as an argument
// -  it will be used as a type predicate and if the employee is a director
export function isDirector(
  employee: DirectorInterface | TeacherInterface
): employee is Director {
  return employee instanceof Director;
}

// Write a function executeWork:
// - it accepts employee as an argument
// - if the employee is a Director, it will call workDirectorTasks
// - if the employee is a Teacher, it will call workTeacherTasks
export function executeWork(
  employee: DirectorInterface | TeacherInterface
): string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

// task 7
// Write a String literal type named Subjects allowing a variable to have the
//  value Math or History only. Write a function named teachClass:
// - it takes todayClass as an argument
// - it will return the string Teaching Math if todayClass is Math
// - it will return the string Teaching History if todayClass is History

export type Subjects = 'Math' | 'History';
