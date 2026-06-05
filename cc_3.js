//Initialize Array
let customers = [
    {
        name:"Tom",
        email:"Tommytonne@gmail.com",
        purchases: ["catnip", "catscratcher"]
    },
    {
        name: "Jerry",
        email:"MiceDice@yahoo.com",
        purchases: ["cheese", "catnip"]
    },
    {
        name:"Bob",
        email:"OldRedEyes@gmail.com",
        purchases: ["tomato juice", "jar", "vinegar"]
    }
];

//Add new customer using method .push()
customers.push({
    name:"Larry",
    email:"dorknight@godlovesme.com",
    purchases: ["plunger", "cape", "mask"]
});

//Remove the first customer using .shift() method
customers.shift();

//Update email of single existing customer
customers[1].email = "Ratattack@uvebeenhacked.net"

//Add a new purchase to a customers purchases array with .push().


/*Loop through customers array with .forEach() method.
within the loop, Log the customer's attributes with template literals.*/
