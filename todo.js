let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener ("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;



let delBtn = document.createElement("button");
delBtn.innerText = "delete";
delBtn.classList.add("delete");

item.appendChild(delBtn);
ul.appendChild(item);
inp.value = "";         // it is for the input placeholder that takes values for placeholder
});

ul.addEventListener("click",function(event) {
  if(event.target.nodeName == "BUTTON") {
    let ListItem = event.target.parentElement;
    ListItem.remove();

    console.log("deleted");
  }
})

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
 // delBtn.addEventListener("click", function(){
//    let par = this.parentElement;  // this denotes delBtn
 //   console.log(par);
 //   par.remove();
 // });


//}