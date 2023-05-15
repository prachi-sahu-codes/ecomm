import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Isadora Bed",
    description:
      "Inspired by the Isadora Dining Chair, that has become one of the public’s favorite pieces from the Studiopepe collection with Essential Home, the Isadora Bed is here to elevate and transform your bedroom décor. This bed achieves elegance through its design featuring a soft touch boucle textile throughout and minimalistic brass details to complement the look.",
    price: 11599.99,
    category: "Bed",
    dimensions: {
      width: "80.7 inches",
      height: "19.7 inches",
      length: "104.3 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/isadora-i-bed/isadora-i-bed-1.png",
    rating: 4.0,
    reviewsCount: "15k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning bed, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Hellow",
        text: "I love this bed! It is so comfortable and the design is very elegant.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Franco Bed",
    description:
      "A true display of handskill, this bed’s immense headboard is a testament to craftsmanship.With Polished Brass, Varnished Walnut, Straw and Leds on the sides of the headboard.",
    price: 12499.99,
    category: "Bed",
    dimensions: {
      width: "80.7 inches",
      height: "19.7 inches",
      length: "104.3 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/franco-bed-qv.png",
    rating: 5.0,
    reviewsCount: "25k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "The bed is okay, but the quality could be better. It feels a bit flimsy.",
        rating: 4,
      },
      {
        author: "Emily Green",
        text: "I love this bed! It is so comfortable and the design is very elegant.",
        rating: 5,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Hadley Dining Chair",
    description:
      "Get inspired by the color palette of the 1930s midcentury style with this versatile dining chair that engages the eye with a trendy orange velvet seat. Comfortable and timeless, this dining chair makes the most of the square lines of the midcentury modern design in its wooden legs. Curved lines in the back make it modern, but it screams vintage in the overall design.",
    price: 199.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/hadley-side-dining-chair/hadley-side-dining-chair-1.png",
    rating: 5.0,
    reviewsCount: "1.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning chair, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "This chair is perfect for my home office. It is comfortable and looks great.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Loren Sofa",
    description:
      "This elegant sofa features a sleek design with a button-tufted back and solid wood legs. Upholstered in high-quality fabric.",
    price: 899.99,
    category: "Sofa",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/loren-sofa-qv.png",
    rating: 4.5,
    reviewsCount: "6.5k",
    reviews: [
      {
        author: "John Doe",
        text: "Great sofa, very comfortable and stylish.",
        rating: 5,
      },
      {
        author: "Jane Smith",
        text: "The color is not exactly as shown in the picture, but still a nice sofa.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Doris Sofa",
    description:
      "This elegant sofa features a sleek design with a button-tufted back and solid wood legs. Upholstered in high-quality fabric.",
    price: 899.99,
    category: "Sofa",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/doris-sofa/doris-sofa-1.png",
    rating: 4.5,
    reviewsCount: "3.5k",
    reviews: [
      {
        author: "John Doe",
        text: "Great sofa, very comfortable and stylish.",
        rating: 5,
      },
      {
        author: "Jane Smith",
        text: "The color is not exactly as shown in the picture, but still a nice sofa.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Mansfield Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 4699.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/mansfield-sofa-qv.png",
    rating: 1.0,
    reviewsCount: "1.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa, but could have been better.",
        rating: 1,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected.",
        rating: 1,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Maxime Dining Table",
    description:
      "This elegant sofa features a sleek design with a button-tufted back and solid wood legs. Upholstered in high-quality fabric.",
    price: 899.99,
    category: "Table",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/casegoods/maxime-dining-table-qv.png",
    rating: 4.5,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "John Doe",
        text: "The table is sturdy and looks great in my dining room. I would highly recommend it.",
        rating: 5,
      },
      {
        author: "Jane Smith",
        text: "The color is not exactly as shown in the picture, but still a nice table.",
        rating: 4,
      },
    ],
  },

  {
    _id: uuid(),
    name: "Sophia Sectional Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 299.99,
    category: "Sofa",
    dimensions: {
      width: "36 inches",
      height: "18 inches",
      length: "24 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/sophia-sectional-sofa.png",
    rating: 4.0,
    reviewsCount: "6.5k",
    reviews: [
      {
        author: "Mark Johnson",
        text: "This sofa is amazing! It is so comfortable and looks beautiful in my living room.",
        rating: 3,
      },
      {
        author: "Samantha Lee",
        text: "Very easy to assemble, and looks even better in person.",
        rating: 5,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Novak Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 1499.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/novak-sofa/novak-sofa-1.png",
    rating: 5.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Marco Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 2099.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/marco-sofa-qv.png",
    rating: 3.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Curtis Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 1499.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/curtis-sofa/curtis-sofa-1.png",
    rating: 2.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Great craftsmanship but could have been better.",
        rating: 1,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected.",
        rating: 2,
      },
    ],
  },

  {
    _id: uuid(),
    name: "Romero Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 1299.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/romero-sofa/romero-sofa-1.png",
    rating: 1.0,
    reviewsCount: "3.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa, great craftsmanship.",
        rating: 1,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected, but still fits perfectly in my dining room.",
        rating: 2,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Dandridge Sofa",
    description:
      "This mid-century inspired single sofa proves that the curved lines in the furniture trend are here to stay.",
    price: 1499.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/dandridge-sofa/dandridge-sofa-1.png",
    rating: 5.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Pierre Single Sofa",
    description:
      "This mid-century inspired single sofa proves that the curved lines in the furniture trend are here to stay.",
    price: 10299.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      length: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/pierre-single-sofa.png",
    rating: 5.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Apollo Single Sofa",
    description:
      "This space-age aesthetics armchair pairs perfectly with its sister product, the Apollo sofa. This space-age aesthetics armchair pairs perfectly with its sister product, the Apollo sofa.",
    price: 1899.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/apollo-single-sofa.png",
    rating: 5.0,
    reviewsCount: "8.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Gable Single Sofa",
    description:
      "This space-age aesthetics armchair pairs perfectly with its sister product. This space-age aesthetics armchair pairs perfectly with its sister product.",
    price: 1699.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/gable-single-sofa/gable-single-sofa-3.png",
    rating: 5.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 4,
      },
    ],
  },

  {
    _id: uuid(),
    name: "Sidney Dining Table",
    description:
      "Get inspired by the color palette of the 1930s midcentury style with this versatile dining table that engages the eye with a trendy orange velvet seat. Comfortable and timeless, this dining table makes the most of the square lines of the midcentury modern design in its wooden legs. Curved lines in the back make it modern, but it screams vintage in the overall design.",
    price: 1499.99,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/casegoods/sidney-dining-table/sidney-dining-table-1.png",
    rating: 5.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning table, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The table is a bit bigger than I expected, but still fits perfectly in my dining room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Isadora II Bed",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 12499.99,
    category: "Bed",
    dimensions: {
      width: "31,50 inches",
      height: "59,06 inches",
      length: "121,26 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/isadora-ii-bed/isadora-ii-bed-1.png",
    rating: 5.0,
    reviewsCount: "14.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning bed, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The bed is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Minelli Bed",
    description:
      "A mid-century style bed that is perfect for a bedroom ambience that is both sober and sophisticated.",
    price: 11499.99,
    category: "Bed",
    dimensions: {
      width: "31.50 inches",
      height: "59.06 inches",
      length: "121.26 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/minelli-bed/minelli-bed-1.png",
    rating: 5.0,
    reviewsCount: "42.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning bed, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The bed is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Wormley Dining Table",
    description:
      "Get inspired by the color palette of the 1930s midcentury style with this versatile dining table that engages the eye with a trendy orange velvet seat. Comfortable and timeless, this dining table makes the most of the square lines of the midcentury modern design in its wooden legs. Curved lines in the back make it modern, but it screams vintage in the overall design.",
    price: 5999.99,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/casegoods/wormley-dining-table-qv.png",
    rating: 5.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning table, great craftsmanship.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The table is a bit bigger than I expected, but still fits perfectly in my dining room.",
        rating: 4,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Ezra Dining Table",
    description:
      "The Ezra Dining Table might be one of the most unique pieces in Studiopepe’s collection for Essential Home. Inspired by the beautiful Italian architecture scenario, the modern dining table was drawn from a combination of straight curvilinear lines redeﬁning the limits of physics. Ezra opens the world’s design horizon with its solid wooden structure enlightened with some polished brass details, perfect to embellish any modern space.",
    price: 1100,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/casegoods/ezra-dining-table/ezra-dining-table-1.png",
    rating: 2.0,
    reviewsCount: "4.5k",
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning table, great craftsmanship but could have been better.",
        rating: 5,
      },
      {
        author: "Emily Green",
        text: "The table is a bit bigger than I expected.",
        rating: 4,
      },
    ],
  },
];
