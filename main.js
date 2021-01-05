var firstName= prompt("enter your first name");
var lastName= prompt("enter your last name");
var age= prompt("enter your age");
var ask= prompt("Do you know JavaScript?","yes");
if (ask== "yes") {
   
    alert("Wow, " + firstName +" "+ lastName + "! you became a javascript developer at the age of " + age);

}

if ( ask== "no" ) {

    alert("it's okay " + firstName + " " + lastName + " ,you are just " + age + " years old. You've got plenty of time to learn java script :)" );
    
}

alert("this is a yes / no question !");