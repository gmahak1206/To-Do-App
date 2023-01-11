const saveEl = document.getElementById("save-el")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

saveEl.addEventListener("click" , function(){
    renderLeads(inputEl.value)
    inputEl.value = ""
    
})

function renderLeads(text){

    
    const li = document.createElement("li");
    li.innerHTML = `
        ${text}
        <button class="delete">Delete</button>
    `;

    ulEl.appendChild(li);

    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
        alert("Wohoo!! Task Completed...🤩🤩")
    });

}
