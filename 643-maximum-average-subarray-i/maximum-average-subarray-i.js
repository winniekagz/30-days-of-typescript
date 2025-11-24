/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum=0
    let startWindow=0
    let maxsum=sum
// sum of first k
    for (let i=0;i<k;i++){
        sum+=nums[i]
       
    }
    maxsum=sum
// slide
for (let i=k;i<nums.length;i++){
    sum-=nums[i-k]
    sum+=nums[i]
    maxsum=Math.max(sum,maxsum)
}
return maxsum/k

};