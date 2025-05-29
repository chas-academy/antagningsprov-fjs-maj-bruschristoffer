

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    function sort(numbers){
        for (let i=0; i<numbers.length; i++){
            if(numbers[i]%2 === 0){ //numbers[i] i använder variablerna i anropet (1-6).
                //%2 kollar hur många gånger får två plats i [i] i heltal. Om det inte går och det är något över är det ojämt/udda
                // 4/2=0 ingen rest (jämt)
                // 5/2=1 ett rest (udda)
                console.log(numbers[i], "jämt");
            } else {
                console.log(numbers[i], "udda");
            }
        }
    }
  sort([1,2,3,4,5,6]);
  //anropar med siffrorna 1-6
}

module.exports = { uppg9 };