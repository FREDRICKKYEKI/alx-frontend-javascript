// - Write an interface named Student that accepts the following elements:
//      firstName(string), lastName(string), age(number), and location(string)
// - Create two students, and create an array named studentsList containing
//      the two variables
// - Using Vanilla Javascript, render a table and for each elements in the
//      array, append a new row to the table
// - Each row should contain the first name of the student and the location
// Requirements:
// - When running, Webpack should return No type errors found.
// - Every variable should use TypeScript when possible.

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 24,
  location: 'San Francisco',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');

const thead = document.createElement('thead');

const tbody = document.createElement('tbody');

const trHead = document.createElement('tr');

const th1 = document.createElement('th');

const th2 = document.createElement('th');

th1.innerHTML = 'firstName';

th2.innerHTML = 'location';

trHead.appendChild(th1);

trHead.appendChild(th2);

thead.appendChild(trHead);

table.appendChild(thead);

studentsList.forEach((student) => {
  const trBody = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  td1.innerHTML = student.firstName;
  td2.innerHTML = student.location;
  trBody.appendChild(td1);
  trBody.appendChild(td2);
  tbody.appendChild(trBody);
});

table.appendChild(tbody);

document.body.appendChild(table);
