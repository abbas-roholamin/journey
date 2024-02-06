// const a = decode('hola (odnum) nk(sld)lk')
// console.log(a) 

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// 01 - we have a function that accepts a string and return a formatted string
// 02 - split every word 

function decode(message) {

    const startParentheses = message.indexOf("(");
    const endParentheses = message.lastIndexOf(")");
    return message.slice(startParentheses + 1, endParentheses) ;

    // const fs = f.indexOf("(");
    // const fe = f.lastIndexOf(")");
    // return f.slice(fs + 1, fe) ;

    // .filter( (i)=> i.includes('('))
    // .toString();
    // .slice(1, -1);
    //.split("").reverse().join('');
}



