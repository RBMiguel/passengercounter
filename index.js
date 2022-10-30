let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
console.log(saveEl)

function increment(){
  
   count += 1
   countEl.innerText = count

}
function reset() {

    count = 0 
    countEl.textContent = count
}

function save (){ 
    
    let save = count + "  - "
    saveEl.textContent += save
    count = 0
    countEl.textContent = count 
    console.log(count)
   
}





