let animalBtn = document.querySelectorAll(".big-five-list .big-five-list-item .big-five-button");
let spottedAnimal = document.querySelector("#spotted-animals-list");
let btnRemovefirst = document.querySelector('#remove-first-item-button');
let btnRemoveAll = document.querySelector('#remove-all-button');
let animalText = document.querySelectorAll('#spotted-animals-list li');
let animalParent = animalText[0].parentElement;
console.log(animalText.length);

function animalSpotted(el){
    let amount = el.textContent;
    let newText = document.createElement("li");
    newText.innerHTML = amount;
    let spottedAnimal = document.querySelector('#spotted-animals-list');
    spottedAnimal.appendChild(newText);
}
function removeFirst(){
    animalText = document.querySelectorAll('#spotted-animals-list li');
    console.log(animalText.length);
    if (typeof(animalText[0]) == "undefined") { alert("De spotted animals lijst is leeg");
    }else {
        let text = animalText[0];
        console.log(text);
        parent = text.parentElement;
        console.log(parent);
        parent.removeChild(text);
    }
}
function removeAll(){
    animalText = document.querySelectorAll('#spotted-animals-list li');
    if (typeof(animalText) == "undefined")
    console.log("De spotted animallijst is leeg!");
    else {
        console.log(animalText.length);
        if ((animalText.length) != 0){
            for (let i = 0; i< animalText.length; i++){
                let text = animalText[i];
                parent = text.parentElement;
                parent.removeChild(text);
            }
        }else alert("De spotted animallijst is leeg!");
    }
}
btnArr = Array.from(animalBtn);
btnArr.forEach(element => {
    element.addEventListener("click", function(e){animalSpotted(element);})
});
btnRemovefirst.addEventListener('click', function(e) {removeFirst() });
btnRemoveAll.addEventListener('click', function(e){ removeAll() });
