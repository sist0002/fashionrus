const categorylist = document.querySelector(".category_grid");

fetch("https://kea-alt-del.dk/t7/api/categories")
    .then((response) => response.json())
    .then((categories) => showCategories(categories));

    function showCategories(categories) {
        categories.forEach(category => {
            categorylist.innerHTML +=  
            `<div class="category_list_container">
                <a href="produktliste.html?category=${category.category}">
                    <img src="https://kea-alt-del.dk/t7/images/webp/640/2360.webp" alt="cap" width="100%" />
                    <h3>${category.category}</h3>
                </a>
            </div>`
        });
    }


//  <div class="category_list_container">
//             <a href="produktliste.html">
//               <img src="https://kea-alt-del.dk/t7/images/webp/640/2360.webp" alt="cap" width="100%" />
//               <h3>Accesories</h3>
//             </a>
//           </div>
//           <div class="category_list_container">
//             <a href="produktliste.html">
//               <img src="https://kea-alt-del.dk/t7/images/webp/640/2260.webp" alt="shirt" width="100%" />
//               <h3>Apperal</h3>
//             </a>
//           </div>
//           <div class="category_list_container">
//             <a href="produktliste.html">
//               <img src="https://kea-alt-del.dk/t7/images/webp/640/2371.webp" alt="brun sko" width="100%" />
//               <h3>Footwear</h3>
//             </a>
//           </div>
//           <div class="category_list_container">
//             <a href="produktliste.html">
//               <img src="https://kea-alt-del.dk/t7/images/webp/640/2251.webp" alt="sandal" width="100%" />
//               <h3>Free items</h3>
//             </a>
//           </div>
//           <div class="category_list_container">
//             <a href="produktliste.html">
//               <img src="https://kea-alt-del.dk/t7/images/webp/640/2221.webp" alt="bag" width="100%" />
//               <h3>Personal care</h3>
//             </a>
//           </div>
//           <div class="category_list_container">
//             <a href="produktliste.html">
//               <img src="https://kea-alt-del.dk/t7/images/webp/640/2290.webp" alt="sportsbluse" width="100%" />
//               <h3>Sporting goods</h3>
//             </a>
//           </div>