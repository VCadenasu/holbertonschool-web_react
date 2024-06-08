interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "Victor",
    lastName: "Cadenas",
    age: 30,
    location: "Peru",
}

let student2: Student = {
    firstName: "Adair",
    lastName: "Arteaga",
    age: 25,
    location: "Peru",
}

const studentsList: Student[] = [student1, student2];

function createTable(data: Student[]): HTMLElement {
    const table = document.createElement("table");

    const tableBody = document.createElement("tbody");

    data.forEach(row => {
        const tableRow = document.createElement("tr");
        const firstName = row["firstName"];
        const location = row["location"];
        const rowsContent = [firstName, location];
        for (const content of rowsContent) {
            const cell = document.createElement("td");
            cell.textContent = content;
            tableRow.appendChild(cell);
        }

        tableBody.appendChild(tableRow);
    });

    table.appendChild(tableBody);

    return table;
}

const table = createTable(studentsList);
const body = document.querySelector("body");
body.appendChild(table);
