import { React, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStateValue } from "../util/Stateprovider";
import "./homepage.css";
const Home = () => {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    document.title = "Home";
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch({
          type:'SETUSER',
          user:'hello',
          token:foundUser.token
      })
    }
  }, []);

  return (
    <div>
      <section className="section">
        <div className="homepage-style">
          <h1>MIRACLE</h1>
          <h2>Software Systems</h2>
          <div className="scroll-down"></div>
        </div>
      </section>
      <section>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcUym2sHT8L3u5Ts7yUtSnixeyFqX2FNh7dA&usqp=CAU"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://d2b8lqy494c4mo.cloudfront.net/mss/images/locations/mcity.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3service.hitbullseye.com/s3fs-public/About-Miracle.jpg?null"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section>
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                <p className="mb10">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <p>
                  <i className="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35{" "}
                </p>
                <p>
                  <i className="fa fa-phone"></i> +91-9999878398{" "}
                </p>
                <p>
                  <i className="fa fa fa-envelope"></i> info@example.com{" "}
                </p>
              </div>

              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                <ul className="footer_ul_amrc">
                  <li>
                    <a href="http://webenlance.com">Image Rectoucing</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Clipping Path</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Hollow Man Montage</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Ebay & Amazon</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Hair Masking/Clipping</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Image Cropping</a>
                  </li>
                </ul>
              </div>

              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                <ul className="footer_ul_amrc">
                  <li>
                    <a href="http://webenlance.com">Remove Background</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">
                      Shadows & Mirror Reflection
                    </a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Logo Design</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Vectorization</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Hair Masking/Clipping</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Image Cropping</a>
                  </li>
                </ul>
              </div>

              <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>

                <ul className="footer_ul2_amrc">
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter fleft padding-right"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter fleft padding-right"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter fleft padding-right"></i>{" "}
                    </a>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing...
                      <a href="#">https://www.lipsum.com/</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container">
            <ul className="foote_bottom_ul_amrc">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <p className="text-center">
              Copyright @2017 | Designed With by{" "}
              <a href="#">Miracle Software Systems</a>
            </p>

            
          </div>
        </footer>
      </section>
    </div>
  );
};
export default Home;
