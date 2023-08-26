const stdin = process.openStdin();
stdin.setEncoding('utf8');

function fib(n,m){
    let fibArr = [0, 1];
   for(let i = 2; i <= m*6; i++){

        fibArr[i] = (fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]) % m;
        if(i > 2 && fibArr[i] === 1 && fibArr[i - 1] === 0){
            break;

        }
   
    }
    let a = fibArr[BigInt(n)% BigInt(fibArr.length - 2)];
    return a;
}

stdin.on('data', (data) => {
    let input = data.toString().split(' ');
    const n = input[0].toString();
    const m = input[1];
    console.log(fib(n,m));


});




