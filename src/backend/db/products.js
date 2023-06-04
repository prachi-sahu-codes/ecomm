import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    name: "Gable Dining Chair",
    description:
      "Part of a larger design collection for the living room but it can also be used as a side chair. Its curved low back has some stitched seam accents that give it a stylish look. It features a round polished brass swivel base that contrasts with the dreamy cotton velvet.",
    price: 18499.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/gable-dining-chair/gable-dining-chair-1.png",
    rating: 2.0,
    ratingHike: "10",
    reviewsCount: "1.5k",
    sales: 2000,
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning chair, great craftsmanship.",
        rating: 2,
      },
      {
        author: "Emily Green",
        text: "This chair is perfect for my home office. It is comfortable and looks great.",
        rating: 1,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Isadora Bed",
    description:
      "Inspired by the Isadora Dining Chair, that has become one of the public's favorite pieces from the Studiopepe collection with Essential Home, the Isadora Bed is here to elevate and transform your bedroom décor. This bed achieves elegance through its design featuring a soft touch boucle textile throughout and minimalistic brass details to complement the look.",
    price: 30499.99,
    category: "Bed",
    dimensions: {
      width: "80.7 inches",
      height: "19.7 inches",
      length: "104.3 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/isadora-i-bed/isadora-i-bed-1.png",
    rating: 5.0,
    ratingHike: "60",
    reviewsCount: "15k",
    sales: 20000,
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
    name: "Apollo Single Sofa",
    description:
      "This space-age aesthetics armchair pairs perfectly with its sister product, the Apollo sofa. This space-age aesthetics armchair pairs perfectly with its sister product, the Apollo sofa.",
    price: 8899.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/apollo-single-sofa.png",
    rating: 3.0,
    ratingHike: "80",
    reviewsCount: "8.5k",
    sales: 9000,
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
    name: "Mansfield Dining Chair",
    description:
      "Dining has never been so stylish! a functional chair and an accent one. It is supported in a round polished brass base and then finished in velvet all along its iconic low-slung and crescent body. A soft dining chair that will be the delight of all your guests when you invite them over for a feast.",
    price: 6099.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/mansfield-dining-chair-qv.png",
    rating: 5.0,
    ratingHike: "15",
    reviewsCount: "1.5k",
    sales: 2000,
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
    ratingHike: "18",
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
    name: "Isadora Dining Chair",
    description:
      "If you’re looking for an artistic furniture piece to match your luxury design project with its own artistic personality, Isadora is the one. The upholstered dining chair by the Italian designers of Studiopepe is characterized by asymmetrical design, embellished with brass details. This bespoke dining chair combines the best of luxury design with a modern twist, exactly what you need to bring an exquisite touch to your home décor.",
    price: 10990.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/isadora-dining-chair/isadora-dining-chair-1.png",
    rating: 5.0,
    ratingHike: "23",
    reviewsCount: "1.5k",
    sales: 2000,
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
    name: "Collins Dining Chair",
    description:
      "Designed with a classic retro chic feel, comfortable and perfect to pair with a circular dining table. Finely upholstered in velvet, welted stitches on the seat and a stylish degree reclining on the crescent open back. It features a perfectly curved back, supported by tapered glossy black legs with rich accents of polished brass.",
    price: 7199.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/collins-dining-chair/collins-dining-chair-1.png",
    rating: 5.0,
    ratingHike: "45",
    reviewsCount: "1.5k",
    sales: 1800,
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
    price: 30899.99,
    category: "Sofa",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/loren-sofa-qv.png",
    rating: 4.5,
    ratingHike: "17",
    reviewsCount: "6.5k",
    sales: 6900,
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
    name: "Hadley Dining Chair",
    description:
      "Get inspired by the color palette of the 1930s midcentury style with this versatile dining chair that engages the eye with a trendy orange velvet seat. Comfortable and timeless, this dining chair makes the most of the square lines of the midcentury modern design in its wooden legs. Curved lines in the back make it modern, but it screams vintage in the overall design.",
    price: 9198.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/hadley-dining-chair/hadley-dining-chair-1.png",
    rating: 5.0,
    ratingHike: "18",
    reviewsCount: "1.5k",
    sales: 1650,
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
    name: "Doris Sofa",
    description:
      "This elegant sofa features a sleek design with a button-tufted back and solid wood legs. Upholstered in high-quality fabric.",
    price: 5899.99,
    category: "Sofa",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/doris-sofa/doris-sofa-1.png",
    rating: 4.5,
    ratingHike: "5121",
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
    name: "Roxy Dining Chair",
    description:
      "he glam rock band Roxy Music is one of Draga's favorites and Roxanne by The Police is a song she loves. As well as the club, Symbol of the London punk scene in the late Seventies, the Roxy provided a platform for bands such as The Clash, The Police, and Siouxsie and the Banshees that made the history of music. Those eclectic vibes inspired the creative process behind the Roxy dining chair, a sleek furniture piece that can suit any project style.",
    price: 17299.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/roxy-dining-chair/roxy-dining-chair-1.png",
    rating: 5.0,
    ratingHike: "51",
    reviewsCount: "81.5k",
    sales: 81650,
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
    name: "Mansfield Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 14699.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/mansfield-sofa-qv.png",
    rating: 2.0,
    ratingHike: "15",
    reviewsCount: "1.5k",
    sales: 1701,
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
    price: 7899.99,
    category: "Table",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/casegoods/maxime-dining-table-qv.png",
    rating: 4.5,
    ratingHike: "8",
    reviewsCount: "4.5k",
    sales: 5500,
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
    price: 28299.99,
    category: "Sofa",
    dimensions: {
      width: "36 inches",
      height: "18 inches",
      length: "24 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/sophia-sectional-sofa.png",
    rating: 4.0,
    ratingHike: "11",
    reviewsCount: "6.5k",
    sales: 6800,
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
    price: 21499.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/novak-sofa/novak-sofa-1.png",
    rating: 1.0,
    ratingHike: "19",
    reviewsCount: "4.5k",
    sales: 4800,
    reviews: [
      {
        author: "Tom Wilson",
        text: "Absolutely stunning sofa but could have been better.",
        rating: 1,
      },
      {
        author: "Emily Green",
        text: "The sofa is a bit bigger than I expected, but still fits perfectly in my room.",
        rating: 2,
      },
    ],
  },
  {
    _id: uuid(),
    name: "Marco Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 24099.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/marco-sofa-qv.png",
    rating: 3.0,
    ratingHike: "20",
    reviewsCount: "14.5k",
    sales: 15000,
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
    price: 13499.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/curtis-sofa/curtis-sofa-1.png",
    rating: 2.0,
    ratingHike: "60",
    reviewsCount: "49.5k",
    sales: 50000,
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
    name: "Russle Dining Chair",
    description:
      "Part of a larger design collection for the living room but it can also be used as a side chair. Its curved low back has some stitched seam accents that give it a stylish look. It features a round polished brass swivel base that contrasts with the dreamy cotton velvet.",
    price: 15099.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/russel-dining-chair/russel-dining-chair-1.png",
    rating: 5.0,
    ratingHike: "54",
    reviewsCount: "12.5k",
    sales: 13000,
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
    name: "Romero Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 11299.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/romero-sofa/romero-sofa-1.png",
    rating: 3.0,
    ratingHike: "12",
    reviewsCount: "23.5k",
    sales: 24000,
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
    name: "Dandridgel Sofa",
    description:
      "This mid-century inspired single sofa proves that the curved lines in the furniture trend are here to stay.",
    price: 14099.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/dandridge-sofa/dandridge-sofa-1.png",
    rating: 5.0,
    ratingHike: "35",
    reviewsCount: "42.5k",
    sales: 23000,
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
    ratingHike: "32",
    reviewsCount: "20.5k",
    sales: 21000,
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
    price: 38699.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/gable-single-sofa/gable-single-sofa-3.png",
    rating: 5.0,
    ratingHike: "61",
    reviewsCount: "62.5k",
    sales: 63000,
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
    price: 9499.99,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/casegoods/sidney-dining-table/sidney-dining-table-1.png",
    rating: 5.0,
    ratingHike: "13",
    reviewsCount: "9.5k",
    sales: 10000,
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
    price: 32499.99,
    category: "Bed",
    dimensions: {
      width: "31,50 inches",
      height: "59,06 inches",
      length: "121,26 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/isadora-ii-bed/isadora-ii-bed-1.png",
    rating: 5.0,
    ratingHike: "33",
    reviewsCount: "12.5k",
    sales: 14000,
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
    price: 37499.99,
    category: "Bed",
    dimensions: {
      width: "31.50 inches",
      height: "59.06 inches",
      length: "121.26 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/minelli-bed/minelli-bed-1.png",
    rating: 5.0,
    ratingHike: "34",
    reviewsCount: "42.5k",
    sales: 4000,
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
    price: 25999.99,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/casegoods/wormley-dining-table-qv.png",
    rating: 5.0,
    ratingHike: "41",
    reviewsCount: "5k",
    sales: 7520,
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
    price: 35100,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/casegoods/ezra-dining-table/ezra-dining-table-1.png",
    rating: 2.0,
    ratingHike: "12",
    reviewsCount: "25k",
    sales: 26000,
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
  {
    _id: uuid(),
    name: "Isadora Bed",
    description:
      "Inspired by the Isadora Dining Chair, that has become one of the public's favorite pieces from the Studiopepe collection with Essential Home, the Isadora Bed is here to elevate and transform your bedroom décor. This bed achieves elegance through its design featuring a soft touch boucle textile throughout and minimalistic brass details to complement the look.",
    price: 16509.99,
    category: "Bed",
    dimensions: {
      width: "80.7 inches",
      height: "19.7 inches",
      length: "104.3 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/isadora-i-bed/isadora-i-bed-1.png",
    rating: 3.0,
    ratingHike: "14",
    reviewsCount: "15k",
    sales: 16000,
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
    price: 39499.99,
    category: "Bed",
    dimensions: {
      width: "80.7 inches",
      height: "19.7 inches",
      length: "104.3 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/franco-bed-qv.png",
    rating: 5.0,
    ratingHike: "54",
    reviewsCount: "25k",
    sales: 25900,
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
    price: 27099.99,
    category: "Chair",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/hadley-side-dining-chair/hadley-side-dining-chair-1.png",
    rating: 5.0,
    ratingHike: "10",
    reviewsCount: "1.5k",
    sales: 2020,
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
    price: 36000.99,
    category: "Sofa",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/loren-sofa-qv.png",
    rating: 4.5,
    ratingHike: "13",
    reviewsCount: "6.5k",
    sales: 7060,
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
    price: 23000.99,
    category: "Sofa",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/doris-sofa/doris-sofa-1.png",
    rating: 4.5,
    ratingHike: "26",
    reviewsCount: "33.5k",
    sales: 34000,
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
    price: 34699.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/mansfield-sofa-qv.png",
    rating: 1.0,
    ratingHike: "28",
    reviewsCount: "16.5k",
    sales: 17900,
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
    price: 36209.99,
    category: "Table",
    dimensions: {
      width: "80 inches",
      height: "32 inches",
      length: "33 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/casegoods/maxime-dining-table-qv.png",
    rating: 4.5,
    ratingHike: "15",
    reviewsCount: "4.5k",
    sales: 9850,
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
    price: 20299.99,
    category: "Sofa",
    dimensions: {
      width: "36 inches",
      height: "18 inches",
      length: "24 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/sophia-sectional-sofa.png",
    rating: 4.0,
    ratingHike: "34",
    reviewsCount: "6.5k",
    sales: 9040,
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
    name: "Novakel Sofa",
    description:
      "A contemporary mid-century modern style sofa featuring strong shapes and hard edges along with a rich velvet fabric.",
    price: 31499.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/novak-sofa/novak-sofa-1.png",
    rating: 5.0,
    ratingHike: "56",
    reviewsCount: "43.5k",
    sales: 59000,
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
    price: 22099.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/marco-sofa-qv.png",
    rating: 3.0,
    ratingHike: "10",
    reviewsCount: "4.5k",
    sales: 9900,
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
    price: 33499.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/curtis-sofa/curtis-sofa-1.png",
    rating: 2.0,
    ratingHike: "12",
    reviewsCount: "9.5k",
    sales: 9540,
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
    price: 23299.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/romero-sofa/romero-sofa-1.png",
    rating: 1.0,
    ratingHike: "10",
    reviewsCount: "3.5k",
    sales: 4250,
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
    price: 18999.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/dandridge-sofa/dandridge-sofa-1.png",
    rating: 5.0,
    ratingHike: "39",
    reviewsCount: "54.5k",
    sales: 59500,
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
    price: 19299.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      length: "42 inches",
      height: "30 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/pierre-single-sofa.png",
    rating: 5.0,
    ratingHike: "75",
    reviewsCount: "89.5k",
    sales: 90000,
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
    price: 26599.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/upholstery/apollo-single-sofa.png",
    rating: 5.0,
    ratingHike: "14",
    reviewsCount: "8.5k",
    sales: 9518,
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
    price: 19599.99,
    category: "Sofa",
    dimensions: {
      width: "96 inches",
      height: "30 inches",
      length: "42 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/gable-single-sofa/gable-single-sofa-3.png",
    rating: 5.0,
    ratingHike: "68",
    reviewsCount: "41.5k",
    sales: 23520,
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
    price: 29499.99,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/casegoods/sidney-dining-table/sidney-dining-table-1.png",
    rating: 5.0,
    ratingHike: "80",
    reviewsCount: "65k",
    sales: 67000,
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
    price: 21000.99,
    category: "Bed",
    dimensions: {
      width: "31,50 inches",
      height: "59,06 inches",
      length: "121,26 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/isadora-ii-bed/isadora-ii-bed-1.png",
    rating: 5.0,
    ratingHike: "24",
    reviewsCount: "11.5k",
    sales: 12020,
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
    price: 25199.99,
    category: "Bed",
    dimensions: {
      width: "31.50 inches",
      height: "59.06 inches",
      length: "121.26 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/upholstery/minelli-bed/minelli-bed-1.png",
    rating: 5.0,
    ratingHike: "40",
    reviewsCount: "42.5k",
    sales: 46020,
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
    price: 33999.99,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/thumbnails/casegoods/wormley-dining-table-qv.png",
    rating: 5.0,
    ratingHike: "16",
    reviewsCount: "14.5k",
    sales: 15600,
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
    name: "Ezran Dining Table",
    description:
      "The Ezran Dining Table might be one of the most unique pieces in Studiopepe’s collection for Essential Home. Inspired by the beautiful Italian architecture scenario, the modern dining table was drawn from a combination of straight curvilinear lines redeﬁning the limits of physics. Ezra opens the world’s design horizon with its solid wooden structure enlightened with some polished brass details, perfect to embellish any modern space.",
    price: 27800,
    category: "Table",
    dimensions: {
      width: "20.9 inches",
      height: "33.9 inches",
      length: "23.9 inches",
    },
    image:
      "https://essentialhome.eu/images/products/product-page/casegoods/ezra-dining-table/ezra-dining-table-1.png",
    rating: 3.0,
    ratingHike: "65",
    reviewsCount: "24.5k",
    sales: 28652,
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

//620th line
