const characters = [];
function charFreq(str) {
  let cnt = 0;
  const wordArray = str.split("");

  // Double loop for char comparasion
  for (i = 0; i < wordArray.length; i++) {
    for (j = 0; j < wordArray.length; j++) {
      if (wordArray[i] === wordArray[j]) {
        cnt++;
        obj = { character: wordArray[i], count: cnt };
      }
    }
    // count counter :)
    cnt = 0;
    characters.push(obj);
  }
  characters.push(`length : ${characters.length}`);
  const jsonObject = characters.map(JSON.stringify);
  const charsNonDuplicateSet = new Set(jsonObject);
  const charsNonDuplicate = Array.from(charsNonDuplicateSet).map(JSON.parse);

  return charsNonDuplicate;
}
console.log(charFreq("haappys"));
