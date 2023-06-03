import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Sofa",
    image: "https://i.imgur.com/uFc8sIH.png",
    description:
      "Discover our collection of stylish and comfortable sofas that offer the perfect blend of aesthetics and relaxation. From contemporary designs to classic styles, our sofas are crafted with premium materials to provide both comfort and durability.",
  },
  {
    _id: uuid(),
    categoryName: "Table",
    image: "https://i.imgur.com/KRm0EvR.png",
    description:
      "Enhance your living spaces with our versatile and beautifully crafted tables. From coffee tables to dining tables, our selection features a variety of sizes, shapes, and finishes. Each table is designed to add a touch of elegance and provide a practical surface for various purposes.",
  },
  {
    _id: uuid(),
    categoryName: "Chair",
    image: "https://i.imgur.com/e4LkZBz.png",
    description:
      "Browse through our range of chairs that combine functionality with exquisite design. Whether you're looking for accent chairs, dining chairs, or lounge chairs, we offer a variety of options to suit your preferences and create a cozy seating area in any room.",
  },
  {
    _id: uuid(),
    categoryName: "Bed",
    image: "https://i.imgur.com/sT4i2Ch.png",
    description:
      "Experience ultimate comfort and relaxation with our collection of beds. Choose from a range of sizes and styles, including platform beds, sleigh beds, and upholstered beds, to create a serene and inviting bedroom retreat.",
  },
];
