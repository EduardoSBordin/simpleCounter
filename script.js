let counterText = document.querySelector('#counterText');
const btnMore = document.querySelector('#btnMore');
const btnLess = document.querySelector('#btnLess');
const btnDelete = document.querySelector('#btnDelete');

let counter = 0;
counterText.innerHTML = counter;

btnMore.addEventListener('click', () => {

    counter++;
    counterText.innerHTML = counter;

    checkBtn();
    // checkTxt()

});

btnLess.addEventListener('click', () => {

    counter--;
    counterText.innerHTML = counter;

    checkBtn();
    // checkTxt()
});

btnDelete.addEventListener('click', () => {

    counter = 0;
    counterText.innerHTML = counter;

    checkBtn();
    // checkTxt()
});

function checkBtn(){

    if(counter <= 0){

        btnLess.disabled = true;
    }else{
        btnLess.disabled = false;
    }

    if(counter === 100){
        counter = 0;
    }
}