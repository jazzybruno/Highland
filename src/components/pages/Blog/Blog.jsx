import React , {useState , useEffect} from "react";
import Header from "../../ui/Header/Header";
import Footer from "../../ui/Footer/Footer";
import Gallery from "../Blog/Gallery";
import { Link } from "react-router-dom";
import tiltle from '../../images/About/title.svg'
import Outline from "../Blog/Outline";
import logo from "../../images/Landing/logo.svg";
import search from "../../images/Landing/bx_search.svg";
import slide1 from "../../images/Admission/admit.jpg";
import slide2 from "../../images/Admission/slide2.jpg";
import slide3 from "../../images/Admission/slide3.jpg";
import slide4 from "../../images/Admission/slide4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import axios from "axios";
import NavBar from "../../ui/Navbar/Navbar";
import { ColorRing } from "react-loader-spinner";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Blog() {
  const [posts , SetPosts] = useState([])

    const api = axios.create({
        baseURL: 'https://highland-backend.herokuapp.com/'
    })

    const getPosts = () => {
        api.get('/post')
        .then(res => {
            SetPosts(res.data)
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        }
        )
    }

    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div className="blog-container">
      <div className="landing">
        <Header />

        <div className="orientation1"></div>
        <div className="admission-container">
          {/* the image swiper start  */}
          <Swiper
            slidesPerView={1}
            effect
            // spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            className="admission-swiper-container"
          >
            <SwiperSlide>
              <div className="swiper-images">
                <img src={slide1} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-images">
                <img src={slide2} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-images">
                <img src={slide3} alt="" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-images">
                <img src={slide4} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          {/* the image swiper end  */}
        </div>
        {/* the contents on the swiper start/ */}
        <div className="about-video-details1">
          <div className="about-video-details-logo1">
            <a href="/">
              {" "}
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="about-video-details-logo2">
            <a href="about">ABOUT US</a>
          </div>
          <div className="about-video-details-logo3">
            <a href="blog">BLOG</a>
          </div>
          <div className="about-video-details-logo4">
            <a href="admission">ADMISSION</a>
          </div>
          <div className="about-video-details-logo5">
            <a href="team">OUR TEAM</a>
          </div>
          <div className="about-video-details-logo6">
            <a href="contact">CONTACT</a>
          </div>
          <div className="about-video-details-logo7">
            <a href="/login">
              {" "}
              <img src={search} alt="" />
            </a>
          </div>
        </div>

        <div className='about-responsive-div'>
        <NavBar />
        </div>

        <div className="about-videos-navigate-container1">
          <div className="about-video-navigate">
            <div className="about-videos-navigate-title">
              <h3> BLOG </h3>
            </div>
            <div className="about-videos-navigate-description">
               <span>HIGHLAND's News and Events</span>
            </div>
            <div className="about-video-navigate-link">
              <a href="#blog">Details</a>
            </div>
          </div>
        </div>

      </div>


      <section id="blog">
        <div className="contanier">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="aboutus-details-title">
                <div className="aboutus-details-title-img"> <img src={tiltle} alt="" /></div>
                <div className="aboutus-details-title-text">Our Blog</div>
              </div>
              {/* <div className="underline mx-auto"></div> */}
            </div>
          </div>
        </div>
      </section>
  
      <div className="main-div-blogs-posts">
        {posts.length === 0 ?<div className="main-loader-blog"> <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#3148a3' , '#3148a3' , '#3148a3' , '#3148a3' , '#3148a3' ,  ]}
/></div> :  posts.map((post , index) => {
          let number = index + 1
          return (
            <Outline index={number} photo={post.photo} label={post.title} description={post.content} />
          )
        })}
      </div>

      <section>
        <div>
          <div>
            <div className="text-center">
              {/* <div className="underline mx-auto"></div> */}
            </div>
          </div>
        </div>
        <Gallery />
      </section>
      <Footer />
    </div>
  );
}

export default Blog;
