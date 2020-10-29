// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigLatin(str) {
  // You code here!
  const punctuationMarks = ["!", "?", ",", ";", "-", '"', "'"];
  const strArray = str.split(" "); //convert the word string to an array of words to process it .
  const modifiedArray = [];

  // Function to get the position of the punctuation Mark in a word
  function getPunctuationPosition(word) {
    let wordPunctuationPosition = -1;
    for (let i = 0; i < punctuationMarks.length; i++) {
      wordPunctuationPosition = word.indexOf(punctuationMarks[i]);
      if (wordPunctuationPosition != -1) break;
    }
    return wordPunctuationPosition;
  }

  // function to modify the word according to the condition provided in the task

  function modifyWord(word) {
    let temp = word;
    let modifiedWord;
    const punctuationPosition = getPunctuationPosition(word);
    if (punctuationPosition === -1) {
      modifiedWord = temp.slice(1) + word.substring(0, 1) + "ay";
    } else {
      modifiedWord =
        temp.slice(1, punctuationPosition) +
        word.substring(0, 1) +
        "ay" +
        word.substring(punctuationPosition);
    }

    return modifiedWord;
  }

  // loop through the provided words and convert it
  for (let i = 0; i < strArray.length; i++) {
    modifiedArray.push(modifyWord(strArray[i]));
  }
  return modifiedArray.join(" ");
}

module.exports = {
  pigLatin,
};
