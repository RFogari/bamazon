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
    password: "fogari",
    //database being connected to.
    database: "bamazon_db"
});

//creating a connection between node and mysql
connection.connect(function(err) {
    
    if(err) throw err
    startOpeningDisplay();

})

function startOpeningDisplay(){
    console.log ('\n');
    console.log("Hello Bamazon Manager, Please select from the following options.")
    console.log ('\n');
    managerOptions();
};

//Prompt offering options to manager.  The option selected will process additional functions.
function managerOptions(){

    inquirer
        .prompt([
            {
                name: "manager_options",
                type: "list",
                message: "Available Options:",
                choices:["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
            }

        ])

    .then(function(action){

        if(action.manager_options === "View Products for Sale") {
            viewProducts();
        };

        if(action.manager_options === "View Low Inventory") {
            lowInventory();
        }

        if(action.manager_options === "Add to Inventory") {
            addInventory();
        }

        if(action.manager_options === "Add New Product") {
            addProduct();
        }

    });
}

function viewProducts() {

    console.log("\n Below is the current inventory for all products available for sale. \n");
    

    connection.query("SELECT * FROM products", function(err, res){

        if (err) throw err;
        
        //log for results of query for all products available for sale
        console.table(res);
    })
  
};

function lowInventory() {
    
    var query = "SELECT item_id, product_name, department_name, stock_quantity FROM products WHERE stock_quantity < 100"


    connection.query(query, function(err, res){
        console.log('\n The following items are running low on inventory.\n')
        console.table(res);
    })

}

function addInventory() {

    inquirer
        .prompt([
            {
                name: "inventoryItem",
                type: "input",
                message: "Enter the item ID of the product that you would like to increase the inventory of.",
            },
            {
                name:"inventoryQuantity",
                type: "input",
                message: "Enter the quantity you would like to add to the inventory for this product.",
                
            }
        ])
        .then(function(answer){

            //take the two inputs of inventory item ID and quantity and push the entries to the table

            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                    {stock_quantity: answer.inventoryQuantity},
                    {item_id: answer.inventoryItem}
                    
                ]
            )

            console.log('\n The inventory has been updated.');

            ///function to display updated inventory
            inventoryDisplay();

        })

}

//function to pull current inventory data from table.
function inventoryDisplay() {
    connection.query("SELECT * FROM products", function(err, res){

        if (err) throw err;
        
        //log for results of query for all products available for sale
        console.table(res);
    })
};

function addProduct() {

    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "Enter the name of the product that you would like to add to the inventory."
            },
            {
                name: "department",
                type: "input",
                message: "Enter the department that this product should be sold in."
            },
            {
                name: "price",
                type: "input",
                message: "Enter the price per unit for this product."
            },
            {
                name: "quantity",
                type: "input",
                message: "Enter the initial quantity for this product."
            }
        ])
        .then(function(answer) {

            connection.query(
                "INSERT INTO products SET ?",
                {
                    product_name: answer.item.toUpperCase(),
                    department_name: answer.department.toUpperCase(),
                    price: answer.price,
                    stock_quantity: answer.quantity
                },

                function(err) {
                    if (err) throw err;

                    console.log('\n This product has been added to the inventory. \n')
                }
            );

            inventoryDisplay();



        })


}