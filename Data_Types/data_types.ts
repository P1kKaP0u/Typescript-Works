
let number:number = 15;
number = 10;
number = 10.4;

let city:string = "New York";
city = "Ankara";
city = "Muğla";

let isTrue:boolean = false;
isTrue = true;
isTrue = false;

let numbers:number[] = [1, 2, 3, 4,]
let numbers2: Array<number> = [1, 2,] //Generic array

let array:[number,string] = [2,"Ankara"]

enum Color {Red=1, Green, Blue}
let color : Color = Color.Red

let value: any = "Ankara"
value = 100
value = {}

let value2: void = undefined

function helloWorld():void{
    console.log("Hello World!");
}


let age: number; //undefined

//Bir class'tan obje oluşturulmadığında yani new'lenmeden, 
//referansı oluşturulmadan ulaşmaya çalışılırsa o değer null değer alır
class Customer{

}


export{}