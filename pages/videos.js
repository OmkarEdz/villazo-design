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
    videosList.forEach((element) => {
      mainvideosList.push(element)
    })
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
  return (
    <>
      <div className="bg-img bg-white sold_pg_wrap videos_pg_wrap">
        <Header navigation={navigation} global={global} />
        <div className="container">
          <div className="buttons-wrap video-wrapper">
            <h1 className="video-heading">VIDEOS</h1>
            <div className="video-wrap">
              {mainvideosList.map((element) => (
              <div key={mainvideosList.key} className="video-box">
                <div className="video_item_wrap">
                  <iframe src={element.youtubeEmebedURL} title="YouTube video player"></iframe>
                </div>
                <h2 className="video-name">{element.heading}</h2>
                <p className="video-content">{element.subheading}</p>
              </div>
              ))}
            </div>
            <div className="video-btn contact-btn sold-btn">
              <a href="javascript:;">MORE</a>
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
