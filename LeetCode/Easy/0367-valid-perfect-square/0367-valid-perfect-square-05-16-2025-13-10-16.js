/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 0) { return false;}
    
    let left = 0;
    let right = num;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const sqrt = mid * mid;
        
        console.log(mid)
        if (sqrt === num) {
            return true;
        } else if (sqrt < num) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }

    return false
};