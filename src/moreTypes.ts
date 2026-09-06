let response : any ="42"

let numericLength :number = (response as string).length   //FORCEFUL TYPE ASSERTION


type book ={
    name : string
}

let bookString = '{"name": "One thing" }';
let bookObject = JSON.parse(bookString) as book

console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement

let value:any
value = "chai"
value = [1,2,3]
value = 2.5
value.toUpperCase()

let newVal: unknown
newVal = "chai"
newVal = [1,2,3]
newVal = 2.5
if(typeof newVal === "string"){
    newVal.toUpperCase()
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("error",error);
}