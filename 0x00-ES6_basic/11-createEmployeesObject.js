export default function createEmployeesObject(departmentName, employees) {
  const company = {
    [departmentName]: employees,
  };
  return company;
}

if (require.main === module) {
  console.log(createEmployeesObject('Software', ['Bob', 'Sylvie']));
}
