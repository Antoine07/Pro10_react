/*
N = 433

denomimations = [1, 5, 10, 20, 50, 100, 200]

Parcourir d dans les dénominations de la plus grande valeur à la plus petite

    tant que N >= d alors on le soustrait
    
        N = N - d
        print(N)

*/

// 1.
let N = 433;
const denomimations = [1, 5, 10, 20, 50, 100, 200];
denomimations.reverse();
let results = [];

for(const d of denomimations){
    while(N >= d){
        N = N - d;
        results.push(d);
    }
}

console.log(results);

// 2.
results = [];
N = 433;
for(const d of denomimations){

    // comment savoir si N est divisible par d ?
    let nbD = Math.floor(N / d);
    if( nbD >= 1 ){
        N = N - d * nbD;
        // console.log(N, d * nbD);
        // [d] permet de prendre la valeur de d comme clé
        results.push( { 'd' : d, 'count'  : nbD } );
    }
}

console.log(results);

results.map( r => {

})