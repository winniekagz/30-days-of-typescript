/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Base case: a single-element array is already sorted
    if (nums.length <= 1) {
        return nums;
    }

    // Divide the array into two halves
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid); // Left half
    const right = nums.slice(mid);  // Right half

    // Recursively sort both halves
    const sortedLeft = sortArray(left);
    const sortedRight = sortArray(right);

    // Merge the two sorted halves
    return merge(sortedLeft, sortedRight);
};

/**
 * Helper function to merge two sorted arrays
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]}
 */
function merge(left, right) {
    const merged = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left or right arrays
    while (i < left.length) {
        merged.push(left[i]);
        i++;
    }
    while (j < right.length) {
        merged.push(right[j]);
        j++;
    }

    return merged;
}
