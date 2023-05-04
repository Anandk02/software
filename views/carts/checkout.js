const mainlayout = require('../admin/dashboardLayout');

module.exports = ({content}) => {
    return mainlayout({
        content:`
        <div class="container checkout-container d-flex justify-content-center align-items-center">

              <div class="card">

                  <button class="btn btn-dark app-button mb-3 d-flex flex-row whatsapp">
                    
                    <i class="fa fa-whatsapp"></i>
                    <div class="d-flex flex-column">
                      <span>Contact us On</span>
                      <h3 class="mb-0">Whats App</h3>
                    </div>
                  </button>

                  <button class="btn btn-dark app-button mb-3 d-flex flex-row telegram">
                    
                    <i class="fa fa-telegram"></i>
                    <div class="d-flex flex-column">

                      <span>Contact us On</span>
                      <h3 class="mb-0">Talegram</h3>
                      
                    </div>


                  </button>
                
              </div>
              
            </div>
        `
    });
}