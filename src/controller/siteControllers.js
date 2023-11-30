class siteControllers {
  // [GET] home page
  index = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/'
    });
  };

  // [GET] dashboard
  dashboard = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/dashboard'
    });
  };

  // [GET] orders
  orders = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/orders'
    });
  };

  // [GET] create-orders
  createOrders = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/create-orders'
    });
  };

  // [GET] product
  product = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/product'
    });
  };

  // [GET] create-products
  createProduct = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/create-products'
    });
  };

  // [GET] customer
  customer = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/customer'
    });
  };

  // [GET] input
  input = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/input'
    });
  };

  // [GET] create-input
  createInput = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/create-input'
    });
  };

  // [GET] inventory
  inventory = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/inventory'
    });
  };

  // [GET] revenue
  revenue = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/revenue'
    });
  };

  // [GET] profit
  profit = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/profit'
    });
  };

  // [GET] setting
  setting = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/setting'
    });
  };

  // [GET] pos
  pos = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/pos'
    });
  };

  // [GET] account
  account = (req, res) => {
    return res.render('pages/index.ejs', {
      page_layout: '/account'
    });
  };

  // [GET] login
  login = (req, res) => {
    return res.render('pages/login.ejs');
  };
}

module.exports = new siteControllers();
