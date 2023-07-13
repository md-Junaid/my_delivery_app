import { faAppleWhole, faCarrot, faSoap, faWineBottle } from "@fortawesome/free-solid-svg-icons";

class Category {
  constructor(id, title, icon) {
    this.id = id;
    this.title = title;
    this.icon = icon;
  }
}

class Product {
  constructor(id, categoryIds, title, price, inStock, imageUrl) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.price = price;
    this.inStock = inStock;
    this.imageUrl = imageUrl;
  }
}

export const CATEGORIES = [
  new Category('c1', 'Fruits', faAppleWhole),
  new Category('c2', 'Vegetables', faCarrot),
  new Category('c3', 'Beverages', faWineBottle),
  new Category('c4', 'Self Care', faSoap)
];

export const PRODUCTS = [
  new Product('p1', ['c1', 'c2'], 'Avacados /kg', 10.99, 'Not Available', 'https://images.freeimages.com/images/large-previews/224/avocados-1511987.jpg'),
  new Product('p2', ['c1'], 'Apples /kg', 10.99, 'Few items left', 'https://m.media-amazon.com/images/I/41rxbtVd7jL._AC_.jpg'),
  new Product('p3', ['c1'], 'Mangos /kg', 10.99, 'Available', 'https://images.freeimages.com/images/large-previews/0cd/mango-1327290.jpg'),
  new Product('p4', ['c2'], 'Potatos /kg', 10.99, 'Available', 'https://images.freeimages.com/images/large-previews/ee6/patatas-1-1576320.jpg'),
  new Product('p4', ['c2'], 'Carrots /kg', 10.99, 'Not Available', 'https://images.freeimages.com/images/large-previews/4d3/carrots-1326182.jpg'),
  new Product('p5', ['c3'], 'Carlsberg', 1.99, 'Available', 'https://s3.eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2015/09/22-1002x708.jpg'),
  new Product('p6', ['c3'], 'Jack Daniels', 18.99, 'Few items left', 'https://gzhls.at/i/02/90/1290290-l0.jpg'),
  new Product('p7', ['c4'], 'AXE Chocolate Perfume', 3.99, 'Available','https://nepalgramodhyog.store/images/products/axe%20dark%20temptation%20150ml.jpg'),
  new Product('p8', ['c4'], 'Nivia Face Wash', 1.99, 'Few items available', 'https://m.media-amazon.com/images/I/61LmABL6JKL.jpg'),
];