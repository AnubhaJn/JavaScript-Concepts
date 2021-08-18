//******************** normal function ************/
//function statement  ------>>>>>>>>>>>
//define

function sayHello(param) {
  console.log("hello", param);
}

//function invocation call --->>>>>>

sayHello();
sayHello(10);
sayHello("anubha");
sayHello([1, 2, 3, 4, 5, 6]);
sayHello({ name: "anubha" });

//******** function are treated as variables ****/
//fun expression

let fun = function fn() {
  console.log("hiiii");
};

let fun = function () {
  //anonymus function
  console.log("hiiii");
};

fun();

//********** IIFE : Immediately invoked function expression  */
//use case- require,pollution,closure

(function fn() {
  console.log("i will run on my own");
})();

//******************* Arrow Function *****************/
//use case - Syntax, react, this

let arrowFn = (num) => console.log(num * num);
arrowFn(5);

let arrowFun = (num) => {
  console.log("i am arrow");
  return num * num * num;
};
console.log(arrowFun(3));

let NotArrorFn = function (num) {
  console.log("i am normal");
  return num * num * num;
};

console.log(NotArrorFn(3));

//***************** function can be passed as parameter  **************/
//use case -> callbacks, higher order functions

function paraFun(param) {
  param();
  console.log("hi i will run second");
  return "i will run last";
}

function smaller() {
  console.log("i will run first");
}

let rval = paraFun(smaller);
console.log(rval);

//********************** function can be return a function ********/
//use case - closure

function outerFun() {
  console.log("outer will run first");
  return function innerFun() {
    console.log("inner will run second");
  };
}

let innerFun = outerFun();
innerFun();
