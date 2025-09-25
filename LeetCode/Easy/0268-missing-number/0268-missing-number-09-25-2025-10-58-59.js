/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numSet = new Set(nums);

    for (let num = 0; num < nums.length + 1; num++) {
        if (!numSet.has(num)) {
            return num;
        }
    }
};