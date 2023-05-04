const mainlayout = require("./mainlayout");

module.exports = ({ products }) => {


  const renderProducts = products
    .map((product) => {
      return `
	<div class="col-sm col-md-6 col-lg-4 ftco-animate">
					  <div class="product">
						  <a href="#" class="img-prod"><img class="img-fluid" src="/images/software-2.jpg" alt="">
							  <span class="status">Specia Offer</span>
							  <div class="overlay"></div>
						  </a>
						  <div class="text py-3 px-3">
							  <h3><a href="#">${product.title}</a></h3>
							  <div class="d-flex">
								  <div class="pricing">
									  <p class="price"><span class="mr-2 price-dc">₹6000.00</span><span class="price-sale">₹${product.price}</span></p>
								  </div>
								  <div class="rating">
									  <p class="text-right">
										  <a href="#"><span class="ion-ios-star-outline"></span></a>
										  <a href="#"><span class="ion-ios-star-outline"></span></a>
										  <a href="#"><span class="ion-ios-star-outline"></span></a>
										  <a href="#"><span class="ion-ios-star-outline"></span></a>
										  <a href="#"><span class="ion-ios-star-outline"></span></a>
									  </p>
								  </div>
							  </div>
							  <form action="/cart/products" method="post">
							  <input hidden value="${product.id}" name="productId" />
							  <button class="btn btn-danger">Add to Cart</button>
							  </form>
						  </div>
					  </div>

				  </div>
	
	`;
    })
    .join(" ");
  return mainlayout({
    content: `
		<div class="py-1 bg-black">
    	<div class="container">
            <div class="row no-gutters d-flex align-items-start align-items-center px-md-0">
                <div class="col-lg-12 d-block">
                    <div class="row d-flex">
                        <div class="col-md pr-4 d-flex topper align-items-center">
                            <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-phone2"></span></div>
                            <span class="text">+91 987654321</span>
                        </div>
                        <div class="col-md pr-4 d-flex topper align-items-center">
                            <div class="icon mr-2 d-flex justify-content-center align-items-center"><span class="icon-paper-plane"></span></div>
                            <span class="text">easytatkal00@gmail.com</span>
                        </div>
                        <div class="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                            <span class="text ipaddress">your IP: </span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">Tatkal Software</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item "><a href="/" class="nav-link">Home</a></li>
          <li class="nav-item active"><a href="/shop" class="nav-link">Shop</a></li>
          <li class="nav-item "><a href="/about-us" class="nav-link">About-us</a></li>
          <li class="nav-item "><a href="/contact" class="nav-link">Contact</a></li>
          <li class="nav-item "><a href="/cart" class="nav-link"><span class="icon-shopping_cart"></span>Cart</a></li>
         
        </ul>
          </div>
        </div>
      </nav>
    <!-- END nav -->

    <div class="hero-wrap hero-bread" style="background-image: url('images/bg_6.jpg');">
      <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
          <div class="col-md-9 ftco-animate text-center">
          	<p class="breadcrumbs"><span class="mr-2"><a href="index.html">All</a></span> <span>Software</span></p>
            <h1 class="mb-0 bread">Tatkal Software</h1>
          </div>
          <div class="row">
          <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 telegram"><i class="fa fa-telegram"></i> Join Telegram</a></p>
            <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 whatsapp"><i class="fa fa-whatsapp"></i> Join WhatsApp</a></p>
          </div>
        </div>
      </div>
    </div>

    <section class="ftco-section bg-light">
    	<div class="container">
    		<div class="row">
    			<div class="col-md-8 col-lg-10 order-md-last">
    				<div class="row">
		    			
		    			${renderProducts}
		    		</div>
		    		<div class="row mt-5">
		          
		        </div>
		    	</div>
    		</div>
    	</div>
    </section>
    

    <footer class="ftco-footer bg-light ftco-section">
      <div class="container">
          <div class="row">
              <div class="mouse">
                        <a href="#" class="mouse-icon">
                            <div class="mouse-wheel"><span class="ion-ios-arrow-up"></span></div>
                        </a>
                        
              </div>
          </div>
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">TatkalEasySoftware</h2>
              <p>Our software is a powerful and intuitive tool designed to simplify your tasks and enhance your productivity. With its user-friendly interface and robust features, it's the perfect solution for all your software needs.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="/twitter"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="/facebook"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="/instagram"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-5">
              <h2 class="ftco-heading-2">Menu</h2>
              <ul class="list-unstyled">
                <li><a href="/shop" class="py-2 d-block">Shop</a></li>
                <li><a href="/about" class="py-2 d-block">About</a></li>
                <li><a href="/journal" class="py-2 d-block">Journal</a></li>
                <li><a href="/contact" class="py-2 d-block">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Help</h2>
              <div class="d-flex">
                  <ul class="list-unstyled mr-l-5 pr-l-3 mr-4">
                    <li><a href="/information" class="py-2 d-block">Shipping Information</a></li>
                    <li><a href="/return-exchange" class="py-2 d-block">Returns &amp; Exchange</a></li>
                    <li><a href="/term-condation" class="py-2 d-block">Terms &amp; Conditions</a></li>
                    <li><a href="/privicy-policy" class="py-2 d-block">Privacy Policy</a></li>
                  </ul>
                  <ul class="list-unstyled">
                    <li><a href="#" class="py-2 d-block">FAQs</a></li>
                    <li><a href="#" class="py-2 d-block">Contact</a></li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2">Have a Questions?</h2>
                <div class="block-23 mb-3">
                  <ul>
                    <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span class="icon icon-phone"></span><span class="text">+91 9876543210</span></a></li>
                    <li><a href="#"><span class="icon icon-envelope"></span><span class="text">EASYTATKAL00@GMAIL.COM</span></a></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved  by <a href="" target="_blank">TatkalEasysotware.com</a>
                        
                        </p>
          </div>
        </div>
      </div>
    </footer>
    
  

  <!-- loader -->
  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>

		
		`,
  });
};
