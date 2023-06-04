import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import TestimonialCarousel from "./components/Carousel";
import "./home.css";
import home from "../../assets/home-images/home.jpg";
import dt from "../../assets/home-images/dt.png";
import waran from "../../assets/home-images/waran.png";
import quality from "../../assets/home-images/quality.png";
import goal from "../../assets/home-images/goal.png";
import { Footer } from "../../layout/Footer";
import { useData } from "../../context/ProductContext";
import { Loader } from "../../components/loader/loader";
import { getData } from "./service/categoryApi";
import { ACTION_TYPE } from "../../reducer/actionType";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const { data, dispatch, loading, setLoading } = useData();

  const navigate = useNavigate();

  useEffect(() => {
    getData(setCategories);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hotProducts = [...data].sort((a, b) => b.sales - a.sales).slice(0, 4);

  return (
    <div className="container">
      {loading && <Loader />}
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

        <h2 className="home-title ">Catalogs</h2>
        <div className="catg-whole-cards">
          {categories.map((item, index) => (
            <Link
              className="home-catg"
              key={item._id}
              to="./shop"
              onClick={() =>
                dispatch({
                  type: ACTION_TYPE.CHECKBOX_CATG,
                  payload: item.categoryName,
                })
              }
            >
              <>
                <img
                  className="catg-image"
                  src={item.image}
                  alt={item.categoryName}
                />
                <div className="catg-content">
                  <h3>{item.categoryName}</h3>
                  <p>{item.description}</p>
                </div>
              </>
            </Link>
          ))}
        </div>

        {/* <h2 className="home-title extra-margin">Benefits Using Our Services</h2> */}
        <div className="benefits extra-margin">
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
              Rest assured with our comprehensive warranty, providing protection
              for your purchased online products.
            </p>
          </div>
        </div>
        <div className="flex-center">
          <h2 className="home-title">Hot Products</h2>
          <Link
            to="/shop"
            className="home-best-sell-link"
            onClick={() =>
              dispatch({ type: ACTION_TYPE.SORT_SELECT, payload: "bestSell" })
            }
          >
            See All <span className="hot-prod-see-all">&#x27F6;</span>
          </Link>
        </div>
        <div className="hot-whole-cards">
          {hotProducts.map((item) => (
            <li key={item?._id} className="product-card-home">
              <div onClick={() => navigate(`/detail/${item?._id}`)}>
                <div className="home-card-image-div">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="home-card-image"
                  />
                </div>

                <div className="card-content home-card-content">
                  <h4 className="card-title">{item?.name}</h4>
                  <div className="flex-center">
                    <p className="card-price">₹{item?.price}</p>
                    <p className="card-star-rating">
                      <BsStarFill color="gold" />
                      {item?.rating?.toFixed(1)}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </div>
        <div className="carousel">
          <TestimonialCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};
