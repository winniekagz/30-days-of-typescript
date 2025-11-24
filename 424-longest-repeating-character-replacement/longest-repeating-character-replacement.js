var characterReplacement = function(s, k) {
    let maximumRepeating = 0;
    let windowStart = 0;
    let hash = {};
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        // add unique items in hash
        if (!hash[s[i]]) {
            hash[s[i]] = 0;
        }
        hash[s[i]]++;
//  maximum  repeating character
        maximumRepeating = Math.max(maximumRepeating, hash[s[i]]);

        let templength = i - windowStart + 1;
// check length valid
        if (templength - maximumRepeating > k) {
            hash[s[windowStart]]--;
            windowStart++;
        }
// return maximum repeating character
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
};
