import AnimatedElement from "@/pages/animation";
import Image from "next/image";
import React from "react";

export default function Experience() {
  const startDate = "2022-01-26";
  const calculateYearAndMonths = (startDate) => {
    const start = new Date(startDate);
    const end = new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  const { years, months } = calculateYearAndMonths(startDate);
  const experience = [
    {
      id: 1,
      animationClass: "animated-LR",
      ribbonImg: "/img/company/fav-Glider.svg",
      ribbonHeight: 0,
      ribbonWidth: 150,
      logo: "/img/company/Glider-Logo.svg",
      height: 100,
      width: 150,
      alt: "Glider Technologies",
      name: "Glider Technologies",
      exp: "5 Month",
      role: "Fronted Developer",
      skills:
        "HTML, CSS, SCSS, Figma, Bootstrap, JavaScript, JQuery, Wordpress & Git",
      duration: "Aug 2021 - Dec 2021",
    },
    {
      id: 2,
      animationClass: "animated-RL",
      ribbonImg: "/img/company/fav-Zydni.svg",
      ribbonHeight: 0,
      ribbonWidth: 50,
      logo: "/img/company/Zydni-Logo.png",
      height: 100,
      width: 150,
      alt: "Zydni Software Solutions",
      name: "Zydni Software Solutions",
      exp: "1 Year 9 Month",
      role: "React Developer",
      skills:
        "HTML, CSS, SCSS, Figma, Bootstrap, Material UI, JavaScript, JQuery, Git, React Js & Next Js",
      duration: "Jan 2022 - Aug 2023",
    },
    {
      id: 3,
      animationClass: "animated-LR",
      ribbonImg: "/img/company/fav-Asraaz.png",
      ribbonHeight: 0,
      ribbonWidth: 30,
      logo: "/img/company/Asraaz-Logo.png",
      height: 100,
      width: 150,
      alt: "Asraaz Business Solutions",
      name: "Asraaz Business Solutions",
      exp: "5 Month",
      role: "Frontend Developer",
      skills: "HTML, CSS, SCSS, Figma, Bootstrap, JavaScript, JQuery & Git",
      duration: "Sep 2023 - Feb 2024",
    },
    {
      id: 4,
      animationClass: "animated-RL",
      ribbonImg: "/img/company/fav-Insueta.png",
      ribbonHeight: 0,
      ribbonWidth: 30,
      logo: "/img/company/Insueta-Logo.png",
      height: 100,
      width: 150,
      alt: "Insueta Technologies",
      name: "Insueta Technologies",
      exp: "1 Year 9 Month",
      role: "Frontend Developer",
      skills:
        "HTML, CSS, SCSS, Figma, Bootstrap, Angular Material, JavaScript, JQuery, Git & Angular",
      duration: "Mar 2024 - Nov 2025",
    },
  ];
  return (
    <section className="mx-auto container my-20 px-7" id="exp">
      <AnimatedElement animationClass="animated-BT">
        <div className="text-3xl md:text-6xl sm:text-4xl font-black uppercase text-black mb-10 text-center relative">
          My <span className=" text-primaryColor">Experience</span>
          <span className=" -translate-x-[235px] -translate-y-[0.75rem]  sm:translate-x-[-300px] sm:-translate-y-6 md:translate-x-[-480px]  md:-translate-y-10 lg:translate-x-[-485px]  lg:-translate-y-9 absolute text-6xl sm:text-[5rem] md:text-9xl lg:text-9xl text-primaryColor  opacity-40 -z-10 ">
            {" "}
            career{" "}
          </span>
        </div>
      </AnimatedElement>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 gap-4 ">
          {experience.map((item) => (
            <AnimatedElement key={item.id} animationClass={item.animationClass}>
              <div className="border border-borderLight rounded-lg p-8 w-full  shadow-xl relative h-full bg-white">
                <div className="absolute bg-gradient-to-b from-[#eec443] to-[#d3a12e] right-4 h-12 -top-1 grid place-content-center w-16  after:absolute after:top-12 after:w-full after:border-l-[32px] after:border-l-[#d3a12e]  after:border-r-[32px] after:border-r-[#d3a12e]  after:border-b-[38px] after:border-b-[transparent] before:h-1 before:w-1 before:bg-[#eec443] before:absolute before:right-[-4px] ">
                  <Image
                    src={item.ribbonImg}
                    width={item.ribbonWidth}
                    height={item.ribbonHeight}
                    alt={item.alt}
                  />
                </div>
                <Image
                  src={item.logo}
                  className="mb-3"
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                />
                <h1 className="text-2xl text-primaryColor font-bold uppercase mb-4">
                  {item.name}
                </h1>
                <p className="text-md text-black">
                  <span className="text-primaryColor font-bold ">
                    {" "}
                    Experience{" "}
                  </span>
                  : {item.exp}
                </p>
                <p className="text-md text-black">
                  <span className="text-primaryColor font-bold "> Role </span>:
                  {item.role}
                </p>
                <p className="text-md text-black">
                  <span className="text-primaryColor font-bold "> Skills </span>
                  :{item.skills}
                </p>
                <p className="text-md text-black">
                  <span className="text-primaryColor font-bold ">
                    {" "}
                    Duration{" "}
                  </span>
                  : {item.duration}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
