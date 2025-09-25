/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    numsSet = new Set(nums);
    missingNums = [];

    for ( let i = 1; i < nums.length + 1; i++ ) {
        if (!numsSet.has(i)) {
            missingNums.push(i);
        }
    }

    return missingNums;
};