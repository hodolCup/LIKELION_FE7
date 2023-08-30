let hello = "first hello";
// hello = "second hello";
// 이런식으로 재정의가 가능하지만, 재정의 하려고할때
// let hello = "second hello" 로 하면 오류가 남.

if (true) {
    let hello = "second hello";
    console.log(hello); // second hello
}
console.log(hello); //first hello