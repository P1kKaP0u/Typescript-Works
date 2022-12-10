function addition(x, y) {
    return x + y;
}


function addition2(x: number, y: number): number {
    return x + y;
}


let addition3 = function (x: number, y: number): number {
    return x + y;
}


console.log(addition(2, 3));
console.log(addition("Ankara", 2));

console.log(addition2(5, 10));

console.log(addition3(19, 123));


//Function with default value
function addition4(x: number, y: number = 4): number {
    return x + y;
}
console.log(addition4(3));
console.log(addition4(5, 10));


//Function with optional value
function addition5(x: number, y?: number): number {
    // If y is defined
    if (y) {
        return x + y;
    }
    return x;
}
console.log(addition5(90));
console.log(addition5(90, 5));

//Function with rest parameter
function Invite(first_Invited: string, ...other_Inviteds: string[]): string {
    return first_Invited + " " + other_Inviteds.join(" ");
}

console.log(Invite("Engin", "Derin", "Salih", "Ahmet"));
console.log(Invite("Kemal"));

export { }