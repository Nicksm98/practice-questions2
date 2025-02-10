/** Insertion Sort **
 * 
 * Sort the 'nums' array using insertion sort.
 *  
 * @example
 * insertionSort([3, 2, 1]) -> [1, 2, 3]
 * insertionSort([0, 12, 8]) -> [0, 8, 12]
 * insertionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

 const insertionSort = (nums) => {
    for(let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let j = i - 1;
        while(j >= 0 && nums[j] > current) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = current;
    }
    return nums;
}

module.exports = insertionSort;