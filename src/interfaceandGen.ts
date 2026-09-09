interface Chai{
    flavour: string,
    price: number,
    milk? : boolean
}
const masala: Chai= {
    flavour: "masala",
    price: 25
};

interface Shop{
    readonly id: number,
    name : string
}

const s: Shop={id:1,name: "chai Code cafe"}

interface discountCalc{
   ( price: number): number
}
const apply50: discountCalc=(p)=> p*0.5

