const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const product_list_container = document.querySelector(".category_grid");

document.querySelector(".category_title").textContent = category;

document.querySelectorAll("#filters button").forEach((knap) => knap.addEventListener("click", showFiltered));

document.querySelector("#sorting").addEventListener("click", showSorted);

function showSorted(event) {
  const direction = event.target.dataset.direction;
  if(direction=="lohi"){
    allData.sort((a, b) => a.price - b.price);
  } else {
    allData.sort((a, b) => b.price - a.price);
  }
  showProducts(allData);
}

function showFiltered(event) {
  // console.log(event.target.dataset.gender);
  const gender = event.target.dataset.gender;
  if(gender=="All"){
    showProducts(allData);
  }else{
    const udsnit = allData.filter((product) => product.gender ==  gender);
    showProducts(udsnit);
  }
}

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${category}`)
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      showProducts(allData);
    });

function showProducts(products) {
    // console.log(products);
    product_list_container.innerHTML = "";
    products.forEach(element => {
    // console.log(element);
     product_list_container.innerHTML +=  `<div class="product_list_container">
     <a href="produkt.html?id=${element.id}">
              <div class="image_container">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" class="${element.soldout && "sold_out_opacity"}" alt="cap" width="100%" />
                <div class="hidden ${element.soldout && "sold_out"}" >Sold out</div>
              </div>
              </a>
              <h3>${element.productdisplayname}</h3>
              <p class="category">${element.category}</p>
              <p class="price ${element.discount && "price_outline"}">${element.price} DKK</p>
              <div class="hidden ${element.discount && "sale"}">
              <p>${element.discount} %</p>
              <p>NOW ${Math.round(element.price - element.price * element.discount / 100)} DKK</p>
              </div>
    </div>`;
    })
}