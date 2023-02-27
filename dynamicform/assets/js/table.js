var form=document.querySelector('form');

  // add the data in table
form.addEventListener('submit',(e)=>{

  e.preventDefault();
  
  var fname=document.getElementById("fname").value;
  var techname=document.getElementById("techname").value;
  
  fetch('http://localhost:3000/form', {
      method: 'POST',
      body:JSON.stringify({
        fname:fname,
        techname:techname
      }),
      headers: {
                "Content-Type": "application/json; charset=UTF-8"
              }
            })
            .catch(error => console.error(error))
});


let body=document.querySelector('body');
let table=document.createElement("table");


// add header
let header={"id":"ID","fname":"Full Name","techname":"Technology","action":"Action"};

function tablehead(table,data){
    let thead=document.createElement('thead');
    table.appendChild(thead);
    let tr=document.createElement('tr');
    thead.appendChild(tr);
    for (const key in data) {
        let th=document.createElement('th');
        tr.appendChild(th);
        let text=document.createTextNode(data[key]);
        th.appendChild(text);
       
    }
}
tablehead(table,header);
// console.log(table);


fetch('http://localhost:3000/form')
    .then(response=>response.json())
    .then(data=>{
      let tbody=table.createTBody();
      for (const element of data) {
         let tr=document.createElement("tr");

         let td1=document.createElement("td");
         let text1=document.createTextNode(element["id"]);
         td1.appendChild(text1);
         tr.appendChild(td1);

         let td2=document.createElement("td");
         let text2=document.createTextNode(element["fname"]);
         td2.appendChild(text2);
         tr.appendChild(td2);

         let td3=document.createElement("td");
         let text3=document.createTextNode(element["techname"]);
         td3.appendChild(text3);
         tr.appendChild(td3);

         let td4=document.createElement("td");
         let btnDelete=document.createElement("button");
         btnDelete.className="btn-delete";
         let deleteText=document.createTextNode("Delete");
         btnDelete.appendChild(deleteText);

     // delete the row 
         btnDelete.addEventListener('click',(e)=>{
          rowDelete(element["id"]);  //json delete database
          table.deleteRow(tr.rowIndex)  // table in row
    }
    );

    
         let btnEdit=document.createElement("button");
         btnEdit.className="Edit";
         let editText=document.createTextNode("Edit");
         btnEdit.appendChild(editText);


      // update employee
      btnEdit.addEventListener('click',(e)=>{
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

    function rowDelete(row){
      fetch(`http://localhost:3000/form/${row}`,{method : 'DELETE'})
      }
let updatebtn = document.getElementById("btn-update");


      function rowEdit(element){

        let fname=document.getElementById("fname");
        let techname=document.getElementById("techname");
        fname.value=element.fname;
        techname.value=element.techname;

        updatebtn.addEventListener("click",(event)=>{
        //event.preventDefault();
          let newData = {
           
            fname: fname.value,
            techname:techname.value
          }

          fetch(`http://localhost:3000/form/${element.id}`,{
            method: 'PUT',
            body:JSON.stringify(
              newData
            ),
            headers: {
                      "Content-Type": "application/json; charset=UTF-8"
                    }
                  }).then(res=>res.json())
                  .then(data=>console.log(data))
                  .catch(err=>console.log(err))
        })

      }

      // document.getElementsByClassName("update-btn").setAttribute("style",": 20px");
body.appendChild(table);