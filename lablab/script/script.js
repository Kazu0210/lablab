let button = document.getElementById('button');
let textElement = document.getElementById('text');
let greetCont = document.getElementById('greet-cont');
let greeting = "Ms. Nicole M. Ravelo (Soon to be Mrs. Nicole R. Demafelis). This is a gift from your Honey Bunch Sugar Plum. By clicking the button below, you may proceed to the next stage. Are you ready?";
let index = 0;

document.title = 'To My Lablab❤️';

function typeWriter() {
    if (index < greeting.length) {
        textElement.innerHTML += greeting.charAt(index);
        index++;
        setTimeout(typeWriter, 30);
    }
}

button.addEventListener('click', function() {
    button.style.display = 'none';

    greetCont.style.display = 'flex';
    typeWriter();

    let readyButton = document.createElement('button');
    readyButton.textContent = "Ready?";
    readyButton.id = "readyBttn";

    document.getElementById('button-cont').appendChild(readyButton);

    readyButton.onclick = function(){
        document.location.href = "contract.html";
    }
});

// contract
