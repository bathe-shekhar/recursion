
function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.round(arr.length / 2);

    const left = mergeSort(arr.splice(0, middle));

    const right = mergeSort(arr);


    const sorted = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        }
        else {
            sorted.push(right[j]);
            j++;
        }
    }


    for (i; i < left.length; i++)   //if all left array elements are pushed on sorted array
        sorted.push(left[i]);      //push remaining elements of right array;


    for (j; j < right.length; j++)  //if all right array elements are pushed on sorted array
        sorted.push(right[j]);      //push remaining elements of left array;

    return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110, 55, 68, 93, 115, 45]));

