/** Search in Rotated Sorted Array **
 * 
 * Given a rotated sorted array and a target, 
 * return the index of the number in the array 
 * which equals to the target.
 * 
 * Note: Your solutions' time complexity must be faster than O(n). 
 * 
 * @example
 * search([5, 4, 1, 2, 3], 2) -> 3
 * search([7, 9, 12, 3, 4], 7) -> 0
 * search([3, 4, 2, 0], 4) -> 1
 * 
 */

const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            return mid;
        }
        
        if(nums[left] <= nums[mid]) {
            if(target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

module.exports = search;