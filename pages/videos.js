import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'


const Videos = ({
  global,
  videospage,
  footerData,
  navigation,
}) => {
    let videosList = videospage.attributes.video
    let mainvideosList = []
    videosList.forEach((element, index) => {
      mainvideosList.push(element)
    })
    
    const moreBtn = React.useRef(null);
    // moreBtn.current.classList.remove("show_BTN");
    // if (videospage.attributes.video.length > 4) {
    //   moreBtn.current.classList.add("show_BTN");
    // }

    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }

    const [showMore, setShowMore] = useState(false);
    const mdl = React.useRef(null);
    
    const mdlLoader = React.useRef(null);
    const mdlContent = React.useRef(null);
    const youtubeVideo = (e) => {
      e.target.classList.add("active");
      e.target.parentNode.parentNode.classList.add("show_popup");
      const element = document.querySelector(".show_popup");
    }
    
    const onCloseClick = (e) => {
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("show_popup");
      e.target.parentNode.parentNode.parentNode.parentNode.classList.add("abc");
    };
  return (
    <>
      <div className="bg-img bg-white sold_pg_wrap videos_pg_wrap">
        <Header navigation={navigation} global={global} />
        <div className="container">
          <div className="buttons-wrap video-wrapper">
            <h1 className="video-heading">VIDEOS</h1>
            <div className={`video-wrap ${showMore ? "show-all" : ""}`}>
              {mainvideosList.map((element, index) => (
              <div key={`video${index}`} className="video-box" ref={mdl}>
                <div className="video_item_wrap">
                  <iframe src={element.youtubeEmebedURL} title="YouTube video player"></iframe>
                  <a href="javascript:;" className="youtubeIcon" onClick={youtubeVideo} data-url={element.youtubeEmebedURL}><i className="fa-brands fa-youtube"></i></a>
                </div>
                <h2 className="video-name">{element.heading}</h2>
                <p className="video-content">{element.subheading}</p>
                <div className="main_popup video-modal">
                  <div className="custom_model">
                    <div className="loader hide_loader" ref={mdlLoader}></div>
                    <div className="custom_model_dialog show_Content" ref={mdlContent}>
                      <a href="javascript:;" onClick={onCloseClick}><i className="fa-solid fa-xmark"></i></a>
                      <iframe id="popupIframe" src={element.youtubeEmebedURL} title="YouTube video player"></iframe>
                    </div>    
                  </div>
                </div>
              </div>
              ))}
              <div className="video-btn contact-btn sold-btn moreBtnHide" ref={moreBtn}>
                <a href="javascript:;" onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Less" : "More"}
                </a>
              </div>
            </div>
          </div>	
        </div>
      </div>
      <Footer footerProp={footerData} />
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [
    globalRes,
    videospageRes,
    footerRes,
    navigationRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/videospage", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
      videospage: videospageRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default Videos
