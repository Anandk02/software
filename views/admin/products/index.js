const layout = require("../dashboardLayout");

module.exports = ({ products }) => {
  const renderProducts = products
    .map((product) => {
      return `

                <tr class="bg-blue">
                    <td class="pt-2">
                        <img src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="rounded-circle" alt=""> 
                        <div class="pl-lg-5 pl-md-3 pl-1 name">${
                          product.title
                        }</div>
                    </td>
                    <td class="pt-3">${product.price}</td>
                    <td class="pt-3">${product.id.toUpperCase()}</td>
                    <td class="pt-3"><a href="/admin/product/${
                      product.id
                    }/edit" class="btn btn-success">Edit</a></td>
                    <td class="pt-3">
                    <form method="post" action="/admin/product/${
                      product.id
                    }/delete">
                    <button class="btn btn-danger">Delete</button>
                    </form>
                    
                    </td>
                </tr>
                <tr id="spacing-row">
                    <td></td>
                </tr>

        `;
    })
    .join(" ");

  return layout({
    content: `
    <div class="container rounded mt-5 bg-white p-md-5">
    <div class="h2 font-weight-bold">Your Listed Product</div>
    <a href="/admin/product/new" class="btn btn-primary">Add Product</a>
    <div class="table-responsive">
        <table class="table">
       <h4>Total Product  <strong>${products.length}</strong></h4> 
            <thead>
                <tr>
                    <th scope="col">Product Name</th>                    
                    <th scope="col">Price</th>      
                    <th scope="col">Product Id</th>                    
                    <th scope="col">Edit</th>                    
                    <th scope="col">Delete</th>                    
                </tr>
            </thead>
            <tbody>
                <tr id="spacing-row">
                    <td></td>
                </tr>
                ${renderProducts}
            </tbody>
        </table>
    </div>
</div>


        `,
  });
};
