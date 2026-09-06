const chai = {
    name : "masala chai",
    price: 20,
    hot :true
}

let tea : {
    name : string,
    price: number,
    hot : boolean
}
tea = {
    name : "ginger tea",
    price : 25,
    hot : true
}

type Tea = {
    name : string,
    price : number,
    ingredients : string[]
}

const adrakChai : Tea = {
    name : "adrak chai",
    price :25,
    ingredients: ["ginger", "tea leaves"]
}

type Cup ={size: string};
let smallcup : Cup = {size: "small"};

let bigcup = {size: "500ml", material :"steel"} 

smallcup = bigcup

type Brew = {brewTime :number}
const coffee = {brewTime : 5, beans : "arabica"}
const chaiBrew : Brew= coffee