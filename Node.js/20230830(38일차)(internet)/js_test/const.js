const hello = "first hello";

if (true) {
    const hello = "second hello";
    console.log(hello); // second hello
}

console.log(hello); // first hello