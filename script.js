//Generate pin handler
const generateButton = document.getElementById('generateBtn').addEventListener('click', function() {
    let generateRandomPin = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generatePin').value = generateRandomPin;
    document.getElementById('matchingPin').value = "";
    document.getElementById('matchingBtn').disabled = false;
    document.getElementById('matchingBtn').classList.remove('removeBtn');
    document.getElementById('matchingSuccess').style.display = "none";
    document.getElementById('matchingFailed').style.display = "none";
    let tryLeft = document.getElementById('tryLeft').value = 3;
});

//Matching Pin handler
const number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    element.addEventListener('click', function() {
        let output = document.getElementById('matchingPin').value;
        output = output + this.id;
        document.getElementById('matchingPin').value = output;
    });
}

//Generate & matching Pin condition
document.getElementById('matchingBtn').addEventListener('click', function() {
    const generateOutput = document.getElementById('generatePin').value;
    const matchOutput = document.getElementById('matchingPin').value;
    if (generateOutput == matchOutput) {
        document.getElementById('generatePin').value = "";
        document.getElementById('matchingPin').value = "";
        document.getElementById('matchingBtn').disabled = true;
        document.getElementById('matchingSuccess').style.display = "block";
        document.getElementById('matchingFailed').style.display = "none";
    } else if (generateOutput != matchOutput) {
        const tryLeft = document.getElementById('tryLeft').value--;
        document.getElementById('matchingFailed').style.display = "block";
        document.getElementById('matchingPin').value = "";
        //nested if-else condition to check how many times try to matching generation Pin
        if (tryLeft <= 1) {
            document.getElementById('matchingBtn').classList.add('removeBtn');
            document.getElementById('matchingFailed').style.display = "none";
        } else {
            document.getElementById('try-left').innerText = tryLeft;
        }
    } else {
        document.getElementById('matchingFailed').style.display = "block";
    }
})

// clear & backspace operator handler
let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    const operatorValue = operator[i];
    operatorValue.addEventListener('click', function() {
        if (this.id == 'clear') {
            document.getElementById('matchingPin').value = "";
            return 0;
        }
        if (this.id == 'backspace') {
            let matchingOutput = document.getElementById('matchingPin').value;
            matchingOutput = matchingOutput.substr(0, matchingOutput.length - 1);
            document.getElementById('matchingPin').value = matchingOutput;
            return 0;
        }
    });
}