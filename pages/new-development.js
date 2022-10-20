import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'


const NewDevelopment = ({
  global,
  newdevelopmentpage,
  footerData,
  navigation,
}) => {
	let propertyList = newdevelopmentpage.attributes.Proprties
    let mainpropertyList = []
    propertyList.forEach((element) => {
      mainpropertyList.push(element)
      console.log(element)
    })
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
      }
  return (
    <>
      <div className="bg-img bg-white new_dev_pg_wrap">
        <Header navigation={navigation} global={global} />
		<div className="container">
			<div className="buttons-wrap video-wrapper team-wrapper dev-wrapper">
				<h1 className="sold-heading">NEW DEVLOPMENT</h1>
				<div className="property-wrap">
					{mainpropertyList.map((element) => (
					<div key={mainpropertyList.key} className="property-box">
						<p className="img_Wrap">
							{/* <Image
								loader={myLoader}
								src='https://res.cloudinary.com/usability-designs/image/upload/v1666097741/property_7cac483ea2.png?updated_at=2022-10-18T12:55:41.809Z'
								className="header_image"
								layout="fill"
								alt="Villazzo"
							/> */}
							<img src={element.propertyImageURL} />
						</p>
						<h4 className="pro-name">{element.heading}</h4>
						<p className="pro-text">{element.subheading}</p>
					</div>
					))}
				</div>
				<div className="video-btn contact-btn">
					<a href="javascript:;">Contact Us</a>
				</div>	
				<div className="find-hotel">
					<a href="javascript:;">Find More about our Villa Hotels</a>
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
	newdevelopmentpageRes,
    footerRes,
    navigationRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
	fetchAPI("/newdevelopmentpage", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
	  newdevelopmentpage: newdevelopmentpageRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default NewDevelopment
