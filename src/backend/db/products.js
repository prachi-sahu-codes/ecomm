import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Loren Sofa",
    description:
      "This elegant sofa features a sleek design with a button-tufted back and solid wood legs. Upholstered in high-quality fabric.",
    price: 899.99,
    category: "Sofa",
    color: "Blue",
    material: "Fabric",
    dimensions: {
      width: "80 inches",
      depth: "33 inches",
      height: "32 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/loren-sofa-qv.png",
    rating: 4.5,
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
    color: "Blue",
    material: "Fabric",
    dimensions: {
      width: "80 inches",
      depth: "33 inches",
      height: "32 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/doris-sofa/doris-sofa-1.png",
    rating: 4.5,
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
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 4699.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/mansfield-sofa-qv.png",
    rating: 5.0,
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
    name: "Sophia Sectional Sofa",
    description:
      "This minimalist coffee table features a tempered glass top and a sturdy metal frame. Perfect for small living rooms.",
    price: 299.99,
    category: "Sofa",
    color: "Clear",
    material: "Glass",
    dimensions: {
      width: "36 inches",
      depth: "24 inches",
      height: "18 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/sophia-sectional-sofa.png",
    rating: 4.0,
    reviews: [
      {
        author: "Mark Johnson",
        text: "The table looks great, but the glass is a bit thin.",
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
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 1499.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/novak-sofa/novak-sofa-1.png",
    rating: 5.0,
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
    name: "Marco Sofa",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 2099.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/marco-sofa-qv.png",
    rating: 5.0,
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
    name: "Curtis Sofa",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 1499.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/curtis-sofa/curtis-sofa-1.png",
    rating: 5.0,
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
    name: "Romero Sofa",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 1299.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/romero-sofa/romero-sofa-1.png",
    rating: 5.0,
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
    name: "Dandridge Sofa",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 1499.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/dandridge-sofa/dandridge-sofa-1.png",
    rating: 5.0,
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
    name: "Pierre Single Sofa",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 10299.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/pierre-single-sofa.png",
    rating: 5.0,
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
    name: "Apollo Single Sofa",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 1899.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/apollo-single-sofa.png",
    rating: 5.0,
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
    name: "Gable Single Sofa",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 1699.99,
    category: "Sofa",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/gable-single-sofa/gable-single-sofa-3.png",
    rating: 5.0,
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
    name: "Isadora Bed",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 1599.99,
    category: "Bed",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "96 inches",
      depth: "42 inches",
      length: "104.3 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/isadora-i-bed/isadora-i-bed-1.png",
    rating: 4.0,
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
    name: "Franco Bed",
    description:
      "This beautiful dining table is made of solid wood and features a natural finish. Seats up to 8 people.",
    price: 1499.99,
    category: "Bed",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "31,50 inches",
      height: "59,06 inches",
      length: "121,26 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/franco-bed-qv.png",
    rating: 5.0,
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
    name: "Hadley Side Dining Chair",
    description:
      "Get inspired by the color palette of the 1930s midcentury style with this versatile dining chair that engages the eye with a trendy orange velvet seat. Comfortable and timeless, this dining chair makes the most of the square lines of the midcentury modern design in its wooden legs. Curved lines in the back make it modern, but it screams vintage in the overall design.",
    price: 199.99,
    category: "Chair",
    color: "Natural",
    material: "Wood",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/hadley-side-dining-chair/hadley-side-dining-chair-1.png",
    rating: 5.0,
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
    name: "Sidney Dining Table",
    description:
      "Get inspired by the color palette of the 1930s midcentury style with this versatile dining chair that engages the eye with a trendy orange velvet seat. Comfortable and timeless, this dining chair makes the most of the square lines of the midcentury modern design in its wooden legs. Curved lines in the back make it modern, but it screams vintage in the overall design.",
    price: 1499.99,
    category: "Table",
    color: "Black",
    material: "Ceramic",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/casegoods/sidney-dining-table/sidney-dining-table-1.png",
    rating: 5.0,
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
];
