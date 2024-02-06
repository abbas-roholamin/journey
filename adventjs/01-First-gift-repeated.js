const giftIds = [2, 1, 3, 5, 3, 2,3,2]
const giftIds2 = [1, 2, 3, 4]
const giftIds3 = [5, 1, 5, 1]

// 1. we have a list
// 2. create a set for storing repeated.
// 3. iterate for each item, if repeated add to map.
// 4. find the smallest index in value keys.
function findFirstRepeated(gifts) {
    let smallestIndex = null;

    for (let i = 0; i < gifts.length; i++) {
        for (let j = i + 1; j < gifts.length; j++) {
            if (gifts[i] === gifts[j]) {
                smallestIndex = smallestIndex ? Math.min(smallestIndex, j) : j
            }
        }   
    }

    return gifts[smallestIndex] || -1;
}

console.log(findFirstRepeated(giftIds));