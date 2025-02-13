/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */

const containsDuplicate = (nums) => {
    let set = new Set();
    for(let num of nums) {
        if(set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

module.exports = containsDuplicate;
