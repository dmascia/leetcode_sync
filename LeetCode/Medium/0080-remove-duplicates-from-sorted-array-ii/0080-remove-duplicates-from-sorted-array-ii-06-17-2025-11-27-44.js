/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let seen = 0;
    let current = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            seen = 0;
            nums[current] = nums[i];
            current++;
        } else {
            seen++;
            if (seen <= 1) {
                nums[current] = nums[i];
                current++;
            }
        }

    }

    return current;
};