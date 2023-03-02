let body = document.querySelector('body');

let table = document.createElement("table");
table.className = "myTable";


// add header
let header = {
    "id": "ID", "firstname": "Full Name", "lastname": "Last Name", "phonenum": "Phone number", "emailid": "Email ID",
    "password": "Password",
    "salary": "Salary"
};

function tablehead(table, data) {
    let thead = document.createElement('thead');
    table.appendChild(thead);
    let tr = document.createElement('tr');
    thead.appendChild(tr);
    for (const key in data) {
        let th = document.createElement('th');
        tr.appendChild(th);
        let text = document.createTextNode(data[key]);
        th.appendChild(text);

    }
}
tablehead(table, header);
console.log(table);


fetch('http://localhost:3000/data')
    .then(response => response.json()).then(data => {

        let tbody = document.createElement('tbody');
        table.appendChild(tbody);

        for (const element of data) {
            let tr = document.createElement("tr");
            tbody.appendChild(tr);
            for (const item in header) {
                let td = document.createElement("td");
                let text = document.createTextNode(element[item]);
                td.appendChild(text);
                tr.appendChild(td);
            }
        }
    })

body.appendChild(table);