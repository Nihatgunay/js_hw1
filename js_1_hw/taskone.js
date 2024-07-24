let todonumber = document.querySelector("#number");
let todoFullname = document.querySelector("#fullname");
let todoposition = document.querySelector("#position");
let todobtnadd = document.querySelector("#buttonadd");
let todobtnclear = document.querySelector("#buttonclear");
let todoitemNumbers = document.querySelector("#ulnumber");
let todoitemNames = document.querySelector("#ulname");
let todoitemPositions = document.querySelector("#ulpos");

todobtnclear.addEventListener("click", function() {
    todonumber.value = "";
    todoFullname.value = "";
    todoposition.value = "";
    console.log("Cleared");
});


todobtnadd.addEventListener("click", function() {
    if (todoFullname.value == "" || todonumber.value == "" || todoposition.value == "") {
        alert("Input cannot be null");
        return; 
    }

    let liNumber = document.createElement("li");
    let liName = document.createElement("li");
    let liPosition = document.createElement("li");
    
    liNumber.innerText = todonumber.value;
    liName.innerText = todoFullname.value;
    liPosition.innerText = todoposition.value;
    
    let deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerText = "Remove";
    deletebtn.style.backgroundColor = "red";
    deletebtn.addEventListener("click", function() {
        liNumber.remove();
        liName.remove();
        liPosition.remove();
        deletebtn.remove();
    });
    liPosition.append(deletebtn);

    todoitemNumbers.append(liNumber);
    todoitemNames.append(liName);
    todoitemPositions.append(liPosition);

    todonumber.value = "";
    todoFullname.value = "";
    todoposition.value = "";
    console.log("Added");
});




