function analyser(phrase) {
   
    const longueur = 0;
    const nombreMots = 0;
    const nombreVoyelles = 0;
    
    for (const char of phrase) {
       
        longueur++;

       
        if (voyelles.includes(char)) {
            nombreVoyelles++;
        }

       
        if (char === ' ') {
            nombreMots++;
        }
    }

   
    if (longueur > 1) {  
        nombreMots++;
    }

    
    console.log(`Longueur de la phrase : ${longueur}`);
    console.log(`Nombre de mots : ${nombreMots}`);
    console.log(`Nombre de voyelles : ${nombreVoyelles}`);
}


