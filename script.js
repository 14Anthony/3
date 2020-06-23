// Assignment Code
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    // third time is the charm , Per j.j. and mike,back to this ,  
    //make the option into an array otherwise, you will create a string and then you will have to use ; 
    //I don't know if it needs to be accessed globally or locally, locally seems to be more explicity , 
    //jj says explicit is better than implicit. 
    //if this doesn't work remember jj gave you this in office hours to change strings back to arrays use this rather than the splict use concat to capture the confirms
    //let choicesArray = []
    //if 
    //(confirmLower) {
    // let lowerArray = combo11.split('');
    // choicesArray.push(lowerArray);
    const charSym = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
    const charLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const charUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    //create the empty buckets for the information where we combine all the choices. Define them. 
    let pwdchoices = [];
    //create somewhere for the user input of length of numbers.  Define them.
    let pwdinput = [];

    let numLength = "";

    //  Prompt for input to gather the information of how many characters is needed for the pwd
    // let numLength = prompt("How long do you want your password to be?   Please choose a NUMBER between 8 - 128")
    // help from Zach shone, this forces a parameter choice within 8-128.

    do {
        numLength = prompt("How long do you want your password to be?   Please choose a NUMBER between 8 - 128")
    }
    while (numLength < 8 || numLength > 128);


    // Using confirm, here in place of prompts. yes or no,"ALL WE HAVE TO DO IS IDENTIFY WINS" RockPaperScissor game... 
    //what characters should be used when creating a pwd if yes, push the concatenation of that array with the other choices, like rps, 
    //only identify the wins.
    const pwdSym = confirm("Please select OK if you would like me to include SYMBOLS in your password?");
    const pwdlower = confirm("Please select OK if you would like me to include LOWER case letters in your password?");
    const pwdUpper = confirm("Please select OK if you would like me to include UPPER case Letters in your password?");
    const pwdNum = confirm("Please select OK if you would like me to include NUMBERS in your password?");

    // per jj preclass, I need to take the confirms, and bring them together with a join && concatenation,
    ///find out how to set the condition of the array.//  MDN.  Socer football..  or Rock paper scissors the T.A. from the Czech republic of forming all wins.Saturday of last week.

    //if yes/wins symbols,  concate to choices (think of filling a hat, to pick numbers at random. this one fills the hat with symbols)
    if (pwdSym) {
        pwdchoices = pwdchoices.concat(charSym);
    }
    //if yes/wins lower, concatenate to choices filling the hat
    if (pwdlower) {
        pwdchoices = pwdchoices.concat(charLower);
    }
    // if yes/wins, upper, concat to choices filling the hat
    if (pwdUpper) {
        pwdchoices = pwdchoices.concat(charUpper);
    }
    //if yes/wins, Numbers, concatenate to choices filling the hat
    if (pwdNum) {
        pwdchoices = pwdchoices.concat(charNum);
    }
    // shorter version of what if elsing every option, per jj too much code.  
    //Remember the example in the section on arrays where I said that iterating over 
    //the contents of an array is usually done with a loop? Here's an example of a for loop that does just 
    //that-it initializes all the values of a String array to null strings:
    // String strArray[] = new String[10]; "the array"   
    // int i; // loop index    // for (i = 0; i < strArray.length; i++)
    //     strArray[i] = "";
    for (let i = 0; i < numLength; i++) {
        // DESCRIPTION
        // The push() method adds one or more elements to the end of an array and returns the new length of the array.

        // EXAMPLE
        // var sports = ['soccer', 'baseball'];
        // var total = sports.push('football', 'swimming');

        // console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
        // console.log(total); // 4
        // Data from: developer.mozilla.org
        // take all the choices given and pushe them together to create a pool from which to choose at random:  Video with the sliding function operation.
        pwdinput.push(pwdchoices[Math.floor(Math.random() * pwdchoices.length)]); // pulling from the full hat.

    }

    //DESCRIPTION
    // The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

    // EXAMPLE
    // var a = ['Wind', 'Water', 'Fire'];
    // a.join(); // 'Wind,Water,Fire'
    // a.join(', '); // 'Wind, Water, Fire'
    // a.join(' + '); // 'Wind + Water + Fire'
    // a.join(''); // 'WindWaterFire'
    //must request return per Mike within the function
    return pwdinput.join("");
}

// Given Code for pasting to passwordText? Put it at the end of the code.  When I had it in the function it killed it.
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;
    //alert password
    alert(" Here is your Password" + " : " + password)
}