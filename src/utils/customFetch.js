let ok = true;

const fetchCustom = (time, task) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (ok) {
                res(task);
            } else {
                rej("Error in the FetchCustom :(");
            }
        }, time);
    });
}

export default fetchCustom;