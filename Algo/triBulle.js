const triAbulle = (tab, comp) => {
    for (let i = tab.length; i > 0; i--) {
        for (let j = 0; j < (i - 1); j++) {
            // on appelle la fonction dans la condition
	    // comp appelée par la fonction triAbulle
            if ( comp(tab[j], tab[j+1]) ) {
                // permuter les valeurs
                let tmp = tab[j + 1];
                tab[j + 1] = tab[j];
                tab[j] = tmp;
            }
        }
    }

    return tab;
}

console.log(triAbulle([6, 8, 1, 2], (a,b) => a > b))

/*
[6, 8, 1, 2]
[6, 1, 2, 8]  première boucle
[6, 1, 2]     [8]
[1, 2, 6]
[1,2]      [6, 8]
...
[1,2, 6,8]
*/