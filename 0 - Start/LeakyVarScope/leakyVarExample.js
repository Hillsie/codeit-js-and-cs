// Any more leaky var examples, feel free to contribute
// FYI : Beanie is my dog's name.
const BEANIE_S_BYTE = 10;
let Beanie_s_Yrs = 9;
var beanie_s_byte = 10;
if (Beanie_s_Yrs < 10) {
    const BEANIE_S_BYTE = 15;
    var beanie_s_byte = 15;
    console.log('Inside the block scope');
    console.log(`With let BEANNIE'S_BYTE is ${BEANIE_S_BYTE} and var beannie's_byte is ${beanie_s_byte}`);
};
console.log('Outside the block scope');
console.log(`With let BEANNIE'S_BYTE is ${BEANIE_S_BYTE} and var beannie's_byte is ${beanie_s_byte}`);
console.log('The inner var affects the outer var value');