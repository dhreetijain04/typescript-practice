function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(45);
wrapInArray({ flavour: "ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}


pair("masala", 20)
pair(40,20)
pair("hello","bye")
pair("masala", {flav:"ginger"})

