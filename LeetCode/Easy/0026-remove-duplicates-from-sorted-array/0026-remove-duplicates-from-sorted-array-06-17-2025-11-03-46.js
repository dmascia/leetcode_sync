/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let countIndex = 0;

    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        if (nums[countIndex] != nums[currentIndex]) {
            countIndex++;
            nums[countIndex] = nums[currentIndex];
        }

    }

    return countIndex + 1;
};