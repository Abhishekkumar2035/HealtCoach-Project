import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";

const BlogSingle = () => {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title>Blog Post - Health Coach</title>
      </Helmet>

      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url('images/bg_2.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span className="mr-2">
                  <a href="/blog">
                    Blog <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Blog Single <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Blog Single</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              <p>
                <img src="images/image_1.jpg" alt="" className="img-fluid" />
              </p>
              <h2 className="mb-3">
                It is a long established fact a reader be distracted
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <p>
                Molestiae cupiditate inventore animi, maxime sapiente optio,
                illo est nemo veritatis repellat sunt doloribus nesciunt! Minima
                laborum magni reiciendis qui voluptate quisquam voluptatem
                soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi
                deleniti tenetur dolore amet fugit perspiciatis ipsa, odit.
                Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
              </p>

              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    Life
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Sport
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Tech
                  </a>
                  <a href="#" className="tag-cloud-link">
                    Travel
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sidebar pl-lg-5 ftco-animate">
              <div className="sidebar-box">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="fa fa-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a keyword and hit enter"
                    />
                  </div>
                </form>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Tag Cloud</h3>
                <div className="tagcloud">
                  <a href="#" className="tag-cloud-link">
                    food
                  </a>
                  <a href="#" className="tag-cloud-link">
                    life
                  </a>
                  <a href="#" className="tag-cloud-link">
                    coach
                  </a>
                  <a href="#" className="tag-cloud-link">
                    healthy
                  </a>
                  <a href="#" className="tag-cloud-link">
                    lifestyle
                  </a>
                  <a href="#" className="tag-cloud-link">
                    green
                  </a>
                  <a href="#" className="tag-cloud-link">
                    exercise
                  </a>
                  <a href="#" className="tag-cloud-link">
                    dietitian
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingle;
