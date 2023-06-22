let tableobj= [
    {"id":"1","firstname":"dom","lastname":"patel"},
    {"id":"2","firstname":"jery","lastname":"desai"},
    {"id":"3","firstname":"dinesh","lastname":"patel"}
];


// let data=Object.keys(tableobj[0]);

// let table=document.querySelector("table");
// let data=Object.keys(tableobj[0]);

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




let table=document.createElement("table");

let data=tablehead(table,tableobj);
console.log(data);

let datatbody=tablebody(table,tableobj);
console.log(datatbody);
// let table=document.createElement("table");

let body=document.querySelector("body");
body.appendChild(table);

let list=[
    {Name:"contact us",link:"https://www.google.co.in/"},
    {Name:"About Us",link:"https://www.google.co.in/"},
    {Name:"Home",link:"https://www.google.co.in/"}
];

let aside=document.createElement("aside");


function sidebarlist(aside,data){
    let ul=document.createElement('ul');
    aside.appendChild(ul);
    for (const itrerator of data) {
            let li=document.createElement('li');
            ul.appendChild(li);
            let a=document.createElement('a');
            li.appendChild(a);
            let text=document.createTextNode(itrerator.Name);
            a.appendChild(text);
            a.setAttribute("href",itrerator.link);
    }
}

let list1=sidebarlist(aside,list);
console.log(list1);
body.appendChild(aside);