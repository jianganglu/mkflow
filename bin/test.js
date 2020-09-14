const simpleGit = require('simple-git');
const readlineSync = require('readline-sync');
let SimpleGitOptions = {
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
};
const git = simpleGit(SimpleGitOptions);
// let tagName = readlineSync.question('please input the tag name?');
new Promise((resolve, reject) => {
    let tagName = readlineSync.question('please input the tag name?');
    console.log(tagName);
    resolve(tagName);
})

// git.push().then(e => {
//     console.log(e);
// }).catch(e => { console.log(e) });
// (async function () {
//     let resp;
//     resp = await git.remote(['update']);
//     console.log(resp);
//     resp = await git.status();
//     console.log(resp);
// })();
/* ******* */
console.log('tags11112');
// git.branch().then(e => { console.log(e) });
// git.checkout(['-b', 'testbranch2']).then(e => { console.log(e) });
// git.status().then(result => { console.log(result) });
// git.add('./')
//     .commit('commit test')
//     .push();
// git.merge({ from: 'master' }).then(e => { console.log(e) });
// git.merge(['master']).then(e => { console.log(e) });
// git.branch().then(e => { console.log(e) });
/* ******* */
/* test1 */
/* test2 */
/* test3 */
/* test4 */