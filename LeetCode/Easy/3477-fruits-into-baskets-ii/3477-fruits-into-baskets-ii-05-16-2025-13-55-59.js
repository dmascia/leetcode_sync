/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let filledBaskets = 0;
    let basketsLength = baskets.length;

    for (fruit of fruits) {
       for (let i = 0; i < baskets.length; i++) {
            if (fruit <= baskets[i]) {
                filledBaskets++;
                baskets[i] = -1
                break
            }
       }
    }
    return basketsLength - filledBaskets;
};