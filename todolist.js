const item = document.getElementById("item")
const addbtn = document.getElementById("addbtn")
const mylist = document.getElementById("mylist")



addbtn.onclick = function addlist(){
    if(item.value === ""){
        alert("Input an item!!")
    }
    else{
    let li = document.createElement("li")
    li.innerHTML = item.value;
    mylist.appendChild(li)

    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    }
    item.value = "";
    savedata();
}
mylist.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)
function savedata(){
    localStorage.setItem("data", mylist.innerHTML)
}
function showlist(){
    mylist.innerHTML = localStorage.getItem("data")
}
showlist();