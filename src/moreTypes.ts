let response : any ="42"

let numericLength :number = (response as string).length   //FORCEFUL TYPE ASSERTION


type book ={
    name : string
}

let bookString = '{"name": "One thing" }';
let bookObject = JSON.parse(bookString) as book

console.log(bookObject);