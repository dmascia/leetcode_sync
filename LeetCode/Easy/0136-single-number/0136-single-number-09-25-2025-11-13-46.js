/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) { return nums[0]; }

    let res = 0;
    for (let num of nums) {
        res ^= num;
    }

    return res;
};