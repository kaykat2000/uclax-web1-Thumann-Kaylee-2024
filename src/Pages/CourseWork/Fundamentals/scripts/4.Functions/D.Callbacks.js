/*===================================
||
|| Functions: Call Backs (First Class Functions)
||
===================================*/
/*---------------------------
| Functions: Call Backs
---------------------------*/

console.group("Functions: Call Backs");

const myConsumerFun = (fn) => {
    console.log("My consumer function");
    fn();
};

const myFunToPass = () => {
    console.log("Passing this function in");
};

myConsumerFun(myFunToPass);

//Pass Anonymous Functions
myConsumerFun(() => {
    console.log("My callback anonymous");
});

console.groupEnd();
