// Create a function updateStudentGradeByCity that returns an array of
// students for a specific city with their new grade
// It should accept a list of students (from getListStudents), a city (String),
//  and newGrades (Array of “grade” objects) as parameters.
// newGrades is an array of objects with this format:
//   {
//     studentId: 31,
//     grade: 78,
//   }
// If a student doesn’t have grade in newGrades, the final grade should
// be N/A.
// You must use filter and map combined

export default function updateStudentGradeByCity(
  arrayOfStudents,
  city,
  newGrades,
) {
  const studentsByCity = arrayOfStudents.filter(
    (student) => student.location === city,
  );
  const studentsWithNewGrades = studentsByCity.map((student) => {
    const studentGrade = newGrades.filter(
      (grade) => grade.studentId === student.id,
    );
    const grade = studentGrade.length === 1 ? studentGrade[0].grade : 'N/A';
    return {
      ...student,
      grade,
    };
  });
  return studentsWithNewGrades;
}
