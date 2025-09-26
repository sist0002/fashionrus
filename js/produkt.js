const productContainer = document.querySelector(".productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
    .then(response => response.json())
    .then(data => showProduct(data))
      
      function showProduct(product) {
        console.log(product);
      productContainer.innerHTML = `
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="cap" width="100%" />
        <section>
          <h2>Product information</h2>
          <h3>Model name</h3>
          <p>${product.productdisplayname}</p>
          <h3>Color</h3>
          <p>${product.basecolour}, ${product.colour1}</p>
          <h3>Inventory number</h3>
          <p>${product.id}</p>
          <div class="basket_area">
            <h2>${product.productdisplayname}</h2>
            <p class="category">${product.category}</p>
            <div class="choose_size">
              <h3>Choose a size</h3>
              <select name="size" id="size">
                <option value="xs">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <button>Add to basket</button>
          </div>
        </section>`;
    }

