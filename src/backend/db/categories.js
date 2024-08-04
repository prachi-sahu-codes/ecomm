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
      "Discover our collection of stylish sofas that offer the perfect blend of aesthetics and relaxation.",
  },
  {
    _id: uuid(),
    categoryName: "Table",
    image: "https://i.imgur.com/mNIJKvV.jpg",
    description:
      "Enhance your living spaces with our versatile tables which is designed to add a touch of elegance.",
  },
  {
    _id: uuid(),
    categoryName: "Chair",
    image: "https://i.imgur.com/FtXBOeL.png",
    description:
      "Our chairs combine functionality with exquisite design to create a cozy seating area in your room.",
  },
  {
    _id: uuid(),
    categoryName: "Bed",
    image: "https://i.imgur.com/sT4i2Ch.png",
    description:
      "Experience ultimate comfort and relaxation. Choose styles to create a serene and inviting bedroom retreat.",
  },
];
