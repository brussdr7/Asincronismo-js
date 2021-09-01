const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Todo bien por aca"), 3000)
        : reject(new Error("test error"));
    });
}

const doSomething = async () => {
    const sometime = await doSomethingAsync();
    console.log(sometime);
}

console.log("Before");
doSomething();
console.log("After");

const anotherFunction = async () => {
    try {
        const somthing = await doSomethingAsync();
        console.log(somthing);
    } catch (error) {
        console.error(error);
    }
}

console.log("Before 1");
anotherFunction();
console.log("After 1");