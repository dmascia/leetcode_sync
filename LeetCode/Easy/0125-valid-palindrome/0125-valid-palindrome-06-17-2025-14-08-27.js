/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlnum = (c) =>  { return /^[a-zA-Z0-9]*$/.test(c); }
    s = s.split("").filter(c => isAlnum(c));
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l].toLowerCase() != s[r].toLowerCase()) {
            return false;
        }

        l++;
        r--;
    }
    return true;
};