fetch('http://localhost:3000/table')
.then((response)=>response.json())
.then((value)=>localStorage.setItem("value", JSON.stringify(value)));

// fetch('http://localhost:3000/table')
// .then((response)=>response.json())
// .then((value)=>localStorage.setItem("value", JSON.stringify(value)));

async function postData(url , data) {
 
    const response = await fetch(url, {
      method: 'POST',
    //   mode: 'cors', 
    //   cache: 'no-cache',
    //   credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
    //   redirect: 'follow', 
    //   referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }
  
  postData('http://localhost:3000/table', {"firstname":"dom","lastname":"patel"})
    .then((data) => {
      console.log(data); 
    });

let c=localStorage.getItem("value");
let d=JSON.parse(c);


let table=document.createElement("table");

function tablehead(table,data){
    let thead=document.createElement('thead');
    table.appendChild(thead);
    let tr=document.createElement('tr');
    thead.appendChild(tr);
    for (const key in data[0]) {
        let th=document.createElement('th');
        tr.appendChild(th);
        let text=document.createTextNode(key);
        th.appendChild(text);
       
    }
}

function tablebody(table,data){
    let tbody=document.createElement('tbody');
    table.appendChild(tbody);
    
    for (const element of data) {
        let tr=document.createElement('tr');
        tbody.appendChild(tr);
    
    for (const key in element) {
        let td=document.createElement('td');
        tr.appendChild(td);
        let text=document.createTextNode(element[key]);
        td.appendChild(text);  
    }
}
}




let data=tablehead(table,d);
console.log(table);


let datatbody=tablebody(table,d);
// console.log(datatbody);
let domprint=document.querySelector("body");
domprint.appendChild(table);
// function tablebody(table,data){
//       let tbody=document.createElement('tbody');
//       table.appendChild(tbody);
      
//       for (const element of data) {
//           let tr=document.createElement('tr');
//           tbody.appendChild(tr);
      
//       for (const key in element) {
//           let td=document.createElement('td');
//           tr.appendChild(td);
//           let text=document.createTextNode(element[key]);
//           td.appendChild(text);  
//       }
//       }
//     }



// async function postData(url , data) {
 
//     const response = await fetch(url, {
//       method: 'POST',
//       // mode: 'cors', 
//       // cache: 'no-cache',
//       // credentials: 'same-origin', 
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       // redirect: 'follow', 
//       // referrerPolicy: 'no-referrer', 
//       body: JSON.stringify(data) 
//     });
//     return response.json(); 
//   }
  
  // postData('http://localhost:3000/posts', {"firstname":"dom","lastname":"patel"})
  //   .then((data) => {
  //     console.log(data); 
  //   });

// let c=localStorage.getItem("value");
// let d=JSON.parse(c);




// function tablebody(table,data){
//     let tbody=document.createElement('tbody');
//     table.appendChild(tbody);
    
//     for (const element of data) {
//         let tr=document.createElement('tr');
//         tbody.appendChild(tr);
    
//     for (const key in element) {
//         let td=document.createElement('td');
//         tr.appendChild(td);
//         let text=document.createTextNode(element[key]);
//         td.appendChild(text);  
//     }
// }
// }




// let data=tablehead(table,data);
// console.log(table);


// // let datatbody=tablebody(table,d);
// // // console.log(datatbody);

// let domprint=document.querySelector("body");
// domprint.appendChild(table);