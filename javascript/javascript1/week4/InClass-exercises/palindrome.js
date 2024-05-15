function longestPalindrome(string) {
  const length = string.length;
  let result = "";

  function centeredPalindrome(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      //expand in each direction.
      left--;
      right++;
    }

    return string.slice(left + 1, right);
  }

  for (let i = 0; i < length - 1; i++) {
    const oddMatch = centeredPalindrome(i, i + 1);

    const evenMatch = centeredPalindrome(i, i);

    // if (oddMatch.length > 1) console.log("oddMatch: " + oddMatch);
    // if (evenMatch.length > 1) console.log("evenMatch: " + evenMatch);

    if (oddMatch.length > result.length) result = oddMatch;
    if (evenMatch.length > result.length) result = evenMatch;
  }
  return (
    "Longest palindrome is: " + result + " and its length is: " + result.length
  );
}

console.log(longestPalindrome("Sit on a potato pan, Otis"));
