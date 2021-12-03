interface Students {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Students = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  location: "New York",
};
const student2: Students = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Paris",
};

const studentsList: Students[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

const tableHead: HTMLTableSectionElement = document.createElement("thead");
const headerFirstName: HTMLTableCellElement = document.createElement("th");
const headerLastName: HTMLTableCellElement = document.createElement("th");
const headerAge: HTMLTableCellElement = document.createElement("th");
const headerLocation: HTMLTableCellElement = document.createElement("th");

headerFirstName.textContent = "First Name";
headerLastName.textContent = "Last Name";
headerAge.textContent = "Age";
headerLocation.textContent = "Location";
tableHead.append(headerFirstName, headerLastName, headerAge, headerLocation);
table.append(tableHead);


studentsList.forEach((student) => {
  const tr: HTMLTableRowElement = document.createElement("tr");
  const tdFirstName: HTMLTableCellElement = document.createElement("td");
  const tdLastName: HTMLTableCellElement = document.createElement("td");
  const tdAge: HTMLTableCellElement = document.createElement("td");
  const tdLocation: HTMLTableCellElement = document.createElement("td");

  tdFirstName.innerText = student.firstName;
  tdLastName.innerText = student.lastName;
  tdAge.innerText = student.age.toString();
  tdLocation.innerText = student.location;

  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdAge);
  tr.appendChild(tdLocation);

  table.appendChild(tr);
});
