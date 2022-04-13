const secondContainer = document.querySelector('#second__container'),
      firstContainer = document.querySelector('#first_container'),
      submitButton = document.querySelector('#submit__button'),
      btns = document.querySelectorAll('.btn'),
      number = document.querySelector('#number');

btns.forEach( btn => {
    btn.addEventListener('click', (event) => {
        let value = event.target.innerText;
        
        if (value == 1) {
            number.innerText = 1;
        } else if (value == 2) {
            number.innerText = 2;
        } else if (value == 3) {
            number.innerText = 3;
        } else if (value == 4) {
            number.innerText = 4;
        } else if (value == 5) {
            number.innerText = 5;
        } 
        btn.style.cssText = 'color: black; background-color: white';
    })
    
})

submitButton.addEventListener( 'click', () => {
    firstContainer.style.display = 'none';
    secondContainer.style.display = 'flex';
})