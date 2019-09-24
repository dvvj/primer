export default function sum(arr) {
    return arr.reduce((total, elem) => total+elem);
}

export function sumOdd(arr) {
    return sum(arr.filter(e => e % 2 === 1));
}

export function asyncAdd(arr) {
    return new Promise(cb => setTimeout(() => {
        let total = sum(arr);
        console.log(`Async result: ${total}`);
        cb(total);
    }));
}