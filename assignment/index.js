let nameInput = document.querySelector('#inp');
const addBtn = document.querySelector('.add');
const runBtn = document.querySelector('.run');
const backBtn = document.querySelector('.backBtn');
const errorText = document.querySelector('.text');
const card = document.querySelector('.card');

runBtn.addEventListener('click', () => {
    card.classList.toggle('is-flippled');
});
backBtn.addEventListener('click', () => {
    card.classList.toggle('is-flippled');
})

const store = [];
let nameValue = nameInput.valueAsNumber;

/* function addInt(){
    nameInput.addEventListener('keyup', (event) => {
        if (event.key === isNaN){
            errorText.innerHTML = 'please put a number';
        }else{
            errorText.innerHTML = '';
            nameValue = event.key;
            store.push(nameValue);
        }
    });
    let nameValue = nameInput.value; 
    store.push(nameValue);
    console.log(store)
}
addInt(); */

addBtn.addEventListener('click', () => {
    store.push(Number(nameInput.value));
    nameInput.value = '';
    console.log(store);
});
let sum = 0;
let result = 0;
runBtn.addEventListener('click', () => {
    for(let i = 0; i < store.length; i++){
        sum += store[i];
        result = Math.round(sum/store.length)
        console.log(result);
    }
    document.querySelector('.result'). innerHTML = `Your number/length is => <span>${result}<span>`
    
})