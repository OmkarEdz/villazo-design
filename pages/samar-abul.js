import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { fetchAPI } from "../lib/api"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'


const TeamsInside = ({
  global,
  samarabul,
  footerData,
  navigation,
}) => {
	let propertyListSamar = samarabul.attributes.Properties
	let mainPropertyListSamar = []
	propertyListSamar.forEach((element) => {
		mainPropertyListSamar.push(element)
	})
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }
	const navRef = React.useRef(null);
    const onAddClick = (e) => {
      navRef.current.classList.add("show_popup");
    };

    const onRemoveClick = (e) => {
      navRef.current.classList.remove("show_popup");
    };
  return (
    <>
      <div className="bg-img bg-white">
        <Header navigation={navigation} global={global} />
		<div className="container">
			<div className="buttons-wrap video-wrapper team-wrapper inside-wrap">
				<h1 className="team-heading">MEET THE TEAM</h1>
				<div className="meet-wrap">
					<div className="meet-left">
						<p className="meet-left-img">
							<Image
								loader={myLoader}
								src={samarabul.attributes.memberImageURL}
								className="header_image"
								layout="fill"
								alt="Villazzo"
							/>
						</p>
						<h3 className="meet-left-name">{samarabul.attributes.memberName}</h3>
						<p className="broker">{samarabul.attributes.memberType}</p>
						<a className="number" href={`tel:${encodeURIComponent(samarabul.attributes.contactNo)}`}>{samarabul.attributes.contactNo}</a>
						<a className="email" href={`mailto:${encodeURIComponent(samarabul.attributes.memberEmail)}`}>{samarabul.attributes.memberEmail}</a>
					</div>
					<div className="meet-right">
						<p>{samarabul.attributes.Content}</p>
					</div>
				</div>
				<div className="properties">
					<h1 className="team-heading">FEATURED PROPERTIES</h1>
					<div className="property-wrap">
						{mainPropertyListSamar.map((element) => (
						<div key={mainPropertyListSamar.key} className="property-box">
							<p className="img_Wrap">
								<Image
									loader={myLoader}
									src={element.propertyImageURL}
									className="header_image"
									layout="fill"
									alt="Villazzo"
								/>
							</p>
							<h4 className="pro-name">{element.heading}</h4>
							<p className="pro-text">{element.subheading}</p>
						</div>
						))}
					</div>
				</div>
				<div className="video-btn contact-btn">
					<a href="#" onClick={onAddClick}>CONTACT US</a>
				</div>
				<div className="find-hotel">
					<a href="#">Find Out More About Our Villa Hotels</a>
				</div>
			</div>
		</div>
      </div>
	  <div ref={navRef} id="popover" className="main_popup hide">
            <div className="custom_model">
              <div className="custom_model_dialog">
                  <div className="custom_model_content">
                    <a href="#" className="model_close"></a>
                    <div className="Popup_wrap">
                      <form>	
                        <div className="contact-form">
                          <h2>CONTACT US</h2>	
                          <div className="contact-form-label">
                            <input className="input-name contact-lebel" type="text" id="fname" name="fname"placeholder="FIRST NAME" />
                            <input className="contact-lebel" type="text" id="fname" name="fname"placeholder="LAST NAME" />
                          </div>
                          <div className="contact-form-label contact-popup-1">
                            <input className="input-name contact-lebel" type="text" id="fname" name="fname"placeholder="EMAIL ADDRESS" />
                            <input className="contact-lebel" type="text" id="fname" name="fname"placeholder="PHONE NUMBER" />
                          </div>
                          <textarea className="form-message contact-lebel" id="w3review" name="w3review" rows="4" cols="50"placeholder="MESSAGE"></textarea>
                        </div>
                      </form>
                      <div className="popup-submit-btn">
                        <a href="#" onClick={onRemoveClick}>SUBMIT</a>
                      </div>
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
	samarabulRes,
    footerRes,
    navigationRes,
  ] = await Promise.all([
    fetchAPI("/global", { populate: "*" }),
	fetchAPI("/samarabul", { populate: "*" }),
    fetchAPI("/footer", { populate: "deep" }),
    fetchAPI("/header-nav", { populate: "*" }),
  ])

  return {
    props: {
      global: globalRes.data,
	  samarabul: samarabulRes.data,
      footerData: footerRes.data,
      navigation: navigationRes.data,
    },
    revalidate: 1,
  }
}

export default TeamsInside