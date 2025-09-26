const product_list_container = document.querySelector(".category_grid");


fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
    .then((response) => response.json())
    .then(data => showProducts(data));


function showProducts(products) {
    console.log(products);
    products.forEach(element => {
    console.log(element);
     product_list_container.innerHTML +=  `<div class="product_list_container">
     <a href="produkt.html?id=${element.id}">
              <div class="image_container">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="cap" width="100%" />
                <div class="hidden ${element.soldout && "sold_out"}" >Sold out</div>
              </div>
              </a>
              <h3>${element.productdisplayname}</h3>
              <p class="category">${element.category}</p>
              <p class="price">${element.price} DKK</p>
              <div class="hidden ${element.discount && "sale"}">
              <p>${element.discount} %</p>
              <p>Now DKK ${Math.round(element.price - element.price * element.discount / 100)}</p>
              </div>
    </div>`;
    })
}