/** Move Zeroes **
 * 
 * Given an array 'nums', move all the zeroes to the end.
 * 
 * Note: You can not make a copy of the 'nums' array.
 * 
 * @example
 * moveZeroes([1, 0, 2, 0]) -> [1, 2, 0, 0]
 * moveZeroes([10, 0, 9]) -> [10, 9, 0]
 * moveZeroes([3, 4, 0, 2, 0]) -> [3, 4, 2, 0, 0]
 * 
 */

 const moveZeroes = (nums) => {
    let left = 0;
    let right = 0;
    
    while(right < nums.length) {
        if(nums[right] !== 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        right++;
    }
    return nums;
}

module.exports = moveZeroes;