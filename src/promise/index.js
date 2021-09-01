let somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey que pasa crack");
        } else {
            reject("Lo siento hermano algo salio mal");
        }
    });
}

somethingWillHappen()
    .then(resolve => console.log(resolve))
    .catch(err => console.error(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("Hey todo cool");
            }, 2000);
        } else {
            const err = new Error("Wooops!");
            reject(err);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('array de results', response);
    })
    .catch(err => {
        console.error(err);
    })