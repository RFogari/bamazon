**Bamazon**
===========

**Node.js & MySQL App**
======================================

This app offers an Amazon-like storefront experience.  The app was developed using MySQL and Node.js.  The app offers the users two views, view the storefront as  customer or view the storefront as a manger.   Both viewpoints allow the user to view current products available for sale, the product price points, and current levels of inventory.

________________________________________

**Bamazon Customer**

* Within the Bamazon Customer portal, the user will first be shown a table of all available products for sale.

![Customer: Open](/images/customeropen1.png)





* The program will ask the user what product the user would like to purchase.  The user will be prompted to enter the item ID of the product to be purchased.  The item ID is listed in the product table.

* The program will prompt the user to enter the quantity to be purchased.

* Once the quantity is entered, the program will calculate the total expense amount due for entered purchase.

![Customer: Purchase](/images/customerpurchase.JPG)


* The program will the automatically remove the quantity from the available inventory.

<br>

**Bamazon Manager**

* Within the Bamazon Manager portal, the user will first be shown a list of menu options including:

        + View Products for Sale
        + View Low Inventory
        + Add to Inventory
        + Add New Product


![Manager: Open](/images/manageropen.JPG)

<br>

* If the user selects _View Products for Sale_ a table of all available merchandise for sale will be displayed.  The table will include current price point, department and current inventory level for each product.

![Manager: Products For Sale](/images/managerproductsforsale.JPG)


<br>

* If the user selects _View Low Inventory_ a table will generate showing all products in the inventory with a quantity level at 50 units or less.

![Manager: Low Inventory](/images/managerproductsforsale.JPG)


<br>


* If the user selects _Add to Inventory_ the user will be prompted to enter the item ID, from the inventory table, and the quantity to be added.  Once both entries are submitted the products table will update with the new inventory.

![Manager: Add Inventory](/images/manageraddinventory.JPG)


<br>

* If the user selects _Add New Product_ the user will prompted to enter the name, department, price point, and initial quantity of the product being added.  Once all entries are submitted, the product will be added to the table.

![Manager: Add New Product](/images/managernewproduct.JPG)


<br>



**Required NPM Packages**

    * mysql
    * console.table
    * inquirer
    
    + Package dependencies are included in the npm install.

<br>

**Before Running**

    User will ned to update MySQL user connection login in .JS files before running the program.