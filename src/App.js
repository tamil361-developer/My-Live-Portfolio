import "./App.css";
import React from "react";
import me from "./imgs/home/me2.webp";

import { color, motion } from "motion/react";

import p1 from "./imgs/project/p1.jpg";
import p2 from "./imgs/project/p2.jpg";
/* import p3 from "./imgs/project/p3.jpg"; */
import p4 from "./imgs/project/p4.jpg";

import bootstrap from "./imgs/tech/bootstrap.png";
import css from "./imgs/tech/css.png";
import django from "./imgs/tech/django.png";
import git from "./imgs/tech/git.png";
import github from "./imgs/tech/github.png";
import html from "./imgs/tech/html.png";
import js from "./imgs/tech/js.png";
import mysql from "./imgs/tech/mysql.png";
import python from "./imgs/tech/python.png";
import react from "./imgs/tech/react.png";

import c1 from "./imgs/certifications/c1.jpg";
import c2 from "./imgs/certifications/c2.jpg";
import c3 from "./imgs/certifications/c3.jpg";
import c4 from "./imgs/certifications/c4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import Typewriter from "typewriter-effect";

function App() {
  AOS.init();
  const [showProject, setShowProject] = React.useState(false);
  React.useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setShowProject(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Tamil Eniyan Portfolio</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </head>

        {showProject && (
          <body className="text-white body-bg">
            {/* NAVBAR */}
            <nav class="navbar navdiv navbar-expand-lg  sticky-top ">
              <div class="container-fluid">
                <a class="navbar-brand name " href="#">
                  <h3 class="fw-bold text-white">Tamil Eniyan S</h3>
                </a>
                <button
                  className="navbar-toggler d-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa-solid fa-bars"></i>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav navlist mb-2 mb-lg-0 ms-auto">
                    <li class="nav-item">
                      <a
                        class="nav-link me-5 text-white"
                        aria-current="page"
                        href="#home"
                        data-aos="fade-up"
                        data-aos-duration="500"
                      >
                        Home
                      </a>
                    </li>
                    <li class="nav-item me-5">
                      <a
                        class="nav-link text-white"
                        href="#about"
                        data-aos="fade-up"
                        data-aos-duration="600"
                      >
                        About
                      </a>
                    </li>
                    <li class="nav-item me-5">
                      <a
                        class="nav-link text-white"
                        href="#project"
                        data-aos="fade-up"
                        data-aos-duration="700"
                      >
                        Project
                      </a>
                    </li>
                    <li class="nav-item me-5">
                      <a
                        class="nav-link text-white"
                        href="#education"
                        data-aos="fade-up"
                        data-aos-duration="800"
                      >
                        Education
                      </a>
                    </li>
                    <li class="nav-item me-5">
                      <a
                        class="nav-link text-white"
                        href="#certifications"
                        data-aos="fade-up"
                        data-aos-duration="900"
                      >
                        Certifications
                      </a>
                    </li>
                    <li class="nav-item me-5">
                      <a
                        class="nav-link text-white"
                        href="#technologies"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                      >
                        Technologies
                      </a>
                    </li>
                    <li class="nav-item me-5">
                      <a
                        class="nav-link text-white"
                        href="#contact"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            {/* HOME */}
            <div class="home container mt-lg-5   " id="home">
              <div class="row mt-lg-5 ">
                <div class="col-lg-8  mt-lg-5">
                  <h2 class="mt-md-4  " data-aos="fade-right">
                    Hello, It's Me
                  </h2>
                  <h1
                    class="mt-4 fw-bold "
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    Tamil Eniyan
                  </h1>
                  <h2
                    class="mt-4 d-lg-flex "
                    data-aos="fade-right"
                    data-aos-duration="500"
                  >
                    And I'm a
                    <span class="text-primary fw-bold developer ms-3 ms-lg-3">
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Web Developer ...!",
                            "React Developer ...!",
                            "Python Developer ...!",
                            "Django Developer ...!",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                        }}
                      />
                    </span>
                  </h2>
                  <p
                    class="mt-3 fw-normal text-warning"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    I’m a Python Full-stack Web Developer with a passion for
                    creating efficient and scalable applications. I specialize
                    in both front-end and back-end development, always striving
                    to improve user experiences.
                  </p>
                  <div
                    data-aos="fade-right "
                    data-aos-duration="1000"
                    className="mt-4"
                  >
                    <span>
                      <a
                        href="https://www.linkedin.com/in/tamileniyan361"
                        class="text-white fs-3 "
                      >
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a
                        href="https://github.com/tamil361-developer"
                        class="text-white fs-3 ms-4"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/crazy_boy_0306/profilecard/?igsh=MTNvYXN3eWxtajN1aQ=="
                        class="text-white fs-3 ms-4"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                      <a
                        href="https://wa.me/6382402671"
                        class="text-white fs-3 ms-4"
                      >
                        <i class="fa-brands fa-whatsapp"></i>
                      </a>
                    </span>
                  </div>

                  <div
                    class=" mt-3 d-md-none"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  ></div>
                  <div
                    class="  mt-4"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  >
                    <i class="fa-solid fa-envelope"></i>
                    <a
                      href="mailto:tamileniyan361@gmail.com"
                      class="text-decoration-none text-white ms-2 fw-bold"
                    >
                      tamileniyan361@gmail.com
                    </a>
                    <span class="ms-5 d-none d-md-inline"></span>
                  </div>
                  <div
                    class=" mt-2 mb-3"
                    data-aos="fade-right"
                    data-aos-duration="1300"
                  >
                    <i class="fa-solid fa-phone-volume"></i>
                    <a
                      href="tel:+6382402671"
                      class="text-decoration-none text-white ms-2 fw-bold"
                    >
                      6382402671
                    </a>
                  </div>
                  <div class="md-text-center ">
                    <a
                      href="TAMIL ENIYAN S.pdf"
                      class=" btn btn-primary"
                      download="TAMIL ENIYAN S.pdf"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
                <div
                  class=" col-lg-4 text-center mt-4 p-5 p-lg-4 mt-md-1 p-md-5"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div
                    class="mt-lg-5"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <img
                      src={me}
                      alt=""
                      class=" img-fluid rounded-circle"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <div class="about container mt-lg-5 text-white" id="about">
              <h1
                class="mt-4 mt-lg-5 fw-bold text-center pt-lg-5 "
                data-aos="fade-left"
              >
                About <span class="text-primary">Me</span>
              </h1>
              <div class="row ">
                <div class="col-lg-3 text-center mt-lg-5">
                  <div class="d-none d-lg-block mt-3 mt-lg-3">
                    <img
                      src={me}
                      alt=""
                      class=" img-fluid rounded-circle mt-lg-5"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    />
                  </div>
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-7 mt-lg-5 mb-lg-5">
                  <div
                    class="mt-lg-5 mb-lg-5"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <h3
                      class="mt-4 pt-lg- text-warning"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <Typewriter
                        options={{
                          strings: [
                            "Full Stack Web Developer ...!",
                            "React Developer ...!" ,
                            "Python Developer ...!",
                            "Django Developer ...!",
                          ],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                        }}
                      />
                    </h3>
                    <p
                      class="mt-4 "
                      data-aos="fade-left"
                      data-aos-duration="1300"
                    >
                      {/* I am a Full Stack Web Developer with a strong foundation
                      in
                      <span class="fw-bold ms-2">Python and Django</span>. I
                      have experience in both
                      <span class="fw-bold ms-2 me-2">
                        front-end and back-end technologies
                      </span>
                      to
                      <span class="fw-bold ms-2">
                        build scalable, user-friendly web applications
                      </span>
                      . Proficient in
                      <span class="fw-bold ms-2">
                        Python, Django, MySql, React, Javascript, CSS, HTML
                      </span>
                      . My focus is on writing clean, efficient code and
                      developing secure solutions. I am eager to learn and adapt
                      to new technologies.
                      <span class="fw-bold ms-1">
                        I am excited to contribute to innovative projects in a
                        collaborative environment.
                      </span>
                      I am also committed to continuously improving my skills
                      and staying up-to-date with industry trends. */}
                      As a passionate and driven Full Stack Web Developer with a
                      strong foundation in Python and Django, I am a fresher
                      eager to apply my skills in both front-end and back-end
                      development. I have hands-on experience building web
                      applications using technologies such as React, JavaScript,
                      CSS, HTML, and MySQL. My focus is on writing clean,
                      efficient code while developing scalable, user-friendly,
                      and secure solutions. I am committed to continuous
                      learning and adapting to emerging technologies. Looking
                      forward to contributing to innovative projects in a
                      collaborative, fast-paced environment and further
                      enhancing my technical expertise. I thrive on solving
                      real-world problems through code and enjoy transforming
                      complex requirements into intuitive digital experiences.
                      My goal is to grow as a developer while delivering
                      impactful software that adds value to users and businesses
                      alike.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECTS */}
            <div class="projects container mt-5 " id="project">
              <div class="row mt-lg-5">
                <h1 class="fw-bold text-center mt-lg-5">Projects</h1>

                <div
                  class=" col-md-6 col-lg-4  mt-5 text-center "
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <div class="card text-dark ">
                    <img src={p1} class="card-img-top mt-3" alt="..." />
                    <div class="card-body ">
                      <h5 class="card-title fw-bold">Notes App</h5>
                      <a href="https://notesproject-vbq9.onrender.com">
                        go to website
                      </a>

                      {/* <p class="card-text  ">
                      
                      This Notes App is a full-stack web application that
                      enables users to securely create, view, edit, and delete
                      personal notes. The frontend is developed using React and
                      styled with Bootstrap, ensuring a responsive and modern
                      user interface. Users can categorize their notes and
                      filter them by category for better organization. All note
                      data is managed through a REST API backend, with secure
                      JWT-based authentication to protect user information. The
                      app provides real-time feedback for actions like editing
                      or deleting notes, enhancing the user experience. Overall,
                      this project demonstrates practical implementation of CRUD
                      operations, authentication, and category filtering in a
                      user-friendly environment
                      <p>
                        <span class="fw-bold text-primary">
                          Technologies Used:
                        </span>
                        <span class="fw-bold ms-2">
                          HTML, CSS, Bootstrap, python, Django, MySql.
                        </span>
                      </p>
                    </p> */}
                    </div>
                  </div>
                </div>

                <div
                  class="col-md-6 col-lg-4  mt-5 text-center "
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="card text-dark">
                    <img src={p2} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title fw-bold mt-3">Ecommerce Website</h5>
                      <a href="https://ecommercewebsite-frontend-wnqm.onrender.com">
                        go to website
                      </a>
                      {/* <p class="card-text">
                      A platform for
                      <span class="fw-bold ms-2">buying, selling,</span> or
                      <span class="fw-bold ms-2">renting properties.</span>
                      <p>
                        <span class="fw-bold text-primary">
                          Technologies Used:
                        </span>
                        <span class="fw-bold ms-2">
                          HTML, CSS, Bootstrap, JavaScript, python, Django,
                          MySql.
                        </span>
                      </p>
                    </p> */}
                    </div>
                  </div>
                </div>

                <div
                  class="col-md-6 col-lg-4 mt-5 text-center "
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div class="card text-dark">
                    <img src={p4} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title fw-bold mt-3">Portfolio Website</h5>
                      <a href="https://tamileniyan-my-live-portfolio.onrender.com">
                        go to website
                      </a>

                      {/* <div>
                      Designed a personal portfolio to
                      <span class="fw-bold ms-2">
                        showcase my skills and projects
                      </span>
                      <span class="ms-2">
                        with a responsive front-end. Built with React for
                        interactivity and dynamic content.
                      </span>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EDUCATIONS */}
            <div class="container mt-5 " id="education">
              <div class="row mt-lg-5">
                <div class="text-md-center  mt-lg-5 ">
                  <h1 class="fw-bold mt-lg-5">Education</h1>
                </div>

                <div class="col-md-6 mt-3 mt-md-5 text-center ">
                  <h6 class="fw-bold">
                    <span class="text-primary">Master's</span> degree in
                    Mathematics
                  </h6>
                  <h5>65%</h5>
                </div>
                <div class="col-md-6  mt-md-5 text-center">
                  <h6 class="fw-bold">2022 - 2024</h6>
                  <h6>Periyar University</h6>
                </div>

                <div class="col-md-6 mt-3 mt-md-4 text-center ">
                  <h6 class="fw-bold">
                    <span class="text-primary">Bachelor's</span> degree in
                    Mathematics
                  </h6>
                  <h5>68%</h5>
                </div>
                <div class="col-md-6  mt-md-4 text-center">
                  <h6 class="fw-bold">2018 - 2021</h6>
                  <h6>Bharathiar University</h6>
                </div>

                <div class="col-md-6 mt-3 mt-md-4  text-center">
                  <h6 class="fw-bold text-primary">HSC</h6>
                  <h5>75%</h5>
                </div>
                <div class="col-md-6  mt-md-4 text-center">
                  <h6 class="fw-bold">2016 - 2018</h6>
                  <h6>Adharsh Vidthyalaya</h6>
                </div>

                <div class="col-md-6 mt-3 mt-md-4  text-center">
                  <h6 class="fw-bold text-primary">SSLC</h6>
                  <h5>87%</h5>
                </div>
                <div class="col-md-6  mt-md-4 text-center">
                  <h6 class="fw-bold ">2015</h6>
                  <h6>Adharsh Vidhyalaya</h6>
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div
              class=" certifications container mt-4 mt-lg-5"
              id="certifications"
            >
              <div class="row justify-content-center mt-lg-5">
                <h1 class="text-center mt-5 mb-lg-5 fw-bold">Certifications</h1>

                <div
                  class="col-md-6 col-lg-3  mt-4 mt-lg-5 "
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <div class="card m-3 m-lg-0 mt-lg-5">
                    <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-39353cd7-18e6-4efd-a167-0e031b82bd1d.jpg?v=1741668314000">
                      <img src={c1} class="card-img-top " alt="..." />
                      <div class="card-body">
                        <h5 class="card-title fw-bold"></h5>
                        <p class="card-text text-primary">click to view</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-3  mt-2 mt-lg-5"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="card m-3 m-lg-0  mt-lg-5">
                    <a href="">
                      <img src={c4} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title fw-bold"></h5>
                        <p class="card-text text-primary">click to view</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  class="col-md-6 col-lg-3  mt-2 mt-lg-5"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="card m-3 m-lg-0   mt-lg-5">
                    <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-510becb8-4aa4-4570-8e01-a922c1c73328.jpg?v=1741666755000">
                      <img src={c2} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title fw-bold"></h5>
                        <p class="card-text text-primary">click to view</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div
                  class="col-md-6 col-lg-3  mt-2 mt-lg-5"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="card m-3 m-lg-0   mt-lg-5">
                    <a href="https://udemy-certificate.s3.amazonaws.com/image/UC-058129de-9947-412f-b1da-9bbed4804c00.jpg?v=1742783100000">
                      <img src={c3} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title fw-bold"></h5>
                        <p class="card-text text-primary">click to view</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <div class="container mt-5 mt-lg-0 p-lg-5" id="technologies">
              <h1 class="fw-bold text-center mt-lg-5">Technologies</h1>
              <div class="row mt-5 mt-lg-5 p-lg-5  rounded-3 techhead">
                <div class="col-3 col-md-2 p-lg-4  ">
                  <img
                    src={python}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5  shadow rounder skil tech  rounded"
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={django}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5 shadow rounder skil tech"
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={mysql}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5 shadow rounder skil tech"
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={html}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5  shadow rounder skil tech"
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={css}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5   shadow rounder skil tech"
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={bootstrap}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5  shadow rounder skil tech"
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={js}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5  shadow rounder skil tech "
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={react}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5  shadow rounder skil tech "
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={git}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5  shadow rounder skil tech"
                  />
                </div>
                <div class="col-3 col-md-2 p-lg-4">
                  <img
                    src={github}
                    alt=""
                    class="img-fluid p-2 mt-2  p-md-3 p-lg-5  shadow rounder skil tech"
                  />
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div class="contact container mt-5 mt-lg-4 " id="contact">
              <div class="row ">
                <h1 class="fw-bold text-center ">
                  Contact <span class="text-primary">Me</span>
                </h1>
                <div
                  class="col-md-6 mt-3 mt-md-5"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <h6>
                    I’m a fresher in web development, and I’m excited to get
                    started! Contact me if you have any questions or
                    opportunities.
                  </h6>
                  <div class="mt-5 text-center">
                    <a
                      href="TAMIL ENIYAN S.pdf"
                      class=" btn btn-primary"
                      download="TAMIL ENIYAN S.pdf"
                    >
                      Download Resume
                    </a>
                  </div>
                  <div class="mt-4 text-center">
                    <i class="fa-solid fa-envelope"></i>
                    <a
                      href="mailto:tamileniyan361@gmail.com"
                      class="text-decoration-none text-white ms-2 fw-bold"
                    >
                      tamileniyan361@gmail.com
                    </a>
                  </div>
                  <div class="mt-3 text-center">
                    <i class="fa-solid fa-phone-volume"></i>
                    <a
                      href="tel:+6382402671"
                      class="text-decoration-none text-white ms-2 fw-bold"
                    >
                      6382402671
                    </a>
                  </div>
                  <div class="mt-4 text-center"></div>
                </div>

                <div
                  class="col-md-6 mt-5 mt-md-5"
                  data-aos="fade-left"
                  data-aos-duration="700"
                >
                  <form>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div class="mb-3">
                      <textarea
                        class="form-control"
                        id="message"
                        rows="4"
                        placeholder="Enter Your Message"
                      ></textarea>
                    </div>
                    <button type="" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* FOODER */}
            <div class="container-fluid sticky-buttom  bg-dark mt-5 p-4">
              <div class="text-center">
                <p class="text-white">
                  &copy; 2025 Tamil Eniyan. All rights reserved.
                </p>
                <ul class="list-unstyled justify-content-center">
                  <li>
                    <a href="##">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="##">Terms of Service</a>
                  </li>
                  <li>
                    <a href="##">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </body>
        )}
      </html>
    </div>
  );
}

export default App;
