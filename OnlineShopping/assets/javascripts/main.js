window.addEventListener("load", initEvents);

function initEvents() {
    var search_btn = document.querySelector("#search-btn");
    search_btn.addEventListener("click", searchProduct);

    loadProducts();
}

function loadProducts() {
    var ul = document.querySelector(".products");
    
    products.forEach(function(obj) {
        var li = document.createElement("li");
        
        var imgWrapper = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute('src', obj.p_image);
        img.className = "w-100";
        imgWrapper.appendChild(img);
        imgWrapper.className = "img-wrapper";

        var h6 = document.createElement("h6");
        h6.innerText = obj.p_name;

        var p = document.createElement("p");
        p.innerText = "Price : " + obj.p_price;

        var button = document.createElement("button");
        button.className = "btn btn-primary w-100";
        button.innerText = "Add to Cart";
        button.setAttribute("title", obj.p_id);

        li.appendChild(imgWrapper);
        li.appendChild(h6);
        li.appendChild(p);
        li.appendChild(button);
        ul.appendChild(li);
        button.addEventListener("click", addToCart);
    });
}

function addToCart() {
    for(var i = 0; i < products.length; i++) {
        if(this.title == products[i].p_id) {
            object.addProduct(products[i].id, products[i].p_name,
                products[i].p_price, products[i].p_image);
        }
    }
    showCart();
}

function showCart() {
    var ul = document.querySelector(".cart-items");
    ul.innerHTML = "";
    var span = document.querySelector("#cart-count");
    span.innerHTML = object.cartItems.length;
    
    object.cartItems.forEach(function(obj) {
        var li = document.createElement("li");
        
        var imgWrapper = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute('src', obj.img);
        img.className = "w-25";
        imgWrapper.appendChild(img);
        imgWrapper.className = "img-wrapper";

        var h6 = document.createElement("h6");
        h6.innerText = obj.name;

        var p = document.createElement("p");
        p.innerText = "Price : " + obj.price;

        // var button = document.createElement("button");
        // button.className = "btn btn-primary w-100";
        // button.innerText = "Add to Cart";
        // button.setAttribute("title", obj.id);

        li.appendChild(imgWrapper);
        li.appendChild(h6);
        li.appendChild(p);
        // li.appendChild(button);
        ul.appendChild(li);
        // button.addEventListener("click", addToCart);
    });
}

function searchProduct() {
    var searchValue = document.querySelector("#search-box").value;
    var ul = document.querySelector(".products");
    ul.innerHTML = "";
    products.forEach(function(obj) {
        if(obj.p_name.toLowerCase().includes(searchValue.toLowerCase())) {
            var li = document.createElement("li");
            var imgWrapper = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute('src', obj.p_image);
            img.className = "w-100";
            imgWrapper.appendChild(img);
            imgWrapper.className = "img-wrapper";

            var h6 = document.createElement("h6");
            h6.innerText = obj.p_name;

            var p = document.createElement("p");
            p.innerText = "Price : " + obj.p_price;

            var button = document.createElement("button");
            button.className = "btn btn-primary w-100";
            button.innerText = "Add to Cart";
            button.setAttribute("title", obj.p_id);

            li.appendChild(imgWrapper);
            li.appendChild(h6);
            li.appendChild(p);
            li.appendChild(button);
            ul.appendChild(li);
            button.addEventListener("click", addToCart);
            console.log(obj);
        }
    });
}