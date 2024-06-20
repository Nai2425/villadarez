import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myimage from "../assets/images/20-1602.png";
import babycakesweb from "../assets/images/Capture.png";
import babycakesdesktop from "../assets/images/Capture2.png";
import babycakesmobile from "../assets/images/mobile.jpg";
import astra from "../assets/images/astra.png";
import invento from "../assets/images/invento.png";
import phnx from "../assets/images/pms.png";
import bcms from "../assets/images/bcms.png";
import afp from "../assets/images/afp.png";
import {
  faHouse,
  faAddressCard,
  faGlobe,
  faAddressBook,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [greeting, setGreeting] = useState("");
  const [waitTime, setWaitTime] = useState(3000); // Wait time in milliseconds

  const handleDownload = () => {
    const url = "/assets/files/VILLADAREZ.pdf"; // Directly referencing the static path
    const link = document.createElement("a");
    link.href = url;
    link.download = "VILLADAREZ.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const greetings = [
      "Hello, My Name is Ian.",
      "Welcome to my Portfolio.",
      "Explore my Projects.",
      "I am  a Full Stack Web Developer.",
      "Connect with me to discuss your next big idea.",
      "I made this using React JS.",
    ];

    let index = 0;
    let currentIndex = 0;
    let currentText = "";
    let letter = "";

    const typing = () => {
      if (index === greetings.length) {
        index = 0;
      }
      currentText = greetings[index];
      letter = currentText.slice(0, ++currentIndex);

      setGreeting(letter);

      if (letter.length === currentText.length) {
        setTimeout(() => {
          setWaitTime(3000); // Reset wait time for next sentence
          index++;
          currentIndex = 0;
          typing();
        }, waitTime);
        return;
      }

      setTimeout(typing, 150);
    };

    typing();

    return () => {
      clearTimeout(typing);
    };
  }, [waitTime]);

  return (
    <>
      <div className="navbar bg-base-100 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a href="/" className="text-lg">
                  <FontAwesomeIcon icon={faHouse} /> Home
                </a>
              </li>
              <li>
                <a className="text-lg" href="#about">
                  <FontAwesomeIcon icon={faAddressCard} /> About
                </a>
              </li>
              <li>
                <a className="text-lg" href="#projects">
                  <FontAwesomeIcon icon={faGlobe} /> Projects
                </a>
              </li>
              <li>
                <a className="text-lg">
                  <FontAwesomeIcon icon={faAddressBook} /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl text-white">
            Villadarez Portfolio
          </a>
        </div>
        <div className="navbar-end">
          {/* Uncomment and use this section if you have additional elements */}
        </div>
      </div>
      <div className="flex items-center justify-center mt-60">
        <h1 className="text-5xl text-center text-white">
          {greeting}
          <span className="animate-blink ">|</span>
        </h1>
      </div>
      <div className="second-scene mt-80 px-10">
        <div className="card lg:card-side bg-gray-700 shadow-2xl  mb-10">
          <div className="card-body" id="about">
            <figure className="image-container">
              <img src={myimage} alt="Album" className="circular-border" />
            </figure>
            <button className="btn btn-outline" onClick={handleDownload}>
              <FontAwesomeIcon icon={faDownload} /> Download Resume
            </button>
            <div className="pers">
              <h2 className="card-title text-white">Personal Information:</h2>
              <p className="text-white ">Name: Villadarez, Ian Beach M.</p>
              <p className="text-white">Age: 21.</p>
              <p className="text-white">
                Email: ianbeach.villadarez025@gmail.com
              </p>

              <p className="text-white">Profile: Web Developer</p>
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title text-white">About me:</h2>
            <p className="text-white ">
              I am currently a 4th year graduating student at Quezon City
              University, and my passion lies in web development. I have been
              actively learning and grind my skills in these areas to explore
              the vast possibilities they offer. I am enthusiastic about diving
              deeper into the world of web development, including front-end
              technologies like HTML, CSS, and JavaScript, as well as back-end
              technologies such as PHP and databases like SQL and Non SQL. I am
              excited to continue my journey of learning and growth in these
              fields, aiming to become a proficient and well-rounded developer.
            </p>
            <h2 className="card-title text-white">Programming Languages:</h2>
            <div className="cards">
              <div className="prod-card">
                <h3>HTML</h3>
                <p>
                  Standard markup language for creating web pages and web
                  applications.
                </p>
              </div>
              <div className="prod-card">
                <h3>CSS</h3>
                <p>
                  Style sheet language used for describing the presentation of a
                  document written in HTML.
                </p>
              </div>
              <div className="prod-card">
                <h3>JavaScript</h3>
                <p>
                  High-level, versatile programming language for creating
                  interactive web applications.
                </p>
              </div>
              <div className="prod-card">
                <h3>PHP</h3>
                <p>
                  Popular server-side scripting language designed for web
                  development.
                </p>
              </div>
              <div className="prod-card">
                <h3>MySQL</h3>
                <p>Open-source relational database management system.</p>
              </div>
              <div className="prod-card">
                <h3>PostgreSQL</h3>
                <p>Powerful, open-source object-relational database system.</p>
              </div>
              <div className="prod-card">
                <h3>Visual Basic .NET</h3>
                <p>
                  Object-oriented programming language implemented on the .NET
                  framework.
                </p>
              </div>
            </div>

            <h2 className="card-title text-white">Frameworks:</h2>
            <div className="cards">
              <div className="prod-card">
                <h3>Bootstrap</h3>
                <p>
                  Popular CSS framework for developing responsive and
                  mobile-first websites.
                </p>
              </div>
              <div className="prod-card">
                <h3>Tailwind CSS</h3>
                <p>
                  Utility-first CSS framework for rapid UI development with
                  custom designs.
                </p>
              </div>
              <div className="prod-card">
                <h3>React JS</h3>
                <p>
                  JavaScript library for building user interfaces, developed by
                  Facebook.
                </p>
              </div>
              <div className="prod-card">
                <h3>Node.js</h3>
                <p>
                  JavaScript runtime built on Chrome's V8 engine for building
                  server-side applications.
                </p>
              </div>
              <div className="prod-card">
                <h3>Express.js</h3>
                <p>
                  Minimal and flexible Node.js web application framework
                  providing robust features.
                </p>
              </div>
              <div className="prod-card">
                <h3>CodeIgniter</h3>
                <p>
                  Powerful PHP framework with a small footprint, ideal for
                  creating dynamic websites.
                </p>
              </div>
              <div className="prod-card">
                <h3>Laravel</h3>
                <p>
                  Robust PHP framework for web artisans, providing elegant
                  syntax and features.
                </p>
              </div>
              <div className="prod-card">
                <h3>REST API</h3>
                <p>
                  Architectural style for designing networked applications,
                  using HTTP for communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-scene mt-32 px-10">
        <div className="card lg:card-side bg-gray-700 shadow-2xl  mb-10">
          <div className="card-body" id="projects">
            <h2 className="text-white text-center text-xl font-medium mb-10">
              These are my personal projects:
            </h2>
            <div className="cards">
              <div className="prod-card" style={{ width: "400px" }}>
                <h3 className="text-center">Baby's Cake Ordering Website</h3>
                <figure>
                  <img
                    src={babycakesweb}
                    alt="Album"
                    style={{ width: "400px" }}
                  />
                </figure>
              </div>
              <div className="prod-card" style={{ width: "400px" }}>
                <h3 className="text-center">
                  Baby's Cake POS and Inventory Desktop
                </h3>
                <figure>
                  <img
                    src={babycakesdesktop}
                    alt="Album"
                    style={{ width: "400px" }}
                  />
                </figure>
              </div>
              <div className="prod-card" style={{ width: "400px" }}>
                <h3 className="text-center">Baby's Cake Ordering Mobile</h3>
                <figure>
                  <img
                    src={babycakesmobile}
                    alt="Album"
                    style={{ width: "400px", height: "200px" }}
                  />
                </figure>
              </div>
            </div>

            <h2 className="text-white text-center text-xl font-medium mt-10 mb-10">
              These are my work projects:
            </h2>
            <div className="cards">
              <div className="prod-card" style={{ width: "400px" }}>
                <h3 className="text-center">
                  Astralia Production Management System
                </h3>
                <figure>
                  <img
                    src={astra}
                    alt="Album"
                    style={{ width: "400px", height: "200px" }}
                  />
                </figure>
              </div>
              <div className="prod-card" style={{ width: "400px" }}>
                <h3 className="text-center">InventoTrack</h3>
                <figure>
                  <img
                    src={invento}
                    alt="Album"
                    style={{ width: "400px", height: "200px" }}
                  />
                </figure>
              </div>
              <div className="prod-card" style={{ width: "400px" }}>
                <h3 className="text-center">
                  PHOENIX FORTRESS Production Management System
                </h3>
                <figure>
                  <img
                    src={phnx}
                    alt="Album"
                    style={{ width: "400px", height: "200px" }}
                  />
                </figure>
              </div>
              <div className="prod-card" style={{ width: "400px" }}>
                <h3 className="text-center">
                  BLUE CHALCEDONY QUARTZ Production Management System
                </h3>
                <figure>
                  <img
                    src={bcms}
                    alt="Album"
                    style={{ width: "400px", height: "200px" }}
                  />
                </figure>
              </div>
              <div className="prod-card" style={{ width: "400px" }}>
                <h3 className="text-center">AFPCMOSLMS</h3>
                <figure>
                  <img
                    src={afp}
                    alt="Album"
                    style={{ width: "400px", height: "200px" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
