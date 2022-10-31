import React, { useState, useEffect } from "react"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Link from 'next/link'


const Teams = ({
  global,
  teamspage,
  footerData,
  navigation,
}) => {
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }
  return (
    <>
      <div className="bg-img bg-white team_main_pg">
        <Header navigation={navigation} global={global} />
        <div className="container">
          <div className="buttons-wrap video-wrapper team-wrapper">
            <h1 className="team-heading team">MEET THE TEAM</h1>
            <div className="meet-wrap">
              {teamspage.attributes.Member.map((element, index) => (
              <div key={element.key} className="meet-left main-team">
                <p className="meet-left-img">
                  <Image
                    loader={myLoader}
                    src={element.memberImageURL}
                    key={`element${index}`}
                    className="header_image"
                    layout="fill"
                    alt="Villazzo"
                  />
                </p>
                <h3 className="meet-left-name">
                  <a href={element.pagelink} className="meet-left-name-link">{element.memberName}</a>
                </h3>
                <p className="broker">{element.memberType}</p>
                <a className="number" href={`tel:${encodeURIComponent(element.contactNo)}`}>{element.contactNo}</a>
                <a className="email" href={`mailto:${encodeURIComponent(element.memberEmail)}`}>{element.memberEmail}</a>
              </div>
              ))}
            </div>
            <div className="inqury-btn contact-btn">
              <a href="javascript:;">CONTACT US</a>
            </div>
            <div className="find-hotel">
              <a href="javascript:;">Find Out More About Our Villa Hotels</a>
            </div>
          </div>	
        </div>
        <div className="team-banner">
            <div className="banner-img">
                          <Image
                              loader={myLoader}
                              src={getStrapiMedia(teamspage.attributes.moreVillaImageDesktop)}
                              className="desktop"
                              layout="fill"
                              alt="Villazzo"
                          />
                          <Image
                              loader={myLoader}
                              src={getStrapiMedia(teamspage.attributes.moreVillaImageMob)}
                              className="mobile"
                              layout="fill"
                              alt="Villazzo"
                          />
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
    teamspageRes,
    footerRes,
    navigationRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
    fetchAPI("/teamspage", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
      teamspage: teamspageRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default Teams
