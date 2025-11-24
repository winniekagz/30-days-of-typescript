var characterReplacement = function(s, k) {
    let maximumRepeating = 0;
    let windowStart = 0;
    let hash = {};
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 0;
        }
        hash[s[i]]++;

        maximumRepeating = Math.max(maximumRepeating, hash[s[i]]);

        let templength = i - windowStart + 1;

        if (templength - maximumRepeating > k) {
            hash[s[windowStart]]--;
            windowStart++;
        }

        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
};
