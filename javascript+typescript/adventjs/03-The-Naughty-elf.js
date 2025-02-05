// const original = 'abcd'
// const modified = 'abcde'


// const original = 'stepfor'
// const modified = 'stepor'

const original = 'abcde'
const modified = 'abcde'

// if exist in modified but notExist in original return from MODIFIED 
// if exist in original but notExist in modified return from ORIGINAL
// max between original and modified for iteration
// every element from 
function findNaughtyStep(original, modified) {
    const iteration = original.length > modified.length ? original : modified;

    if (original == modified) {
        return "";
    }

    if (!original) {
        return modified;
    }

    for (let i = 0; i < iteration.length; i++) {
        if (original[i] !== modified[i]) {
            return iteration[i];
        }
    };

    return ""

  }

console.log('====================================');
console.log(findNaughtyStep(original, modified));
console.log('====================================');