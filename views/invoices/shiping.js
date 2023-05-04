module.exports = ({content}) => {
        return `
        <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/invoices.css">
    <title>Tatkaleasysoftware.com - invoices!</title>
  </head>
  <body>
  <div class="container-fluid">
  <div id="ui-view" data-select2-id="ui-view"><div><div class="card">
  <div class="card-header">Invoice
  <strong>#BBB-10010110101938</strong>
  <a class="btn btn-sm btn-secondary float-right mr-1 d-print-none" href="#" onclick="javascript:window.print();" data-abc="true">
  <i class="fa fa-print"></i> Print</a>
  <a class="btn btn-sm btn-info float-right mr-1 d-print-none" href="#" data-abc="true">
  <i class="fa fa-save"></i> Save</a>
  </div>
  <div class="card-body">
  <div class="row mb-4">
  <div class="col-sm-4">
  <h6 class="mb-3">From:</h6>
  <div>
  <strong>BBBootstrap.com</strong>
  </div>
  <div>42, Awesome Enclave</div>
  <div>New York City, New york, 10394</div>
  <div>Email: admin@bbbootstrap.com</div>
  <div>Phone: +48 123 456 789</div>
  </div>
  
  <div class="col-sm-4">
  <h6 class="mb-3">To:</h6>
  <div>
  <strong>BBBootstrap.com</strong>
  </div>
  <div>42, Awesome Enclave</div>
  <div>New York City, New york, 10394</div>
  <div>Email: admin@bbbootstrap.com</div>
  <div>Phone: +48 123 456 789</div>
  </div>
  
  <div class="col-sm-4">
  <h6 class="mb-3">Details:</h6>
  <div>Invoice
  <strong>#BBB-10010110101938</strong>
  </div>
  <div>April 30, 2019</div>
  <div>VAT: NYC09090390</div>
  <div>Account Name: BBBootstrap Inc</div>
  <div>
  <strong>SWIFT code: 99 8888 7777 6666 5555</strong>
  </div>
  </div>
  
  </div>
  
  <div class="table-responsive-sm">
  <table class="table table-striped">
  <thead>
  <tr>
  <th class="center">#</th>
  <th>Item</th>
  <th>Description</th>
  <th class="center">Quantity</th>
  <th class="right">Unit Cost</th>
  <th class="right">Total</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td class="center">1</td>
  <td class="left">Iphone 10</td>
  <td class="left">Apple iphoe 10 with extended warranty</td>
  <td class="center">16</td>
  <td class="right">$999,00</td>
  <td class="right">$999,00</td>
  </tr>
  <tr>
  <td class="center">2</td>
  <td class="left">Samsung S6</td>
  <td class="left">Samsung S6 with extended warranty</td>
  <td class="center">20</td>
  <td class="right">$150,00</td>
  <td class="right">$3.000,00</td>
  </tr>
  
  </tbody>
  </table>
  </div>
  <div class="row">
  <div class="col-lg-4 col-sm-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</div>
  <div class="col-lg-4 col-sm-5 ml-auto">
  <table class="table table-clear">
  <tbody>
  <tr>
  <td class="left">
  <strong>Subtotal</strong>
  </td>
  <td class="right">$8.497,00</td>
  </tr>
  <tr>
  <td class="left">
  <strong>Discount (20%)</strong>
  </td>
  <td class="right">$1,699,40</td>
  </tr>
  <tr>
  <td class="left">
  <strong>VAT (10%)</strong>
  </td>
  <td class="right">$679,76</td>
  </tr>
  <tr>
  <td class="left">
  <strong>Total</strong>
  </td>
  <td class="right">
  <strong>$7.477,36</strong>
  </td>
  </tr>
  </tbody>
  </table>
  <a class="btn btn-success" href="#" data-abc="true">
  <i class="fa fa-usd"></i> Proceed to Payment</a>
  </div>
  </div>
  </div>
  </div>
  </div></div>
  </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>
        
        `
}