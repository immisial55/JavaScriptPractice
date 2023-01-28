/////////////////////Data Types in JavaScript///////////////

//////////////////integer type data/////////////////////////

const integer = 800;
const multiply = integer*2;
console.log(multiply);

/////////////////character or string type data/////////////////

const first_name= "Imtiaz";
const last_name= "Rasool";
const sentence= "Hello " +first_name+ " " +last_name+ "! here";
console.log(sentence);

/////////////////Booleans(binary(Yes or No)) Data Type/////////
const imtiaz= true;
if(imtiaz)
{
    console.log("I am Imtiaz");
}
else{
    console.log("I am not One");
}

//////////////////////// other Examples ///////////////////////
const abc= 4;
if(abc==3){
console.log("Value is 4");
}
else{console.log("Value is not 4");}

/////////////////////// wnat to increase the value of a variable then we can use different increment operator methods////////////////

let increment_operator= 0 ;
increment_operator = increment_operator + 1 ;
increment_operator += 1 ;

/////////// POST fix method ////////////////

increment_operator++ ;

//////////////// PRE fix method ////////////

++increment_operator ;
console.log(increment_operator);

////////////////////// LOOPS(if you want to repeat the statement)/////


/////////////////// while Loop ////////////
let x = 3;
console.log("initial value of x is ", x);
while(x<10)
{
    x = x + 1;
} 
console.log("Updated Value of x after while Loop is ", x);

////////////////////// FOR LOOP ////////////////////////

let y = 0;
console.log("initial value of x is ", x)
for( ;y<10;y++)
{
}
console.log("Updated value of x after for loop is ",y);

////////////////////////// FUNCTIONS DO YOUR TASK EASY /////////////////////

//////// passing values through parameters (number is parameters)///////////////

function addtwo(number) {
    return number+2;
}
const newNumber = addtwo(8);
console.log(newNumber);

///////// other methods to use and call functios /////////////////
////////     1    ////////

///////////// Functions without parameters /////////////////
////////// Function Defination //////////////

function noParameter() {
    console.log("Function Without Parameters");
    }
    //////// Function call ///////
    noParameter();

////////     2    ////////

const firstFunction = function() {
    console.log("Other method of using function");
}
firstFunction();

////////     3  ( = > ) ////////
const anothermethod = () => {
    console.log("Function with arrow head");
}
anothermethod();

///////// functions using passing strings data at any place ///////////////

function usingString(firstName, lastName, town , religion){
   return "Hello ! my name is " +firstName+ " " +lastName+ ". I lived in " +town+ ". I am  " +religion+ "";
    
}
console.log(usingString("Imtiaz", "Rasool", "Layyah", "Muslim"));

/////////// Some builtin functions /////////////////

////// Lowercase the sentence ///////
const sentence1="THIS WAS A UPPERCASE SENTENCE BUT NOW LOWERCASE FUNCTION IS APPLIED";
console.log(sentence1.toLowerCase());

////////   round of number ////////

const numbers= 13.45;
const roundoff = Math.round(numbers);
console.log(roundoff);

///////// search in string  ///////
const firstString= "a quick fox jumps over the lazy dog";
const secondString="a cute lamb ia playing with ball";
const searchword="cute";
console.log(firstString.includes(searchword));
console.log(secondString.includes(searchword));

///////////// time in milliseconds since jan 1 1970 /////////////
console.log(Date.now());

/////////// we can also put multiple data of a single person /////////

const myself={
    name: "Imtiaz Rasool",
    age: "27",
    food: "Pizza",
    single: false,
}
console.log(myself);
////// you can also use single attribute ////////
console.log(myself.name);

/////////// conditional statement by passing parameters ///////////////
const person1= {
    name: "Imtiaz",
    age: "25-50",
};
const person2= {
    name: "Rasool",
    age: "51-60",
};
function music ( person ) {
    if(person.age == "20-50 ")
    {
        console.log("You can listen Jazz");
    }
    else if(person.age == "51-60"){
        console.log("you can listen fast music");
    }
    else{
        console.log("you are under age");

    }
}
    console.log(person1);
    console.log(person2);

///////// object with nested object can also be accessed ////////////////
const man1 = {
    name: {
    firstname: "Imtiaz",
    lastname: "Rasool",
    },
    city: {
        firstcity:"Lahore",
        secondcity:"Multan",
    },
};
console.log(man1.name.lastname);


//////// ARRAYS //////
///////access data by array index////////
const array= [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]
///////// complete array //////////
console.log(array);
//////////// 6th day  //////////////
console.log(array[5]);

////////// count array length /////////
const arraylength=[1,2,3,4,5,6,7,8,9];
console.log(arraylength.length);
console.log(arraylength.join(" | "));

/////////// you can push data at the end of array ////////////
const pushdata = [
    {teacher: "imtiaz", course: "java"},
    {teacher: "ali", course: "CSS"},
    {teacher: "hamza", course: "PHP"},
];
pushdata.push({teacher: "Akbar", course: "React"});
console.log(pushdata);

///////// print complete array data //////////
const completedata=[
    "ahmed", "Ali", "Akbar",
];
for(let i=0; i<=completedata.length; i++){
    console.log(completedata[i]);
}
///////// do same task using function //////////////
completedata.forEach(function(names){
    console.log(names);
});

