function fibonacci(n) {

    let arr = [0, 1];
    console.log("Fibonacci without Recursive Function: ");

    for (i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    console.log(arr);
}

fibonacci(10);


function fibRecursive(n) {

    if (n === 0)
        return [0];
    else {
        if (n === 1)
            return [0, 1];
        else {

            // let fibsequence = fibRecursive(n - 1);
            // let fib = fibsequence[fibsequence.length - 1] + fibsequence[fibsequence.length - 2];
            // return fibsequence.concat(fib);


            const arr = fibRecursive(n - 1);
            return [...arr, arr[n - 1] + arr[n - 2]];
        }
    }

}

console.log("Fibonacci with Recursive Function: ");
console.log(fibRecursive(10));