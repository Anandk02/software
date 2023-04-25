
const mainLayout = require('./indexLayout');

module.exports = ({ products }) => {
  const renderProducts = products
    .map((product) => {
      return `
      <div
      class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
      <div class="product">
          <img src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="">
          <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
              <li class="icon"><span class="fas fa-expand-arrows-alt"></span></li>
              <li class="icon mx-3"><span class="far fa-heart"></span></li>
              <li class="icon"><span class="fas fa-shopping-bag"></span></li>
          </ul>
      </div>
      <div class="tag bg-red">sale</div>
      <div class="container text-center">
          <div class="row">
              <div class="col text-center">
                  <div class="title pt-4 pb-1">${product.title}</div>
                  <div class="d-flex align-content-center justify-content-center">
                      <span class="fas fa-star"></span>
                      <span class="fas fa-star"></span>
                      <span class="fas fa-star"></span>
                      <span class="fas fa-star"></span>
                      <span class="fas fa-star"></span>
                      (220)
                  </div>
                  <p class="text-center priceOff py-2">30% Off</p>
              </div>
              <div class="col text-center">
                  <div class="price py-3">₹ 60.0 <strong class="origin-price">₹${product.price}</strong></div>
                  <a href="#" class="btn btn-warning py-2">Buy Now</a>
              </div>
          </div>
      </div>
  </div>
  <div

        `;
    })
    .join(" ");

  return mainLayout({
    content: `
      <div class="row">${renderProducts}</div>

        `,
  });
};
