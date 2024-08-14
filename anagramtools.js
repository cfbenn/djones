exports.areAnagrams =  function (word1, word2) {

    var validComparison = true;
    // Check 1 - Check if two strings exist
    if (word1 == undefined || word2 == undefined){
        validComparison = false;
    }

    // Check 2 - If the lengths are different, they can't be anagrams
    if (validComparison)
        if (word1.length !== word2.length) {
            validComparison = false;
        }

    // Check 3 - Compare
    if (validComparison)
        {
        // Remove any non-alphabetic characters and convert to lowercase
        word1 = word1.replace(/[^a-zA-Z]/g, '').toLowerCase();
        word2 = word2.replace(/[^a-zA-Z]/g, '').toLowerCase();

        // Sort the characters in each word
        const sortedWord1 = word1.split('').sort().join('');
        const sortedWord2 = word2.split('').sort().join('');

        // Compare the sorted words
        validComparison = sortedWord1 === sortedWord2;
    }

    return validComparison;
}