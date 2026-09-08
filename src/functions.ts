function makechai(type : string , cups: number){
    console.log(`making ${cups} cups of ${type}`)
}
makechai("masala", 2);

function getchaiPrice(): number{
    return 25
}
function makeOrder(order : string){
    if(!order) return null;
    return order
}

function logChai(): void{
    console.log("chai is ready")
}
// ?: means optional
function orderChai(type?: string){

}

function createChai(order : {
    type: string,
    sugar : number,
    size: "small" | "large"
}): number{
    return 4
}