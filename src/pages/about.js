import React from "react"
import { motion } from "framer-motion"
import { isMobile } from "react-device-detect"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
// import Div100vh from "react-div-100vh"
import Cursor from "../components/cursor"

const AboutPage = ({ transitionStatus, entry }) => {
  const technologies = [
    "JavaScript",
    "React",
    "Gatsby",
    "Framer Motion",
    "React-Three-Fiber",
    "CSS/SCSS",
    "Material-UI",
  ]
  const software = [
    "Webflow",
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
  ]

  const hoverLink = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.add("cursor--chevron-hover")
  }

  const unhoverLink = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.remove("cursor--chevron-hover")
  }

  return (
    <Layout page="about">
      <SEO title="about" />
      {typeof window !== `undefined` && (
        <motion.div
          initial={entry.state}
          animate={
            transitionStatus === "exiting"
              ? { x: -window.innerWidth }
              : { x: 0 }
          }
          transition={{ duration: 0.4 }}
          className="about-page"
        >
          <div
            className="scroll-wrapper"
            style={
              transitionStatus === "entered"
                ? { overflowY: "auto" }
                : { overflowY: "hidden" }
            }
          >
            <div className="about-page">
              <div className="about-page-left">
                <Image src={8} />
              </div>
              <div className="about-page-upper-right">
                <h2 id="about-header">about me</h2>
                <div className="about-page-right-paragraph">
                  <p>
                    Frontend developer & UI designer with a background in audio engineering. My goal is to build visually impressive websites that convey strong brand identity and leave a lasting impression. Hobbies
                    include making{" "}
                    <a
                      href="https://soundcloud.com/big_jackson/sets/bradc-art/s-QZnJYSomzpf"
                      target="_blank"
                      rel="noreferrer"
                      id="content-link"
                      onMouseEnter={() => hoverLink()}
                      onMouseLeave={() => unhoverLink()}
                    >
                      music
                    </a>{" "}
                    and editing{" "}
                    <a
                      href="https://www.youtube.com/playlist?list=PLLz0TQmRusVhcqtJyDVvrH4cfD2ssDDNp"
                      target="_blank"
                      rel="noreferrer"
                      id="content-link"
                      onMouseEnter={() => hoverLink()}
                      onMouseLeave={() => unhoverLink()}
                    >
                      videos
                    </a>
                    .
                  </p>
                </div>
              </div>
              <hr className="about-page-middle-right" />
              <div className="about-page-lower-right">
                <div className="technologies-list">
                  <div className="tech-list-wrapper">
                    <h4 id="technologies-header">TECHNOLOGY</h4>
                  </div>
                  <div className="technologies-content">
                    {technologies.map((tech, index) => (
                      <h5 key={index} className="technology-text">
                        {tech}
                      </h5>
                    ))}
                  </div>
                </div>
                <div className="software-list">
                  <div className="soft-list-wrapper">
                    <h4 id="software-header">
                      <span id="space-filler">T</span>SOFTWARE
                      <span id="space-filler">Y</span>
                    </h4>
                  </div>
                  <div className="software-content">
                    {software.map((soft, index) => (
                      <h5 key={index} className="technology-text">
                        {soft}
                      </h5>
                    ))}
                  </div>
                </div>
              </div>
              {!isMobile ? <Cursor /> : null}
            </div>
          </div>
        </motion.div>
      )}
    </Layout>
  )
}

export default AboutPage
