function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`;
  }
  return `Chai order : ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Seving default masala chai`;
}

function orderChai(size: "medium" | "small" | "large" | number) {
  if (size === "small") {
    return `small cuttig chai...`;
  }
  if (size === "medium" || "large") {
    return `make extra small`;
  }
  return `chai order #${size}`
}

type chaiOrder = {
  type :string,
  sugar:number
}

function ischaiOrder(obj: any) : obj is chaiOrder{
  return (
    typeof obj === "object" && obj !== null && typeof obj.type === 'string'
    && typeof obj.sugar === 'number'
  )
}

function serveOrder(item: chaiOrder | string){
  if(ischaiOrder(item)){
    return `serving ${item.type} chai ${item.sugar}`
  }
  return `serving custom chai ${item}`
}