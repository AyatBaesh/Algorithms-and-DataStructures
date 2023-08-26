const stdin = process.openStdin();
stdin.setEncoding('utf8');

function NOD(n,m){
    if(n === 0){
        return m;
    }else if(m === 0 || n === m){
        return n;
    }
    if(n > m){
        return NOD(n%m, m);
    }else  if(m > n){
        return NOD(m%n,n);
    }
}

stdin.on('data', (data) =>{
    let input = data.toString().split(' ');
    const n = parseInt(input[0]);
    const m = parseInt(input[1]);
    console.log(NOD(m,n));
} );