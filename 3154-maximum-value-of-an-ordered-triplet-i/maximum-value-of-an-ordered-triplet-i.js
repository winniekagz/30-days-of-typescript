var maximumTripletValue = function(nums) {
    let maxValue = 0;
    maxPrefix=nums[0]
   
       
    for (let j = 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
               
                let trippleValue = (maxPrefix - nums[j]) * nums[k];
                maxValue = Math.max(maxValue, trippleValue);
            }
            maxPrefix = Math.max(maxPrefix, nums[j]);
       
    }
    
    return maxValue;
};


console.log(maximumTripletValue([3, 5, 2, 8, 7])); // Example test case
