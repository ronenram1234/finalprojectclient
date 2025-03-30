import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

// interface Props {

// }

// const Home: FunctionComponent<Props> = () => {
const Home: FunctionComponent = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img
              src="home1.jpg"
              className="d-block w-100 block-home"
              alt="Slide 1"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="carousel-text">FULLY TESTED</h2>
              <h1 className="carousel-title">MEMORY AND CPUS</h1>
              <p className="carousel-text-small">NEW AND USED</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="home2.jpg"
              className="d-block w-100 block-home"
              alt="Slide 2"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="carousel-text">EXCESS INVENTORY?</h2>
              <h1 className="carousel-title">SELL US EQUIPMENT</h1>
              <p className="carousel-text-small">WE BUY RAM AND CPUS</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="home3.jpg"
              className="d-block w-100 block-home"
              alt="Slide 3"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="carousel-text">LOOKING TO BUY?</h2>
              <h1 className="carousel-title">VISIT US ON EBAY!</h1>
              <p className="carousel-text-small">MOST ITEMS SHIP FREE</p>
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="home4.jpg"
              className="d-block w-100 block-home"
              alt="Slide 1"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="carousel-text">FULLY TESTED</h2>
              <h1 className="carousel-title">MEMORY AND CPUS</h1>
              <p className="carousel-text-small">NEW AND USED</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img
              src="home5.jpg"
              className="d-block w-100 block-home"
              alt="Slide 2"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="carousel-text">EXCESS INVENTORY?</h2>
              <h1 className="carousel-title">SELL US EQUIPMENT</h1>
              <p className="carousel-text-small">WE BUY RAM AND CPUS</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img
              src="home6.jpg"
              className="d-block w-100 block-home"
              alt="Slide 3"
            />
            <div className="carousel-caption custom-caption">
              <h2 className="carousel-text">LOOKING TO BUY?</h2>
              <h1 className="carousel-title">VISIT US ON EBAY!</h1>
              <p className="carousel-text-small">MOST ITEMS SHIP FREE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
