import React, { useState } from "react"
import Image from "next/image"
import { getStrapiMedia } from "../lib/media"
import Link from 'next/link'

const Header = ({ navigation, global }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  let navElements = navigation.attributes.Navigation
  let mainNavigation = []
  let menucount = 0
  navElements.forEach((element, index) => {
    if (element.__component === "shared.header-navigation") {
      console.log(index)
      mainNavigation.push(element)
      if (index === 0) {
        menucount = 0
        mainNavigation[menucount].submenu = []
      } else {
        menucount = menucount + 1
        mainNavigation[menucount].submenu = []
      }
    } else {
      mainNavigation[menucount].submenu.push(element)
    }
  })
  const [toggleMenuClass, toggleMenu] = useState(false)
  const [subMenuClass, subMenuToggleMenu] = useState(false)
  
  const navRef = React.useRef(null);
  const onAddClick = (e) => {
    navRef.current.classList.add("show_popup");
    alert(`click!`);
  };

  const onRemoveClick = (e) => {
    navRef.current.classList.remove("show_popup");
  };
  return (
    <>
      <header className="header">
          <div className="main-wrap container">
            <div className="mobile-nav">
              <nav className="navbar navbar-expand-lg navbar-light hideOnDesk">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => toggleMenu((toggleMenuClass = !toggleMenuClass))}
                  >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </button>
                  <div
                    className={`navbar-collapse ${ toggleMenuClass ? "" : "collapse"}`}
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      {mainNavigation.map((menu, index) => (
                        <li className="nav-item" key={`nav-menu-mobile${index}`}>
                          <a href={menu.URL} key={`nav-link-mobile${index}`} className={`nav-link ${menu.showIcon === "Yes" ? "showIcon" : ""}`} onClick={() => subMenuToggleMenu((subMenuClass = !subMenuClass))}>
                            {menu.Label}
                            {menu.submenu.length ? <span className="arrow"><i className="fa fa-chevron-down" aria-hidden="true"></i></span> : ""}
                          </a>
                          {menu.submenu.length ? (
                            <ul className={`dropdown-menu ${ subMenuClass ? "active" : ""}`} key={`nav-submenu-mobile${index}`}>
                              {menu.submenu.map((submenu) => (
                                <li key={`nav-li-mobile${index}sub${submenu.Label}`}>
                                  <a className="dropdown-item" href={submenu.URL} key={`nav-menu-item${index}dd${submenu.Label}`}>
                                    {submenu.Label}
                                  </a>
                                </li>
                              ))} 
                            </ul>
                          ) : ("")}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            <div className="logo-wrap">
              <div className="villazzo-logo-wrap">
                <div className="main-logo">
                  <Link href="/"><Image
                    loader={myLoader}
                    src={getStrapiMedia(global.attributes.companyLogo)}
                    alt="Image"
                    layout="fill"
                  /></Link>
                </div>
                <div className="visit-text">
                  <p>Visit Our Sites</p>
                  <p className="drop-down mb-drop">
                    <a href="#">
                      <i className="fa-solid fa-caret-down"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="inquiry-wrap">
              <div className="inquiry">
                <a href="tel:+1(305)777 0146" className="desktop-inquiry-call">+1 (877) VILLAZZO</a>
                <a href="tel:+1(305)777 0146" className="mobile-inquiry-call"><i className="fa fa-phone" aria-hidden="true"></i></a>
              </div>
              <div className="see-more-text">
                <p>SEE MORE OPTIONS</p>
                <p className="drop-down">
                  <a href="#">
                    <i className="fa-solid fa-caret-down"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="inqury-btn">
              <a href="#">INQUIRE</a>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light hideOnMob">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  {mainNavigation.map((menu, index) => (
                    <li className="nav-item" key={`nav-menu-desk${index}`}>
                      <a
                        className={`nav-link ${
                          menu.showIcon === "Yes" ? "showIcon" : ""
                        }`}
                        href={menu.URL}
                        key={`nav-links-desk${index}`}
                      >
                        {menu.Label}
                      </a>
                      {menu.submenu.length ? (
                        <ul
                          className="dropdown-menu"
                          key={`nav-drop-desk${index}`}
                        >
                          {menu.submenu.map((submenu) => (
                            <li key={`nav-li-desk${index}dd${submenu.Label}`}>
                              <a
                                className="dropdown-item"
                                href={submenu.URL}
                                key={`nav-drop-item-desk${index}dd${submenu.Label}`}
                              >
                                {submenu.Label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  ))}
                  <li className="nav-item cursor" onClick={onAddClick}><a className="nav-link ">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div ref={navRef} id="popover" className="main_popup hide">
            <div className="custom_model">
              <div className="custom_model_dialog">
                  <div className="custom_model_content">
                    <a href="javascript:;" className="model_close"></a>
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
                        <a href="javascript:;" onClick={onRemoveClick}>SUBMIT</a>
                      </div>
                    </div>  
                  </div>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header
