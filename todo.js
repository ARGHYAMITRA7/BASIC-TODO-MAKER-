let btnAdd = document.querySelector("#addTasks");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
btnAdd.addEventListener("click",function(){
    let task = document.createElement("li");
    task.innerText=input.value;
    let delBtn = document.createElement("button");
    delBtn.innerText='Delete Task';
    delBtn.classList.add("delete");
    task.appendChild(delBtn);
    ul.appendChild(task);
    input.value="";
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let parent = this.parentElement;
//         parent.remove();

//     })
// }