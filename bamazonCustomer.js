//list of NPM required to execute code
var mysql = require("mysql");
var consoletable = require('console.table');
var inquirer = require('inquirer');


//create a connection to the mysql bamazon database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // update your username and password if needed
    user: "root",
    password: "",
    //database being connected to.
    database: "bamazon_db"
});

//creating a connection between node and mysql
connection.connect(function(err) {
    
    if(err) throw err
      
    startOpeningDisplay();

})

//First task - display all products available for sale.

function startOpeningDisplay(){
    console.log("                                     ")
    console.log("\n Displaying all products available for sale... \n");

    connection.query("SELECT * FROM products", function(err, res){

        if (err) throw err;
        
        //log for results of query for all products available for sale
        console.table(res);
      
        //run inquire prompt
        customerQuestion();

    });
}

//Second task - prompt user to place an order based on the displayed table

function customerQuestion() {
    inquirer
        .prompt([
        {
            name:"productForPurchase",
            type:"input",
            message: "What product would you like to buy?  Please enter the product Item ID.",
            validate: function(value) {
                if (isNaN(value) === false){
                    return true;
                }

                //if the entered ID is not a valid number the user will be prompted to enter a new ID
                return false;
                console.log("Please re-enter the Item ID of the product you would like to purchase.")
            }
        },
        {
            name: "amount",
            type: "input",
            message: "How many units would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false){
                    return true;
                }
                return false;
                console.log("Please re-enter the amount of the product you would like to purchase.  Products are sold as whole items.")
            }
        }
    ])

    //Once user enters product and amount - reconnect to the database to validate quantity and order total
    .then(function(answer) {
        connection.query('SELECT * FROM products WHERE item_id = ?', answer.productForPurchase, function(err, res){

            for (var i = 0; i < res.length; i++){

                if(answer.amount > res[i].stock_quantity){
                    //if the quantity entered exceeds the available stock user is sent back to the begining
                    console.log("There is not enough stock available for this purchase.")
                    console.log("Please enter a new order.")
                    startOpeningDisplay();
                }
                else{
                    orderAmount = res[i].price * answer.amount;
                    console.log('Thank you for your purchase. The total for this order is $'+ orderAmount + ' .');
                }
        
        
              
            //new variables to update the database quantity for the selected item.         
                var newStockQuantity = res[i].stock_quantity - answer.amount;
                var product_id = answer.productForPurchase;
               
               //update database with quantity purchased
               
               connection.query("UPDATE products SET ? WHERE?",[
                       {
                        stock_quantity: newStockQuantity
                       },
                       {
                        item_id: product_id
                       }
                   ],
                   function(error) {
                       if(error) throw err;
                      
                   }
               )
                
        } 
        });
    })
}