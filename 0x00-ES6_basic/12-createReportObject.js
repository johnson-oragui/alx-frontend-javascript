import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return report;
}

if (require.main === module) {
  const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
  };

  const report = createReportObject(employees);
  console.log(report.allEmployees);
  console.log(report.getNumberOfDepartments(report.allEmployees));
}
