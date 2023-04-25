const layout = require("../layout");
const { getError } = require("../../helper");

module.exports = ({ errors }) => {
  return layout({
    content: `
            <div class="container-fluid mt-5 mb-5 d-flex justify-content-center">
    <div class="card1 px-1 py-4">
        <div class="card-body">
            <h2 class="card-title mb-3 text-center">Add Product</h2>
           
            <h6 class="information mt-4">Please provide following information</h6>
            <form method="post" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group py-3">
                         <input class="form-control " type="text" name="title" placeholder="Product Name"> 
                         </div>
                         <div class="danger" >  ${getError(errors, 'title')}</div>
                </div>
                
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group py-3"> <input class="form-control" type="text" name="price" placeholder="Product Price"> </div>
                    </div>
                    <div class="danger">${getError(errors, 'price')}</div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="input-group"> <input class="form-control" type="file" name="image" placeholder="Product Images"> </div>
                    </div>
                </div>
            </div>
            <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> <small class="agree-text">By Clicking on add Product you agree to the</small> <a href="#" class="terms">Terms & Conditions</a> </div> <button class="btn btn-primary btn-block confirm-button">Add your Product</button>
            </form>
        </div>
    </div>
</div>
            `,
  });
};
