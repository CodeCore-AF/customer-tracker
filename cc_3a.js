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
customers[0].email = "Ratattack@uvebeenhacked.net";

//Add a new purchase to a customers purchases array with .push().
customers[2].purchases.push("vegetable peeler");

//Define the function to use the forEach() loop
function customerLogger(currentCustomer) {
    console.log(`Customer's Name: ${currentCustomer.name}`);
    console.log(`Email: ${currentCustomer.email}`);
    console.log(`Purchases: ${currentCustomer.purchases}\n`);
};

/*Loop through customers array with .forEach() method.
within the loop, Log the customer's attributes with template literals.*/
customers.forEach(customerLogger);