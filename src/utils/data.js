import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const educationExperience = [
  {
    name: "VIT University",
    projects: "B.Tech  (CGPA: 8.82/10.0)",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "MANAV RACHNA INTERNATIONAL SCHOOL",
    projects: "Grade 12 (Percentage: 93.6/100)",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "MANAV RACHNA INTERNATIONAL SCHOOL",
    projects: "Grade 10(CGPA: 9.0/10.0)",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Experienced Software Engineer at Optum with a passion for problem solving and expertise in data structures and algorithms.",
  "Successfully delivered scalable solutions for complex challenges, optimising efficiency and performance. Committed to continuous learning, leveraging innovative technologies to drive impactful results."
];

export const workExp = [
  {
    place: "OPTUM GLOBAL SOLUTIONS",
    tenure: "July 2021 - Present",
    role: "Software Engineer",
    detail:
      "Technology Used : React, Node, Express, MongoDB, Figma ."+
      "Collaborated on a broker sales platform within the Renewals team at United Health Care."
  },
  {
    place: "QUINBAY TECHNOLOGIES",
    tenure: "Jan 2021 - July 2021",
    role: "Software Engineering Intern",
    detail:
      "Technology Used : NLP, Data Scraping, Data Analysis ."+
      "Successfully implemented multiple pre-trained models to develop the backend for chatbots."
  },
  // {
  //   place: "Global Solution",
  //   tenure: "Aug 2014 - Sep 2016",
  //   role: "Sr. Product Designer",
  //   detail:
  //     "Technology Used : NLP, Data Scraping, Data Analysis",
  // },
];

export const comments = [
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  }
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
