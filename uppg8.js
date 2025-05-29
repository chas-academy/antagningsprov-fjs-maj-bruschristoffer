

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
let person = [
    {name: "Christoffer", Age: 29},
    {name: "Brus", Age: 19},
    {name: "Michelle", Age: 27},
    {name: "Chris", Age: 39},
    {name: "Brusinator", Age: 100}
];

function overThirty(personArray){
    for (let i = 0; i<personArray.length; i++){
        if (personArray[i].age>30){
            console.log(personArray[i].name);
        }
    }
}

}

module.exports = { uppg8 };