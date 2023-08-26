const stdin = process.stdin;
stdin.setEncoding('utf8');



function fib(n){
    let Fn = 0;
    if(n === 0){
        return 0;
    }
    if(n === 1 || n === 2){
        return 1;
    }

    Fn = fib(n-1) + fib(n-2);

    return Fn;
}
stdin.on('data', (data) => {
    const input = data.trim(); 

    const n = parseInt(input);



    console.log(fib(n));
});
