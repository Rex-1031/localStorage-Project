
//Store items in localStorage

function store(){
    let brand = document.getElementById('carBrand').value;
    let price = document.getElementById('carPrice').value;
    let key = document.getElementById('key').value;

    const car ={
        brand: brand,
        price: price
    }

    //converts object to string. 
    window.localStorage.setItem(key,JSON.stringify(car));
}


function retriveRecords(){
    console.log("retrieve records");
    let key = document.getElementById('retrieveKey').value;
    let records = window.localStorage.getItem(key);
    let paragraph = document.createElement("p");
    let infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    let element = document.getElementById("retrieve")
    element.appendChild(paragraph);
}

function removeItem(){
    let key = document.getElementById('removeKey').value;
    localStorage.removeItem(key)
    console.log("remove items");
}


function clearStorage(){
    localStorage.clear()
    console.log('clear records')


}

window.onload = function(){
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick= removeItem
    document.getElementById('retrieveButton').onclick= retriveRecords
}