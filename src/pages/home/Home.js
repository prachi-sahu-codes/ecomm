import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import home from "../../backend/utils/images/home.jpg";
import dt from "../../backend/utils/images/dt.png";
import waran from "../../backend/utils/images/waran.png";
import quality from "../../backend/utils/images/quality.png";
import goal from "../../backend/utils/images/goal.png";
import { Footer } from "../../components/Footer";
import { useCatg } from "../../context/CategoryContext";
import { useData } from "../../context/ProductContext";
import { ProductCard } from "../../components/ProductCard";
import { ACTION_TYPE } from "../../backend/utils/actionType";

export const Home = () => {
  const { data, dispatch } = useData();
  const { categories } = useCatg();

  const hotProducts = [...data].sort((a, b) => b.sales - a.sales).slice(0, 3);
  console.log(data);
  return (
    <div className="container">
      <img src={home} alt="Hero sofa" className="hero-img" />
      <div className="hero-img-content">
        <h1 className="hero-title">Artisanal Furniture For Elevated Spaces</h1>
        <p className="hero-title-detail">
          Each furniture model from our online catalog is the embodiment of
          excellent design, a legend in the furniture industry.
        </p>
        <Link to="/shop">
          <button className="hero-btn">Shop now</button>
        </Link>
      </div>

      <div className="home-content">
        <div className="about-goal">
          <div className="goal-content">
            <p className="goal-head">About & goal</p>
            <p className="goal-para">
              FURN: Where style meets comfort, explore our curated collection of
              high-quality furniture that transforms your living spaces. From
              classic to contemporary, our expertly crafted pieces cater to
              diverse styles and budgets, ensuring a seamless shopping journey
              that combines elegance with everyday comfort.
            </p>
            <p className="goal-para">
              Our goal is to transforming spaces with comfort and style.
              Discover our diverse, high-quality furniture range tailored to
              your taste and budget, reflecting your unique personality and
              enhancing your everyday living.
            </p>
          </div>
          <img src={goal} alt="sofa" className="goal-img" />
        </div>
        <h2 className="home-title">Benefits Using Our Services</h2>
        <div className="benefits">
          <div className="benefits-single">
            <img src={quality} alt="Quality" className="benefits-quality" />
            <h4 className="benefits-head">Best Quality</h4>
            <p className="benefits-detail">
              Our online products are renowned for their exceptional quality,
              ensuring customer satisfaction with every purchase.
            </p>
          </div>

          <div className="benefits-single">
            <img src={dt} alt="Delivery truck" className="benefits-truck" />
            <h4 className="benefits-head ">Free Shipping</h4>
            <p className="benefits-detail">
              Enjoy the convenience of free shipping on all our online products,
              making your shopping experience hassle-free.
            </p>
          </div>

          <div className="benefits-single">
            <img src={waran} alt="Waranty" className="benefits-wara" />
            <h4 className="benefits-head">Waranty</h4>
            <p className="benefits-detail">
              Rest assured with our comprehensive warranty, providing peace of
              mind and protection for your purchased online products.
            </p>
          </div>
        </div>
        <h2 className="home-title">Hot Products</h2>
        <div className="hot-products">
          {hotProducts.map((item) => (
            <li key={item?.id} className="product-card">
              <ProductCard {...item} noDetail />
            </li>
          ))}
          <Link
            to="/shop"
            className="home-best-sell-link"
            onClick={() =>
              dispatch({ type: ACTION_TYPE.SORT_SELECT, payload: "bestSell" })
            }
          >
            See All &#x27F6;
          </Link>
        </div>
        <h2 className="home-title catg-head">Catalogs</h2>
        <div>
          {categories.map((item, index) => (
            <div className="catg-single" key={item.id}>
              {index % 2 === 0 ? (
                <>
                  <img
                    className="catg-image"
                    src={item.image}
                    alt={item.categoryName}
                  />
                  <div className="catg-content">
                    <h3>{item.categoryName}</h3>
                    <p>{item.description}</p>
                    <Link
                      className="see-catg-link"
                      to="./shop"
                      onClick={() =>
                        dispatch({
                          type: ACTION_TYPE.CHECKBOX_CATG,
                          payload: item.categoryName,
                        })
                      }
                    >
                      Catalog
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="catg-content">
                    <h3>{item.categoryName}</h3>
                    <p>{item.description}</p>
                    <Link
                      className="see-catg-link"
                      to="./shop"
                      onClick={() =>
                        dispatch({
                          type: ACTION_TYPE.CHECKBOX_CATG,
                          payload: item.categoryName,
                        })
                      }
                    >
                      Catalog
                    </Link>
                  </div>
                  <img
                    className="catg-image"
                    src={item.image}
                    alt={item.categoryName}
                  />
                </>
              )}
            </div>
          ))}

          {categories.map((item, index) => (
            <div className="catg-phone" key={item.id}>
              <>
                <img
                  className="catg-image"
                  src={item.image}
                  alt={item.categoryName}
                />
                <div className="catg-content">
                  <h3>{item.categoryName}</h3>
                  <p>{item.description}</p>
                  <Link
                    className="see-catg-link"
                    to="./shop"
                    onClick={() =>
                      dispatch({
                        type: ACTION_TYPE.CHECKBOX_CATG,
                        payload: item.categoryName,
                      })
                    }
                  >
                    Catalog
                  </Link>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
