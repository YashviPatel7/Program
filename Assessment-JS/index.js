
//----------------------------------------------------------------------------------------------------

// add header
let header = {
    "id": "#", "custname": "NAME", "descrip": "DESCRIPTION", "status": "STATUS", "rate": "RATE",
    "balance": "BALANCE",
    "deposit": "DEPOSIT"
};
// add table body


fetch('http://localhost:3000/fromdata')
    .then(response => response.json()).then(data => { tableBody(data) })

// tblBody.innerHTML = " "

function tableBody(data) {
    const tblBody = document.querySelector("#tableTbody");

    for (const element of data) {
        let tblRow = document.createElement("tr");
        tblBody.appendChild(tblRow);
        for (const item in header) {
            let tblData = document.createElement("td");
            let text = document.createTextNode(element[item]);

            if (item == "custname" || item == "id") {
                tblData.classList.add("bold");
                // td.style.bgcolor = "black";
                // td.style.color = "green";

            }

            if (item == "status") {
                // console.log(item);
                let span = document.createElement("span");
                if (element[item] == "Error") {
                    span.className = "errorOption";
                }
                else if (element[item] == "Open") {
                    span.className = "openOption";
                }
                else if (element[item] == "Success") {
                    span.className = "successOption";
                }
                else if (element[item] == "Inactive") {
                    span.className = "inactiveOption";

                }
                let text = document.createTextNode(element[item]);
                span.appendChild(text);
                tblData.appendChild(span)
            }
            else {

                tblData.appendChild(text);
            }
            tblData.className = "tabledata";
            tblRow.appendChild(tblData);
            tblRow.className = "tablerow";

        }
        let td4 = document.createElement("td");
        let btnDelete = document.createElement("button");
        btnDelete.className = "btn-delete";
        let deleteText = document.createTextNode("Delete");
        btnDelete.appendChild(deleteText);

        // delete the row 
        btnDelete.onclick = (e) => {
            e.preventDefault();
            rowDelete(element["id"]);  //json delete database
            table.deleteRow(tblRow.rowIndex)  // table in row
        };

        let btnEdit = document.createElement("button");
        btnEdit.className = "btn-Edit";
        let editText = document.createTextNode("Edit");
        btnEdit.appendChild(editText);


        // update employee
        btnEdit.onclick = (e) => {
            // e.preventDefault();
            rowEdit(element)
        };

        td4.appendChild(btnDelete);
        td4.appendChild(btnEdit);
        tblRow.appendChild(td4);
        tblBody.appendChild(tblRow);
    }
}

//  add data
// let btnSave = document.getElementById('btnSave');

function btnsave(event) {
    event.preventDefault();

    var custname = document.getElementById("custname").value;
    var descrip = document.getElementById("descrip").value;
    var status = document.getElementById("selectOption").value;
    var rate = document.getElementById("rate").value;
    var balance = document.getElementById("balance").value;
    var deposit = document.getElementById("deposit").value;

    fetch('http://localhost:3000/fromdata', {
        method: 'POST',
        body: JSON.stringify({
            custname: custname,
            descrip: descrip,
            status: selectOption,
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
    var status = document.getElementById('selectOption');

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

};
// .catch(error => console.error(error));

//---------------------------------------------------



//----------------------------------------------------------------

// delete data
function rowDelete(row) {
    fetch(`http://localhost:3000/fromdata/${row}`, { method: 'DELETE' })
}

let updatebtn = document.getElementById("btnUpdate");

// edit data
function rowEdit(element) {
    let custname = document.getElementById("custname");
    let descrip = document.getElementById("descrip");
    let status = document.getElementById("selectOption");
    let rate = document.getElementById("rate");
    let balance = document.getElementById("balance");
    let deposit = document.getElementById("deposit");

    custname.value = element.custname,
        descrip.value = element.descrip,
        status.value = element.selectOption,
        rate.value = element.rate,
        balance.value = element.balance,
        deposit.value = element.deposit

    updatebtn.onclick = (event) => {

        let newData = {
            custname: custname.value,
            descrip: descrip.value,
            status: selectOption.value,
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
    }

}

//filter data

let filter = document.getElementById("filter");
//----------------------------------------------------------------
function filterData() {
    console.log(filter.value);
    fetch('http://localhost:3000/fromdata')
        .then(response => response.json()).then(data => {
            // debugger
            let newData = data.filter(item => (item.status == filter.value || filter.value == "all"))

            tableBody.innerHTML = " ";
            tableBody(newData)
        })
}
//-----------------------------------------------------------------
window.onload = onWinload();
function onWinload() {



}

//add customer form
let btnAdd = document.getElementById('addCustomer');

btnAdd.onclick = (e) => {
    let form = document.getElementById('custForm');
    if (form.style.display == 'none') {
        //  this SHOWS the form
        form.style.display = 'block';
    } else {
        //  this HIDES the form
        form.style.display = 'none';
    }
};