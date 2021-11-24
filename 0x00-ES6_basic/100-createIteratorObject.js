export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  const iter = employees.reduce((prev, current) => [...prev, ...current]);
  return iter[Symbol.iterator]();
}
