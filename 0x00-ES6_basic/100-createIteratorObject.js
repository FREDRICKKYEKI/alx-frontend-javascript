export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      const departments = Object.values(report.allEmployees);
      let employeeIndex = 0;
      let departmentIndex = 0;
      while (departmentIndex < departments.length) {
        const employees = departments[departmentIndex];
        if (employeeIndex >= employees.length) {
          employeeIndex = 0;
          departmentIndex += 1;
        } else {
          const pair = employees[employeeIndex];
          employeeIndex += 1;
          yield pair;
        }
      }
    },
  };
}
