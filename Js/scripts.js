
import { encodeMessage , decodeMessage } from './encriptions/encoder.js';


// Placeholder for your program logic
function Encript(input) {
    // For example, let's just return the input in uppercase
    return encodeMessage(input);
}

function Decript(input) {
    return decodeMessage(input);
}


// event listener to encript-btn
document.getElementById('encript-btn').addEventListener('click', function() {
    // Get input
    const userInput = document.getElementById('userInput').value;
    
    if (userInput.trim() === "") {
        document.getElementById('output1').innerText = "Please enter something!";
        document.getElementById('output1').classList.remove("alert-info");
        document.getElementById('output1').classList.add("alert-warning");
        document.getElementById('output1').style.display = "block";
        return;
    }
    
    // Run program 
    const encripted = Encript(userInput);

    
    //display output
    const outputDiv = document.getElementById('output1');
    outputDiv.innerText = "Encripted: " + encripted;
    outputDiv.classList.remove("alert-warning");
    outputDiv.classList.add("alert-info");
    outputDiv.style.display = "block";

     
    // clear previous output
    document.getElementById('output2').style.display = "none";
});

//  event listener to decrypt-btn
document.getElementById('decript-btn').addEventListener('click', function() {
    // Get the user input
    const userInput = document.getElementById('userInput').value;
    
    if (userInput.trim() === "") {
        document.getElementById('output2').innerText = "Please enter something!";
        document.getElementById('output2').classList.remove("alert-info");
        document.getElementById('output2').classList.add("alert-warning");
        document.getElementById('output2').style.display = "block";
        return;
    }
    
    // Run program
    const decripted = Decript(userInput);

    
    // Display the output
    const outputDiv = document.getElementById('output2');
    outputDiv.innerText = "Decrypted: " + decripted;
    outputDiv.classList.remove("alert-warning");
    outputDiv.classList.add("alert-info");
    outputDiv.style.display = "block";
    
    // clear previous output
    document.getElementById('output1').style.display = "none";
});


// event listner to clear button
document.getElementById('clear-btn').addEventListener('click', function() {


    document.getElementById('output1').style.display = "none";
    document.getElementById('output2').style.display = "none";
    document.getElementById('userInput').value = "";

});