/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hset = new Set();
    for (const num of nums) {
        if (hset.has(num)) {
            return true;
        } else {
            hset.add(num);
        }
    }
    return false;
};