const stdin = process.stdin;
stdin.setEncoding('utf8');



function fib(n){
    let fibArr = [];
    if(n === 0 || n === 1){
        return n;
    }else if( n === 2){
        return 1;
    }else{
        fibArr.push(0);
        fibArr.push(1);
   for(let i = 2; i <= n; i++){
        fibArr.push((fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]) % 10);
   }
}
    console.log(fibArr);
    return fibArr;
}
stdin.on('data', (data) => {
    const input = data.trim(); 
    const n = parseInt(input);


    let result = fib(n);
    console.log(result)
    console.log(result[n]);
});
