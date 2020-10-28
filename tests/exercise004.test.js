const { pigLatin } = require("../tasks/exercise004");

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

xdescribe("pigLatin", () => {
  test("returns the string as pig latin", () => {
    expect(pigLatin("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
    expect(pigLatin("This is my string")).toBe("hisTay siay ymay tringsay");
  });
  test("ignores punctuation marks", () => {
    expect(pigLatin("Pig latin is cool!!")).toBe("igPay atinlay siay oolcay!!");
  });
});
