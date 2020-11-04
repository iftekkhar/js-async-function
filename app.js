function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}
// Async Await Actual Syntax 
async function execute() {
    const promise = wearPPE();
    const result = await promise;
    console.log(result);

    const promise2 = fightCorona();
    const result2 = await promise2;
    console.log(result2);
}

//Asysnc Await added with out changing the code structure
// async function execute() {
//     await wearPPE().then(result => console.log(result));
//     fightCorona().then(result => console.log(result));
// }

execute();
