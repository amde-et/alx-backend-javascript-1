export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  return employees.reduce((prev, current) => [...prev, ...current]);
}
