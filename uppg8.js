

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
let person = [
    {name: "Christoffer", age: 29},
    {name: "Brus", age: 19},
    {name: "Michelle", age: 27},
    {name: "Chris", age: 39},
    {name: "Brusinator", age: 100}
];

function overThirty(personArray){
    for (let i = 0; i<personArray.length; i++){
        if (personArray[i].age>30){
            console.log(personArray[i].name);
        }
    }
}
overThirty(person)

}

module.exports = { uppg8 };