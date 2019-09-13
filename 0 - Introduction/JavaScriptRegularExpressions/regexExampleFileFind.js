const stringToSearch = "the text file text1.txt next text file text2.txt next of next text3.txt";
const regex = /(\w+)\.txt/g;

let matchedString = regex.exec(stringToSearch);
console.log(matchedString);
while (matchedString) {
    const fileName = matchedString[1];
    console.log(fileName);
    matchedString = regex.exec(stringToSearch);
}