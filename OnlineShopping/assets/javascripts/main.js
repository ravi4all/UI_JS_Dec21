window.addEventListener("load", initEvents);

function initEvents() {
    loadProducts();
}

function loadProducts() {
    var ul = document.querySelector(".products");
    var li = document.createElement("li");

    var img = document.createElement("img");
    img.setAttribute('src', products[0].p_image);
    img.className = "w-100";

    var h6 = document.createElement("h6");
    h6.innerText = products[0].p_name;

    var p = document.createElement("p");
    p.innerText = "Price : " + products[0].p_price;

    var button = document.createElement("button");
    button.className = "btn btn-primary w-100";
    button.innerText = "Add to Cart";

    li.appendChild(img);
    li.appendChild(h6);
    li.appendChild(p);
    li.appendChild(button);
    ul.appendChild(li);
}