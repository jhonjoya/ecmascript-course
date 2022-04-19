const button = document.getElementById("btn");


button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});


const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise allSettled

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))

/* */
console.log(window);
console.log(globalThis);

const foo = null ?? 'default string';
console.log(foo);

const foo2 = 'asde' ?? 'default string';
console.log(foo2);

const user1 = {};
console.log(user1?.profile?.email);

const user = {};
if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}