export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const employeesList = [];
  employees.forEach((element) => employeesList.push(...element));
  return employeesList;
}
