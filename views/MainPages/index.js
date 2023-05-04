const mainlayout = require("./mainlayout");

module.exports = ({ products }) => {
  const renderProducts = products
    .map((product) => {
      return `
  <div class="col-sm col-md-6 col-lg-3 ftco-animate">
                    <div class="product">
                        <a href="#" class="img-prod"><img class="img-fluid" src="/images/software-2.jpg" alt="">
                            <span class="status">Special Offer </span>
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
          <li class="nav-item active"><a href="/" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="/shop" class="nav-link">Shop</a></li>
          <li class="nav-item "><a href="/about-us" class="nav-link">About-us</a></li>
          <li class="nav-item "><a href="/contact" class="nav-link">Contact</a></li>
          <li class="nav-item "><a href="/cart" class="nav-link"><span class="icon-shopping_cart"></span>Cart</a></li>
          <li class="nav-item cta cta-colored"><a href="/accounts/signup" class="nav-link"><span class="icon-user"></span> Account</a></li>
        </ul>
          </div>
        </div>
      </nav>
    <!-- END nav -->

    <section id="home-section" class="hero">
          <div class="home-slider js-fullheight owl-carousel">
          <div class="slider-item js-fullheight">
              <div class="overlay"></div>
            <div class="container-fluid p-0">
              <div class="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
                  <div class="one-third order-md-last img js-fullheight" style="background-image:url(images/rail.jpg);">
                  </div>
                  <div class="one-forth d-flex js-fullheight align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                      <div class="text">
                          <span class="subheading">Tatkal Easy Software</span>
                          <div class="horizontal">
                              <h3 class="vr" style="background-image: url(images/divider.jpg);">Stablished Since 2019</h3>
                            <h1 class="mb-4 mt-3">Effortlessly Book Indian Railways  <br><span>Tatkal Tickets </span>with Our Automated Software</h1>
                            
                            
                            <div class="row" style="margin-right="10px">
                            <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 telegram"><i class="fa fa-telegram"></i> Join Telegram</a></p>
                              <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 whatsapp"><i class="fa fa-whatsapp"></i> Join WhatsApp</a></p>
                            </div>
                          </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          <div class="slider-item js-fullheight">
              <div class="overlay"></div>
            <div class="container-fluid p-0">
              <div class="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
                  <div class="one-third order-md-last img js-fullheight" style="background-image:url(images/Indian_Railways.jpg);">
                  </div>
                  <div class="one-forth d-flex js-fullheight align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                      <div class="text">
                          <span class="subheading">TatkalEasy Software</span>
                          <div class="horizontal">
                              <h3 class="vr" style="background-image: url(images/divider.jpg);">Best Tatkal Software 2022</h3>
                            <h1 class="mb-4 mt-3">Maximize Your Chances of Getting <span>Tatkal Tickets</span> with Our Tatkal Software</h1>
                            
                          <div class="row" style="margin-right="10px">
                            <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 telegram "><i class="fa fa-telegram"></i> Join Telegram</a></p>
                            <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 whatsapp "><i class="fa fa-whatsapp"></i> Join WhatsApp</a></p>
                          </div>
                          </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>

    <section class="ftco-section ftco-no-pb ftco-no-pt bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style="background-image: url(images/software-2.jpg);">
                        <a href="https://www.youtube.com/watch?v=Y5KWgHfDWio" class="icon popup-vimeo d-flex justify-content-center align-items-center">
                            <span class="icon-play"></span>
                        </a>
                    </div>
                    <div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
              <div class="heading-section-bold mb-4 mt-md-5">
                  <div class="ml-md-0">
                    <h2 class="mb-4">India’s No 1 Tatkal Software Platform!</h2>
                </div>
              </div>
              <div class="pb-md-5">
                            <p>Are you tired of long and tedious processes when it comes to shipping your products? Are you looking for a reliable and easy-to-use solution that can make your shipping experience seamless and efficient? Look no further than EasyTatkalSoftware.</p>
                            <div class="row ftco-services">
                      <div class="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
                        <div class="media block-6 services">
                          <div class="icon d-flex justify-content-center align-items-center mb-4">
                                <span class="flaticon-002-recommended"></span>
                          </div>
                          <div class="media-body">
                            <h3 class="heading">Refund Policy</h3>
                            <p>Easy Returns, Hassle-Free Refunds. Our Refund Policy for Your Peace of Mind..</p>
                          </div>
                        </div>      
                      </div>
                      <div class="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
                        <div class="media block-6 services">
                          <div class="icon d-flex justify-content-center align-items-center mb-4">
                                <span class="flaticon-001-box"></span>
                          </div>
                          <div class="media-body">
                            <h3 class="heading">24/7 Support</h3>
                            <p>Expert Help When You Need It - Our Support Team Is Here 24/7. Experience Unparalleled Customer Service.</p>
                          </div>
                        </div>    
                      </div>
                      <div class="col-lg-4 text-center d-flex align-self-stretch ftco-animate">
                        <div class="media block-6 services">
                          <div class="icon d-flex justify-content-center align-items-center mb-4">
                                <span class="flaticon-003-medal"></span>
                          </div>
                          <div class="media-body">
                            <h3 class="heading">Original Software</h3>
                            <p>Trust in Authenticity - Our Original Software Is Guaranteed to Meet Your Needs. Choose Quality, Choose Us.</p>
                          </div>
                        </div>      
                      </div>
                      <div class="row">
                      <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 telegram"><i class="fa fa-telegram"></i> Join Telegram</a></p>
                        <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 whatsapp"><i class="fa fa-whatsapp"></i> Join WhatsApp</a></p>
                      </div>
                      
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <section class="ftco-section bg-light">
        <div class="container">
                <div class="row justify-content-center mb-3 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
            <h2 class="mb-4">Get Your Trusted Tatkal Software</h2>
            <p>Tatkal Software ,Tatkal Software All, Tatkal Software Nexus ,Tatkal Software Booking,Tatkal Booking ,Tatkal Railway Booking,Get All Geniune Product Now .</p>
          </div>
        </div>   		
        </div>
        <div class="container">
            <div class="row">   
            ${renderProducts}
            </div>
        </div>
    </section>

    <section class="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
        <div class="container">
            <div class="row">
                <div class="col-md-8 d-flex align-items-stretch">
                    <div class="img" style="background-image: url(images/software-3.jpg);"></div>
                </div>
                <div class="col-md-4 py-md-5 ftco-animate">
                    <div class="text py-3 py-md-5">
                <h2 class="mb-4">New Women's Clothing Summer Collection 2019</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div class="row" style="margin-right="10px">
                            <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 telegram"><i class="fa fa-telegram"></i> Join Telegram</a></p>
                              <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 whatsapp"><i class="fa fa-whatsapp"></i> Join WhatsApp</a></p>
                            </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-5 order-md-last d-flex align-items-stretch">
                    <div class="img img-2" style="background-image: url(images/software-4.jpg);"></div>
                </div>
                <div class="col-md-7 py-3 py-md-5 ftco-animate">
                    <div class="text text-2 py-md-5">
                <h2 class="mb-4">New Men's Clothing Summer Collection 2019</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div class="row" style="margin-right="10px">
                <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 telegram"><i class="fa fa-telegram"></i> Join Telegram</a></p>
                  <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 whatsapp"><i class="fa fa-whatsapp"></i> Join WhatsApp</a></p>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section class="ftco-section ftco-counter img" id="section-counter" style="background-image: url(images/rail.jpg);">
        <div class="container">
            <div class="row justify-content-center py-5">
                <div class="col-md-10">
                    <div class="row">
                  <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 text-center">
                      <div class="text">
                        <strong class="number" data-number="1000">0</strong>
                        <span>Happy Customers</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 text-center">
                      <div class="text">
                        <strong class="number" data-number="10">0</strong>
                        <span>Software</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 text-center">
                      <div class="text">
                        <strong class="number" data-number="1000">0</strong>
                        <span>Total Software Sell</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div class="block-18 text-center">
                      <div class="text">
                        <strong class="number" data-number="10000">0</strong>
                        <span>Irctc ID Sell</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
            </div>
    </section>

    <section class="ftco-section testimony-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate">
            <h2 class="mb-4">Our satisfied customer says</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
          </div>
        </div>
        <div class="row ftco-animate">
          <div class="col-md-12">
            <div class="carousel-testimony owl-carousel">
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(images/person_1.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">Marketing Manager</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(images/person_2.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">Interface Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(images/person_3.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">UI Designer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(images/person_1.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">Web Developer</span>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="testimony-wrap p-4 pb-5">
                  <div class="user-img mb-5" style="background-image: url(images/person_1.jpg)">
                    <span class="quote d-flex align-items-center justify-content-center">
                      <i class="icon-quote-left"></i>
                    </span>
                  </div>
                  <div class="text">
                    <p class="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p class="name">Garreth Smith</p>
                    <span class="position">System Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        <hr>

        <section class="ftco-section-parallax">
      <div class="parallax-img d-flex align-items-center">
        <div class="container">
          <div class="row d-flex justify-content-center py-5">
            <div class="col-md-7 text-center heading-section ftco-animate">
              <h2>Subcribe to our Newsletter</h2>
              <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-8">
                  <form action="#" class="subscribe-form">
                    <div class="form-group d-flex">
                      <input type="text" class="form-control" placeholder="Enter email address">
                      <input type="submit" value="Subscribe" class="submit px-3">
                      </div>
        <div class="row">
                            <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 telegram"><i class="fa fa-telegram"></i> Join Telegram</a></p>
                              <p><a href="#" class="btn btn-primary px-5 py-3 mt-3 whatsapp"><i class="fa fa-whatsapp"></i> Join WhatsApp</a></p>
                            </div>
        </div>
                    </div>
                  </form>
                </div>
              </div>
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
