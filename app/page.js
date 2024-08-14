import Image from "next/image";
import Layout from "./Components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Layout>
  <button className="scroll__top scroll-to-target" data-target="html">
    <i className="flaticon-right-arrow" />
  </button>
  <header>
    <div id="sticky-header" className="tg-header__area transparent-header">
      <div className="container custom-container">
        <div className="row">
          <div className="col-12">
            <div className="mobile-nav-toggler">
              <i className="fas fa-bars" />
            </div>
            <div className="tgmenu__wrap">
              <nav className="tgmenu__nav">
                <div className="logo">
                  <Link href="#">
                    <img src="/img/logo/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                  <ul className="navigation">
                    <li className="active menu-item-has-children">
                      <Link href="#">Home</Link>
                      <ul className="sub-menu">
                        <li className="active">
                          <Link href="#">Home One</Link>
                        </li>
                        <li>
                          <Link href="#">Home Two</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">ABOUT US</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">TOURNAMENT</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="#">TOURNAMENT</Link>
                        </li>
                        <li>
                          <Link href="#">
                            TOURNAMENT Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">PAGES</Link>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <Link href="#">Gaming Shop</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link href="#">Shop Page</Link>
                            </li>
                            <li>
                              <Link href="#">Shop Details</Link>
                            </li>
                            <li>
                              <Link href="#">Cart</Link>
                            </li>
                            <li>
                              <Link href="#">Checkout</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="#">Our Services</Link>
                        </li>
                        <li>
                          <Link href="#">Services Details</Link>
                        </li>
                        <li>
                          <Link href="#">Player Details</Link>
                        </li>
                        <li>
                          <Link href="#">Login</Link>
                        </li>
                        <li>
                          <Link href="#">Sign up</Link>
                        </li>
                        <li>
                          <Link href="#">Forgot Password</Link>
                        </li>
                        <li>
                          <Link href="#">404 Page</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="#">News</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="#">Our Blog</Link>
                        </li>
                        <li>
                          <Link href="#">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="tgmenu__action d-none d-md-block">
                  <ul className="list-wrap">
                    <li className="search">
                      <Link href="#">
                        <i className="flaticon-search-1" />
                      </Link>
                    </li>
                    <li className="header-btn">
                      <Link href="#" className="tg-border-btn">
                        <svg
                          preserveAspectRatio="none"
                          viewBox="0 0 157 48"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M131.75 2L155.75 25L131.75 47L148.75 24L131.75 2Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25 1L1 24.5111L25 47L8 23.4889L25 1Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.75 1L0.75 25L23.75 47H131.75L155.75 25L131.75 1H24.75Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                        <i className="flaticon-edit" />
                        ~sing in
                      </Link>
                    </li>
                    <li className="side-toggle-icon">
                      <span />
                      <span />
                      <span />
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="tgmobile__menu">
      <nav className="tgmobile__menu-box">
        <div className="close-btn">
          <i className="flaticon-swords-in-cross-arrangement" />
        </div>
        <div className="nav-logo">
          <Link href="#">
            <img src="/img/logo/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="tgmobile__search">
          <form action="#">
            <input type="text" placeholder="Search here..." />
            <button>
              <i className="flaticon-loupe" />
            </button>
          </form>
        </div>
        <div className="tgmobile__menu-outer"></div>
        <div className="social-links">
          <ul className="list-wrap">
            <li>
              <Link href="#">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-instagram" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-youtube" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="tgmobile__menu-backdrop" />
    <div className="search__popup-wrap">
      <div className="search__layer" />
      <div className="search__close">
        <span>
          <i className="flaticon-swords-in-cross-arrangement" />
        </span>
      </div>
      <div className="search__wrap text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title">
                ... <span>Search Here</span> ...
              </h2>
              <div className="search__form">
                <form action="#">
                  <input
                    type="text"
                    name="search"
                    placeholder="Type keywords here"
                    required=""
                  />
                  <button className="search-btn">
                    <i className="flaticon-loupe" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="offCanvas__wrap">
      <div className="offCanvas__body">
        <div className="offCanvas__top">
          <div className="offCanvas__logo logo">
            <Link href="#">
              <img src="/img/logo/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="offCanvas__toggle">
            <i className="flaticon-swords-in-cross-arrangement" />
          </div>
        </div>
        <div className="offCanvas__content">
          <h2 className="title">
            Best Seller of Month Ideas for <span>NFT Wallet</span>
          </h2>
          <div className="offCanvas__contact">
            <h4 className="small-title">CONTACT US</h4>
            <ul className="offCanvas__contact-list list-wrap">
              <li>
                <Link href="tel:93332225557">+9 333 222 5557</Link>
              </li>
              <li>
                <Link href="mailto:info@webmail.com">info@webmail.com</Link>
              </li>
              <li>New Central Park W7 Street ,New York</li>
            </ul>
          </div>
          <div className="offCanvas__newsletter">
            <h4 className="small-title">Subscribe</h4>
            <form action="#" className="offCanvas__newsletter-form">
              <input type="email" placeholder="Get News & Updates" />
              <button type="submit">
                <i className="flaticon-send" />
              </button>
            </form>
            <p>
              Subscribe dolor sitamet, consectetur adiping eli. Duis esollici
              tudin augue.
            </p>
          </div>
          <ul className="offCanvas__social list-wrap">
            <li>
              <Link href="#">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33192 5.92804L13.5438 0H12.3087L7.78328 5.14724L4.16883 0H0L5.46575 7.78353L0 14H1.2351L6.01407 8.56431L9.83119 14H14L8.33192 5.92804ZM6.64027 7.85211L6.08648 7.07704L1.68013 0.909771H3.57718L7.13316 5.88696L7.68694 6.66202L12.3093 13.1316H10.4123L6.64027 7.85211Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-linkedin-in" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="fab fa-youtube" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="offCanvas__copyright">
          <p>
            Copyright © 2024 - By <span>MYKD</span>
          </p>
        </div>
      </div>
    </div>
    <div className="offCanvas__overlay" />
  </header>
  <main className="main--area">
    <section
      className="slider__area slider__bg"
      data-background="/img/slider/slider_bg.jpg"
    >
      <div className="slider-activee">
        <div className="single-slider">
          <div className="container custom-container">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="slider__content">
                  <h6 className="sub-title wow fadeInUp" data-wow-delay=".2s">
                    live gaming
                  </h6>
                  <h2 className="title wow fadeInUp" data-wow-delay=".5s">
                    steaming
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".8s">
                    video games online
                  </p>
                  <div
                    className="slider__btn wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    <Link href="contact.html" className="tg-btn-1">
                      <span>contact us</span>
                      <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 197 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="cls-1"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.976 0.755987L0.75499 30.977L29.717 58.677H165.717L195.938 30.977L165.717 0.755987H30.976Z"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          className="cls-2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M166.712 2.01899L196.933 30.98L166.712 58.68L188.118 29.719L166.712 2.01899Z"
                          fill="white"
                        />
                        <path
                          className="cls-2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M30.235 2.01899L0.0139923 30.977L30.235 58.677L8.82899 29.719L30.235 2.01899Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-6">
                <div className="slider__img text-center">
                  <img
                    src="/img/slider/slider_img01.png"
                    data-magnetic=""
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider__shapes">
        <img src="/img/slider/slider_shape01.png" alt="shape" />
        <img src="/img/slider/slider_shape02.png" alt="shape" />
        <img src="/img/slider/slider_shape03.png" alt="shape" />
        <img src="/img/slider/slider_shape04.png" alt="shape" />
      </div>
      <div className="slider__brand-wrap">
        <div className="container custom-container">
          <ul className="slider__brand-list list-wrap">
            <li>
              <Link href="#">
                <img src="/img/brand/brand_logo01.png" alt="brand" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src="/img/brand/brand_logo02.png" alt="brand" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <img src="/img/brand/brand_logo03.png" alt="brand" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  <footer className="footer-style-one">
    <div className="footer__top-wrap">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-7">
            <div className="footer-widget">
              <div className="footer-logo logo">
                <Link href="index.html">
                  <img src="/img/logo/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="footer-text">
                <p className="desc">
                  Lorem ipsum dolor sitamet consectur adipiscing Duis esollici
                  tudin augue euismod. Nulla ullam dolor sitamet consectetur
                </p>
                <p className="social-title">
                  Active{" "}
                  <span>
                    With Us <i className="fas fa-angle-double-right" />
                  </span>
                </p>
                <div className="footer-social">
                  <Link href="#">
                    <img src="/img/icons/social_icon01.png" alt="iocn" />
                  </Link>
                  <Link href="#">
                    <img src="/img/icons/social_icon02.png" alt="iocn" />
                  </Link>
                  <Link href="#">
                    <img src="/img/icons/social_icon03.png" alt="iocn" />
                  </Link>
                  <Link href="#">
                    <img src="/img/icons/social_icon04.png" alt="iocn" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
            <div className="footer-widget widget_nav_menu">
              <h4 className="fw-title">quick link</h4>
              <ul className="list-wrap menu">
                <li>
                  <Link href="#">Gaming</Link>
                </li>
                <li>
                  <Link href="#">Product</Link>
                </li>
                <li>
                  <Link href="#">All NFTs</Link>
                </li>
                <li>
                  <Link href="#">Social Network</Link>
                </li>
                <li>
                  <Link href="#">Domain Names</Link>
                </li>
                <li>
                  <Link href="#">Collectibles</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
            <div className="footer-widget widget_nav_menu">
              <h4 className="fw-title">Supports</h4>
              <ul className="list-wrap menu">
                <li>
                  <Link href="#">Setting &amp; Privacy</Link>
                </li>
                <li>
                  <Link href="#">Help &amp; Support</Link>
                </li>
                <li>
                  <Link href="#">Live Auctions</Link>
                </li>
                <li>
                  <Link href="#">Item Details</Link>
                </li>
                <li>
                  <Link href="#">24/7 Supports</Link>
                </li>
                <li>
                  <Link href="#">Our News</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-7">
            <div className="footer-widget">
              <h4 className="fw-title">Newsletter</h4>
              <div className="footer-newsletter">
                <p>
                  Subscribe our newsletter to get our latest update &amp;
                  newsconsectetur
                </p>
                <form action="#" className="footer-newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit">
                    <i className="flaticon-paper-plane" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright__wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="copyright__text">
              <p>
                Copyright © 2024 - All Rights Reserved By <span>Mykd</span>
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="copyright__card text-center text-md-end">
              <img src="/img/others/payment_card.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>



    </Layout>
    </>
  );
}
