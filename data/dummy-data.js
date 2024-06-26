import { faAppleWhole, faCarrot, faSoap, faWineBottle, faShirt, faComputer, faBook, faLeaf, faCouch, faBasketball } from "@fortawesome/free-solid-svg-icons";

class Category {
  constructor(id, title, icon) {
    this.id = id;
    this.title = title;
    this.icon = icon;
  }
}

class Product {
  constructor(id, categoryIds, title, price, inStock, imageUrl, storeLogo) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.price = price;
    this.inStock = inStock;
    this.imageUrl = imageUrl;
    this.storeLogo = storeLogo
  }
}

export const CATEGORIES = [
  new Category('c1', 'Groceries', faCarrot),
  new Category('c2', 'Clothing', faShirt),
  new Category('c3', 'Electronics', faComputer),
  new Category('c4', 'Self Care', faSoap),
  new Category('c5', 'Books', faBook),
  new Category('c6', 'Furniture', faCouch),
  new Category('c7', 'Garden', faLeaf),
  new Category('c8', 'Sports', faBasketball),
];

export const PRODUCTS = [
  new Product('p1', ['c1'], 'Bio Äthiopien - 2 kg Ganze Bohne', 35.96, 'Available', 'https://img.rewe-static.de/8801728/42892161_digital-image.png?impolicy=s-products&imwidth=928&output-format=image/webp', 'https://bakelietkaffee.de/wp-content/uploads/2022/05/Mail_Header-Logo-1-e1530649712669.png'),
  new Product('p11', ['c1'], 'Kaffee Gourme - 1kg Ganze Bohne', 16.96, 'Available', 'https://www.lebensbaum.com/media/92/36/7a/1692606336/4561_Gourmet_Kaffee_1000g_RGB_948x1066.png', 'https://static.wixstatic.com/media/7daa92_39f87d5506764ccca34e2cff5a0f71d6~mv2.png/v1/fill/w_448,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7daa92_39f87d5506764ccca34e2cff5a0f71d6~mv2.png'),
  new Product('p12', ['c1'], 'Premium Bio Kaffeebohnen 1kg', 14.99, 'Few left', 'https://m.media-amazon.com/images/I/51R3uy2ag0L._SX300_SY300_QL70_ML2_.jpg', 'https://jimdo-storage.freetls.fastly.net/image/204597934/529f2805-1aac-49ab-aa4a-3aa6f49f646d.png?quality=80,90&auto=webp&disable=upscale&width=800&height=260&trim=0,0,0,0'),
  new Product('p13', ['c1'], 'Kaffee, Caffè Crema - 500g ganze Bohne', 7.50, 'Not Available', 'https://media.dm-static.com/images/f_auto,q_auto,c_fit,h_440,w_500/v1708338516/products/pim/4058172684159-2553296/dmbio-kaffee-caffe-crema-ganze-bohne', 'https://coffee-house.cupcino.com/wp-content/uploads/2015/09/Logo_CupCino_sticky.png'),
  new Product('p2', ['c1'], 'FREIXENET Mia Vino de España', 3.99, 'Few left', 'https://vinyard.com/2528-home_default/freixenet-mia-red-750-ml.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
  new Product('p14', ['c1'], 'DINZLER Bio Espresso Peru 500g', 10.90, 'Few left', 'https://www.dinzler.de/shop/thumbnail/19/72/73/1686806371/100191_SP_1920x1920.jpg', 'https://coffee-house.cupcino.com/wp-content/uploads/2015/09/Logo_CupCino_sticky.png'),
  new Product('p3', ['c1'], 'Avacados /kg', 10.99, 'Not Available', 'https://images.freeimages.com/images/large-previews/224/avocados-1511987.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
  new Product('p4', ['c1'], 'Apples /kg', 10.99, 'Few left', 'https://m.media-amazon.com/images/I/41rxbtVd7jL._AC_.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
  new Product('p5', ['c1'], 'Mangos /kg', 10.99, 'Available', 'https://images.freeimages.com/images/large-previews/0cd/mango-1327290.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
  new Product('p6', ['c1'], 'Potatos /kg', 10.99, 'Available', 'https://images.freeimages.com/images/large-previews/ee6/patatas-1-1576320.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
  new Product('p7', ['c1'], 'Carrots /kg', 10.99, 'Not Available', 'https://images.freeimages.com/images/large-previews/4d3/carrots-1326182.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
  new Product('p8', ['c1'], 'Carlsberg', 1.99, 'Available', 'https://s3.eu-central-1.amazonaws.com/centaur-wp/designweek/prod/content/uploads/2015/09/22-1002x708.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
  new Product('p9', ['c4'], 'AXE Chocolate Perfume', 3.99, 'Available','https://nepalgramodhyog.store/images/products/axe%20dark%20temptation%20150ml.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
  new Product('p10', ['c4'], 'Nivia Face Wash', 10.99, 'Few available', 'https://m.media-amazon.com/images/I/61LmABL6JKL.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo_REWE.svg/2560px-Logo_REWE.svg.png'),
];

export const risottoRecipe = `Certainly! Here's a simple recipe for a classic mushroom risotto:

Ingredients:
1 cup Arborio rice
1/2 cup dry white wine
4 cups chicken or vegetable broth, kept warm
1 cup sliced mushrooms (such as cremini or shiitake)
1/2 cup finely chopped onion
2 cloves garlic, minced
2 tablespoons olive oil
2 tablespoons unsalted butter
1/2 cup grated Parmesan cheese
Salt and pepper to taste
Fresh parsley, chopped (for garnish)


Instructions:
1. Heat the olive oil and 1 tablespoon of butter in a large pan over medium heat. Add the chopped onion and sauté until translucent.

2. Add the minced garlic and sliced mushrooms to the pan. Cook until the mushrooms are tender and any liquid released has evaporated.

3. Stir in the Arborio rice and cook for 1-2 minutes, allowing the rice to toast slightly.

4. Pour in the white wine and stir until it's mostly absorbed by the rice.

5. Begin adding the warm broth, one ladle at a time, stirring frequently. Wait until the liquid is mostly absorbed before adding the next ladle of broth. Continue this process until the rice is creamy and cooked to al dente, which should take about 18-20 minutes.

6. Stir in the remaining tablespoon of butter and the grated Parmesan cheese. Season with salt and pepper to taste.

7. Remove the risotto from heat and let it rest for a minute or two.

8. Serve the mushroom risotto hot, garnished with fresh chopped parsley.

Enjoy your delicious homemade mushroom risotto!
`

export const chickenPaellaRecipe = `Certainly! Here's a simple recipe for Spanish Chicken Paella:

Ingredients:
1 1/2 cups paella rice (such as Bomba or Arborio)
1 lb (about 500g) chicken thighs, bone-in and skin-on, cut into bite-sized pieces
1/2 lb (about 250g) chorizo sausage, sliced
1 onion, finely chopped
2 tomatoes, diced
1 red bell pepper, sliced
1 green bell pepper, sliced
3 cloves garlic, minced
1 teaspoon smoked paprika
1/2 teaspoon saffron threads
1 teaspoon dried oregano
4 cups chicken broth, hot
1/2 cup frozen peas
Salt and pepper to taste
Lemon wedges for serving


Instructions:
1. In a paella pan or a wide, shallow skillet, heat some olive oil over medium-high heat. Add the chicken pieces and chorizo slices. Brown them on all sides, then remove and set aside.

2. In the same pan, add a bit more olive oil if needed. Add the chopped onion and sauté until softened.

3. Stir in the minced garlic, diced tomatoes, and sliced bell peppers. Cook for a few minutes until the vegetables start to soften.

4. Add the paella rice to the pan, stirring to coat it with the vegetables and oil.

5. Sprinkle the smoked paprika, saffron threads, and dried oregano over the rice. Stir to combine.

6. Pour in the hot chicken broth, stirring gently. Add the browned chicken and chorizo back into the pan. Season with salt and pepper to taste.

7. Bring the mixture to a boil, then reduce the heat to low and let it simmer for about 15-20 minutes, or until the rice is cooked and has absorbed most of the liquid. Avoid stirring too much during this time to allow the formation of the coveted socarrat, a crispy layer of rice at the bottom of the pan.

8. In the last 5 minutes of cooking, scatter the frozen peas over the top.

9. Once the rice is cooked, remove the pan from heat and let it rest for a few minutes.

10. Serve the Spanish Chicken Paella hot, garnished with lemon wedges.

Enjoy your flavorful Spanish meal!
`

export const pizzaRecipe = `Certainly! Here's a simple recipe for making a classic Margherita Pizza:

Ingredients:
Pizza dough (store-bought or homemade)
1/2 cup pizza sauce
1 1/2 cups fresh mozzarella cheese, sliced or torn into small pieces
Fresh basil leaves
2 tablespoons extra-virgin olive oil
Salt and pepper to taste


Instructions:
1. Preheat your oven to the highest temperature it can go (usually around 475-500°F or 245-260°C).

2. Roll out the pizza dough on a floured surface to your desired thickness. If you prefer a thin crust, roll it out thinner.

3. Transfer the rolled-out dough to a pizza stone or a baking sheet lined with parchment paper.

4. Spread an even layer of pizza sauce over the dough, leaving a small border around the edges for the crust.

5. Place slices or torn pieces of fresh mozzarella evenly over the sauce.

6. Tear fresh basil leaves and distribute them over the pizza.

7. Drizzle extra-virgin olive oil over the top and sprinkle with salt and pepper to taste.

8. Carefully transfer the pizza to the preheated oven and bake for about 10-15 minutes, or until the crust is golden and the cheese is bubbly and slightly browned.

9. Remove the pizza from the oven and let it cool for a minute or two.

10. Slice and serve your delicious homemade Margherita Pizza!

Feel free to customize the toppings to your liking or experiment with different cheeses and sauces. Enjoy your homemade pizza!
`