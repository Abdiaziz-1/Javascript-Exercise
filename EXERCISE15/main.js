const people = [
    { name: "Alice", age: 25, city: "wonderland" },
    { name: "Bob", age: 30, city: "Builderland" },
    { name: "Charlie", age: 35, city: "Chocolate factory" }
];

console.log("properties and values of each person");

for (const person of people) {
    for (const key in person) {
        console.log(key + ":", person[key]);
    }
    console.log("-----");
}