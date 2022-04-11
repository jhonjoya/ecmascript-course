const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    designer: 'Ana'
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    designer: 'Ana'
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

const string = 'Hello';
console.log(string.padStart(7,'Hi'));
console.log(string.padEnd(12,' -----'));


const helloWorld = () =>{
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(()=>resolve('Hello world'), 3000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherFunction();