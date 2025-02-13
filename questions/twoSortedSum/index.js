/** Two Sorted Sum **
 * 
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array. 
 * 
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 * 
 */

const twoSortedSum = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right) {
        let sum = nums[left] + nums[right];
        if(sum === target) {
            return [left, right];
        } else if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

module.exports = twoSortedSum;
