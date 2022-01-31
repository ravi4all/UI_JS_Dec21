// function as a constructor
// in constructor we initalize variables while working with Object Oriented Programming
// function Item(id, name, price, img) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.img = img;
// }

// In latest version of javascript, it introduced classes
class Item {
    constructor(id, name, price, img) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
    }
}

var object = {
    cartItems : [],
    
    addProduct : function(id, name, price, img) {
        var item = new Item(id, name, price, img);  // creating object of Item class
        this.cartItems.push(item);
        console.log(this.cartItems);
    }
}