// Create a function getStudentsByLocation that returns an array of objects
//  who are located in a specific city.
// It should accept a list of students (from getListStudents) and a
//  city (string) as parameters.
// You must use the filter function on the array.

export default function getStudentsByLocation(arrayOfStudents, city) {
  return arrayOfStudents.filter((student) => student.location === city);
}
