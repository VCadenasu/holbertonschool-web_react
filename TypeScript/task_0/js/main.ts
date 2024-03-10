interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Rebecca",
    lastName: "Chambers",
    age: 23,
    location: "New York",
};

const student2: Student = {
    firstName: "Leon",
    lastName: "Kennedy",
    age: 25,
    location: "Miami",
};

const studentsList: Student[] = [student1, student2];

function createTable(data: Student[], headers: string[]): HTMLElement {
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

const table = createTable(studentsList, null);
console.log(table.outerHTML);