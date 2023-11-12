/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    const startTime = new Date();

    return new Promise((resolve) => {
        setTimeout(() => {
            const endTime = new Date();
            const timeTaken = (endTime - startTime)/1000;
            resolve(timeTaken);
        }, n * 1000); // Convert seconds to milliseconds for setTimeout
    });
}

wait(4)
    .then((timeTaken) => console.log(`Promise resolved in ${timeTaken} milliseconds`))
    .catch((e) => console.log(e));
