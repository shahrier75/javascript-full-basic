const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2=Object.create(obj1);


obj2.key3="value";

console.log(obj2.key2)


console.log(obj2.__proto__)

