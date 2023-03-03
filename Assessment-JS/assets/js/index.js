let body = document.querySelector('body');

let table = document.createElement("table");
table.className = "myTable";


// add header
let header = {
    "id": "#", "custname": "NAME", "descrip": "DESCRIPTION", "status": "STATUS", "rate": "RATE",
    "balance": "BALANCE",
    "deposit": "DEPOSIT", "action": "Action"
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
        th.className = "filedname";
    }
}
tablehead(table, header);
console.log(table);


// fetch('http://localhost:3000/fromdata')
//     .then(response => response.json()).then(data => {

//         let tbody = document.createElement('tbody');
//         table.appendChild(tbody);

//         for (const element of data) {
//             let tr = document.createElement("tr");
//             tbody.appendChild(tr);
//             for (const item in header) {
//                 let td = document.createElement("td");
//                 let text = document.createTextNode(element[item]);
//                 td.appendChild(text);
//                 td.className = "tabledata";
//                 tr.appendChild(td);
//                 tr.className = "tablerow";
//             }
//      
//         }
//     })

//---------------------------------------------------
//  add data
let btn = document.getElementById('btn-save');

btn.addEventListener('click', (e) => {

    e.preventDefault();

    var custname = document.getElementById("custname").value;
    var descrip = document.getElementById("descrip").value;
    var status = document.getElementById("status").value;
    var rate = document.getElementById("rate").value;
    var balance = document.getElementById("balance").value;
    var deposit = document.getElementById("deposit").value;

    fetch('http://localhost:3000/fromdata', {
        method: 'POST',
        body: JSON.stringify({
            custname: custname,
            descrip: descrip,
            status: status,
            rate: rate,
            balance: balance,
            deposit: deposit
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .catch(error => console.error(error))

    var namecheck = /^[A-Za-z]{3,25}$/;
    var descripcheck = /^[A-Za-z]{3,150}$/;
    var filedvalided = /[0-9]/;


    var custname = document.getElementById('custname');
    var descrip = document.getElementById('descrip');
    var status = document.getElementById('status');

    if (custname == " ") {
        document.getElementById('custnameerror').innerHTML = " required";
    }
    else if (namecheck.test(custname)) {
        document.getElementById('custnameerror').innerHTML = " ";
        custname.style.border = "1px solid green";
    }
    else {
        document.getElementById('custnameerror').innerHTML = " Name is Invalid ";
        custname.style.border = "1px solid red";

    }
    //-------------------------------------------------------------------------------
    if (descripcheck.test(descrip)) {
        document.getElementById('descriperror').innerHTML = " ";
        descrip.style.border = "1px solid green";
    }
    else {
        document.getElementById('descriperror').innerHTML = " Description is Invalid ";
        descrip.style.border = "1px solid red";
    }
    if (filedvalided.test(status)) {
        document.getElementById('statuserror').innerHTML = " ";
        status.style.border = "1px solid green";
    }
    else {
        document.getElementById('statuserror').innerHTML = " This Field is Required ";
        status.style.border = "1px solid red";
    }

});
//----------------------------------------------------------------
fetch('http://localhost:3000/fromdata')
    .then(response => response.json())
    .then(data => {
        let tbody = table.createTBody();
        for (const element of data) {
            let tr = document.createElement("tr");
            tr.className = "tablerow";
            let td1 = document.createElement("td");

            let text1 = document.createTextNode(element["id"]);
            td1.appendChild(text1);
            tr.appendChild(td1);


            let td2 = document.createElement("td");
            let text2 = document.createTextNode(element["custname"]);
            td2.appendChild(text2);
            tr.appendChild(td2);
            td2.style.color = "black";

            let td3 = document.createElement("td");
            let text3 = document.createTextNode(element["descrip"]);
            td3.appendChild(text3);
            tr.appendChild(td3);

            let tdstatus = document.createElement("td");
            let txtstatus = document.createTextNode(element["status"]);
            tdstatus.appendChild(txtstatus);
            tr.appendChild(tdstatus);


            let tdrate = document.createElement("td");
            let textrate = document.createTextNode(element["rate"]);
            tdrate.appendChild(textrate);
            tr.appendChild(tdrate);
            tdrate.style.color = "#464F60";

            let tdbalance = document.createElement("td");
            let textbalance = document.createTextNode(element["balance"]);
            tdbalance.appendChild(textbalance);
            tr.appendChild(tdbalance);
            tdbalance.style.color = "#D12953";

            let tddeposit = document.createElement("td");
            let textdeposit = document.createTextNode(element["deposit"]);
            tddeposit.appendChild(textdeposit);
            tr.appendChild(tddeposit);
            tddeposit.style.color = "#464F60";

            let td4 = document.createElement("td");
            let btnDelete = document.createElement("button");
            btnDelete.className = "btn-delete";
            let deleteText = document.createTextNode("Delete");
            btnDelete.appendChild(deleteText);

            // delete the row 
            btnDelete.addEventListener('click', (e) => {
                rowDelete(element["id"]);  //json delete database
                table.deleteRow(tr.rowIndex)  // table in row
            }
            );
            let btnEdit = document.createElement("button");
            btnEdit.className = "btn-Edit";
            let editText = document.createTextNode("Edit");
            btnEdit.appendChild(editText);


            // update employee
            btnEdit.addEventListener('click', (e) => {
                rowEdit(element)
            }
            );
            td4.appendChild(btnDelete);
            td4.appendChild(btnEdit);
            tr.appendChild(td4);
            tbody.appendChild(tr);
        }
    })
    .catch(error => console.error(error));

function rowDelete(row) {
    fetch(`http://localhost:3000/fromdata/${row}`, { method: 'DELETE' })
}
let updatebtn = document.getElementById("btn-update");


function rowEdit(element) {
    let custname = document.getElementById("custname");
    let descrip = document.getElementById("descrip");
    let status = document.getElementById("status");
    let rate = document.getElementById("rate");
    let balance = document.getElementById("balance");
    let deposit = document.getElementById("deposit");

    custname.value = element.custname,
        descrip.value = element.descrip,
        status.value = element.status,
        rate.value = element.rate,
        balance.value = element.balance,
        deposit.value = element.deposit

    updatebtn.addEventListener("click", (event) => {
        //event.preventDefault();
        let newData = {
            custname: custname.value,
            descrip: descrip.value,
            status: status.value,
            rate: rate.value,
            balance: balance.value,
            deposit: deposit.value

        }

        fetch(`http://localhost:3000/fromdata/${element.id}`, {
            method: 'PUT',
            body: JSON.stringify(
                newData
            ),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    })

}
//----------------------------------------------------------------
// function filterData() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("filter");
//     let selected = ['Open', 'Error', 'Inactive', 'Success'];
//     filter = selected.value;
//     console.log(filter);
//     table = document.getElementById("myTable");
//     tr = document.getElementsByClassName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[1];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
//-----------------------------------------------------------------
body.appendChild(table);