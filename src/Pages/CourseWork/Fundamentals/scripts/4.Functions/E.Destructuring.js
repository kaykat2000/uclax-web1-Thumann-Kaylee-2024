/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructuring");

const readPerson = ({ first, last, email, colors }) => {
    //const { first, last, email, colors } = personObj;

    console.log(`Hey ${first} ${last}. Your email is: ${email}`);
    console.log(`Your fav colors: ${colors}`);

    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Kaylee",
    last: "Thumann",
    email: "kaykat2000@gmail",
    colors: ["red", "green", "blue"],
};

const person2 = {
    first: "Chase",
    last: "Thumann",
    email: "c@gmail",
    colors: ["cyan", "magenta", "yellow"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
