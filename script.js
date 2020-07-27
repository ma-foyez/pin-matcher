//Generate code handler
const generateButton = document.getElementById('generateBtn').addEventListener('click', function() {
    let generateRandomCode = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateCode').value = generateRandomCode;
    document.getElementById('matchingCode').value = "";
    document.getElementById('matchingBtn').disabled = false;
    document.getElementById('matchingSuccess').style.display = "none";
    document.getElementById('matchingFailed').style.display = "none";
});

//Matching code handler
const number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    element.addEventListener('click', function() {
        let output = document.getElementById('matchingCode').value;
        output = output + this.id;
        document.getElementById('matchingCode').value = output;
    });
}

//Generate & matching code condition
document.getElementById('matchingBtn').addEventListener('click', function() {
    const generateOutput = document.getElementById('generateCode').value;
    const matchOutput = document.getElementById('matchingCode').value;
    if (!generateOutput) {
        alert('empty generate');
    } else if (generateOutput == matchOutput) {
        document.getElementById('generateCode').value = "";
        document.getElementById('matchingCode').value = "";
        document.getElementById('matchingBtn').disabled = true;
        document.getElementById('matchingSuccess').style.display = "block";
        document.getElementById('matchingFailed').style.display = "none";
    } else {
        document.getElementById('matchingFailed').style.display = "block";
        document.getElementById('matchingSuccess').style.display = "none";
    }
})

// clear & backspace operator handler
let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    const operatorValue = operator[i];
    operatorValue.addEventListener('click', function() {
        if (this.id == 'clear') {
            document.getElementById('matchingCode').value = "";
            return 0;
        }
        if (this.id == 'backspace') {
            let matchingOutput = document.getElementById('matchingCode').value;
            matchingOutput = matchingOutput.substr(0, matchingOutput.length - 1);
            document.getElementById('matchingCode').value = matchingOutput;
            return 0;
        }
    });
}