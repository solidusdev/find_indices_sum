let sample_array = [10, 20, 5, 25, 40, 50, 55, 70];

let find_indices_sum = (arr, target_number) => {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target_number) {
                return `Indices: ${i} and ${j}`;
            }
        }
    }
}

console.log(find_indices_sum(sample_array, 50));    // Indices: 0 and 4
console.log(find_indices_sum(sample_array, 25));    // Indices: 1 and 2
console.log(find_indices_sum(sample_array, 55));    // Indices: 2 and 5