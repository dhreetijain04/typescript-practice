const chaiFlavours : string[]= ["masala", "adrak"]
const chaiPrice : number[]= [10,20]

const rating : Array<number> = [2.5, 5.0]

type chai={
    name:string,
    price: number
}
const menu : chai[] = [
    {name :"Masala" , price :15},
     {name :"Adrak" , price :25}
]

const cities : readonly string[] = ["delhi", "jaipur"]
//cities.push("pune")

const table: number[][]= [
    [1,2,3],
    [4,5,6]
]

//tuples

let chaiTuple : [string, number];
chaiTuple= ["masala", 20]

const location : readonly [number,number]= [28.77, 89.55]

const chaiItems : [name: string, price: number]=["masala", 25]

//enums

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupSize.LARGE

enum Status{
    PENDING=100,
    SERVED, //automatically assigned 101
    CANCELLED //102
}
enum chaiType {
    MASALA= "masala",
    GINGER = "ginger"
}
function makeChai(type: chaiType){
    console.log(`making ${type}`);
}

makeChai(chaiType.MASALA)