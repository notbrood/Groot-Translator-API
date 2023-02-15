const express = require('express');
const app = express();

app.get('/str', (req, res) => {
    const inputString = req.query.inputString;
    res.send(processString(inputString));
});
app.get('/', (req, res) => {
    const str = "Use 'https://groot-translate.onrender.com/str?inputString={str}' where str is your input without curly braces.";
    res.send(str);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));

function processString(inputString) {
    var arr = inputString == "" ? [] : inputString.split(' ');
    var groot = "I am groot";
    var moreGroot = "";
    var outputString = "";
    var invertedCommas = false;
    var character = '.';
    const n = arr.length;
    if (inputString.length == 0) {
        return "I am groot?"
    }
    if (inputString[0] == '"' && inputString[inputString.length - 1] == '"') {
        invertedCommas = true;
    }
    if(invertedCommas){
        if(inputString[inputString.length - 2] == '!' || inputString[inputString.length - 2] == '?'){
            character = inputString[inputString.length - 2];
        }
    }
    else if (inputString[inputString.length - 1] == '!' || inputString[inputString.length - 1] == '?') {
        character = inputString[inputString.length - 1];
    }
    if (n == 0) {
        outputString = "I am groot?";
    }
    else if (n <= 3) {
        outputString = groot;
    }
    else {
        for (var i = 0; i < (arr.length / 3); i++) {
            outputString += "I am groot";
            if(i+1 > (arr.length)/3){
                break;
            }
            outputString += " ";
        }
    }
    outputString += character;
    if (invertedCommas) {
        outputString = '"' + outputString;
        outputString += '"';
    }
    return outputString;
}