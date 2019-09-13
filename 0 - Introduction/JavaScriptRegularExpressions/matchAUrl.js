const urlTestString = '1567917257 [INFO] Accessed http://some123url.co.uk/alpha.html?b=9 1567917272 [INFO] Process \
completed in 4ms. 1567920056 [Warning] http://some123url.co.uk not standeard behaviour 1567917286 [INFO] Accessed \
http://www.somesite.com/mad.html?siteno=1 1567920521[INFO] Accessed https://someothersite.com/ 1567920537[Warning] Stuff went wrong \
https://someothersite.com/ 1567920552 [INFO] More info http://someothersite.com/';

const regex = /(http:\/\/|https:\/\/)([\w]+\.[\w]+\.?[\w]+)/gi;

let countUrls = {};

let matchedURLS = regex.exec(urlTestString);

while (matchedURLS) {
    console.log(matchedURLS);
    if (countUrls[matchedURLS[2]] > 0) {
        countUrls[matchedURLS[2]] += 1;
    } else {
        countUrls[matchedURLS[2]] = 1;
    }
    matchedURLS = regex.exec(urlTestString);
}

console.log(countUrls)