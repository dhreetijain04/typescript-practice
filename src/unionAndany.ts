let subs: number | string = '1M'

let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending'


const orders = ['12', '20', '28' , '15']

let currentOrder: string | undefined; 

for(let order of orders){
    if(order ==='28'){
        currentOrder=order
        break
    }
    currentOrder = '1';
}
console.log(currentOrder);