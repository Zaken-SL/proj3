var output = " ";
var passUpper = false;
var passLower = false;
var passNumbers = false;

function length() {
 
passLength = 10;
var confirm = document.getElementById("length").value.toString();
if(confirm != "" && confirm >= 10){
   passLength = confirm;

}
else{
    alert("Password must be atleast 10 charaters long");
    
}

}
function upper(){
    var upper = document.getElementById("upper");
  
    var text = document.getElementById("text");
  
   
    if (upper.checked == true){
      passUpper = true;
    } else {
        passUpper = false;
    }
}
function lower(){
    var lower = document.getElementById("lower");
  
    var text = document.getElementById("text");

    if (lower.checked == true){
      passLower = true;
    } else {
        passLower = false;
    }
}
function numbers(){
    var numbers = document.getElementById("numbers");
 
    var text = document.getElementById("text");

    if (numbers.checked == true){
      passNumbers = true;
    } else {
        passNumbers = false;
    }
}
function generate(){

   
    output = "";
    length();
    var characters = '';
    if(passUpper == true && passLower == true  && passNumbers == true ){
     characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }
    else if(passUpper == true && passLower == true  && passNumbers == false ){
        characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    }
    else if(passUpper == true && passLower == false  && passNumbers == true ){
        characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    }
    else if(passUpper == false && passLower == true  && passNumbers == true ){
        characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';

    }
    else if(passUpper == true && passLower == false  && passNumbers == false ){
        characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    }
    else if(passUpper == false && passLower == true  && passNumbers == false ){
        characters       = 'abcdefghijklmnopqrstuvwxyz';

    }
    else if(passUpper == false && passLower == false  && passNumbers == true ){
        characters       = '0123456789';

    }
    else if(passUpper == false && passLower == false  && passNumbers == false ){
        characters       = 'defautpasswordcharacters';

    }
    var charactersLength = characters.length;
    for ( var i = 0; i < passLength; i++ ) {
       output += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
       document.getElementById("password").innerHTML = output;
;


}