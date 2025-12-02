import AnimatedElement from "@/pages/animation";
import Image from "next/image";
import React, { useState } from "react";
export default function About() {
  const [bgPosition, setBgPosition] = useState({ left: 0, top: 0 });

  const handleOrigin = (e) => {
    setBgPosition({
      left: e.pageX - e.currentTarget.offsetLeft,
      top: e.pageY - e.currentTarget.offsetTop,
    });
  };
  return (
    <section className="mx-auto container my-20 px-7" id="about">
      <AnimatedElement animationClass="animated-BT">
        <div className="md:text-6xl text-4xl font-black uppercase text-black mb-10 text-center relative">
          About <span className=" text-primaryColor">Me</span>
          <span className=" -translate-x-56 sm:-translate-x-64 -translate-y-5 sm:-translate-y-8 md:-translate-x-96 md:-translate-y-10 absolute text-7xl sm:text-8xl md:text-9xl text-primaryColor opacity-20 ">
            {" "}
            About{" "}
          </span>
        </div>
      </AnimatedElement>
      <div className="flex flex-col-reverse lg:flex-row ">
        <div className="leading-tight basis-3/5 lg:pr-10 flex flex-col  text-justify">
          <p className="text-lg">
            {" "}
            I am a Frontend Developer with 4+ years of experience building
            clean, modern, and highly interactive user interfaces. My expertise
            lies in crafting responsive, accessible, and visually intuitive
            applications that enhance user engagement and create seamless
            digital experiences. I focus on writing efficient, scalable code
            while maintaining strong attention to design detail and usability.
          </p>
          <p className="text-lg">
            <span className="text-primaryColor block mt-2 font-bold md:text-2xl text-xl">
              {" "}
              Technical Expertise
            </span>{" "}
            I specialize in modern JavaScript ecosystems, with hands-on
            experience in React.js, Next.js, and Angular. I have worked
            extensively with component-driven architecture, state management,
            API integrations, and performance optimization. I enjoy converting
            complex requirements into stable, reusable UI components that are
            easy to maintain and scale. My toolkit includes HTML5, CSS3, SCSS,
            TailwindCSS, Material UI, Bootstrap, and responsive design practices
            that adapt across all devices.
          </p>
          <p className="text-lg">
            <span className="text-primaryColor block mt-2 font-bold md:text-2xl text-xl">
              {" "}
              Collaboration & Problem Solving
            </span>{" "}
            I work closely with designers, backend engineers, and product teams
            to translate wireframes, prototypes, and business goals into fully
            functional features. I believe in building products that not only
            work well—but feel great. I actively participate in code reviews,
            debugging, testing, and performance tuning, ensuring every release
            is high-quality and production-ready. Whether resolving UI
            inconsistencies or improving load times, I enjoy solving real-world
            problems that impact users.
          </p>
          <p className="text-lg">
            <span className="text-primaryColor block mt-2 font-bold md:text-2xl text-xl">
              {" "}
              Impact & Professional Mindset{" "}
            </span>{" "}
            Across my projects, I have successfully contributed to improved
            usability, smoother workflows, and measurable growth in user
            satisfaction. I’m passionate about continual learning, keeping up
            with the latest frontend standards, and pushing my skills through
            new challenges. For me, great frontend development is the balance of
            functionality, performance, and design — and I strive to bring that
            balance into every project I work on.
          </p>
          <a
            href="/img/personal/Abrar Ul Haque K.pdf"
            target="_blank"
            className="hover_btn relative mt-3 bg-white px-[24px] py-3 overflow-hidden w-fit cursor-pointer border border-primaryColor rounded-md"
            onMouseEnter={handleOrigin}
            onMouseLeave={handleOrigin}
          >
            <span className="hover_label relative font-bold uppercase z-10 text-primaryColor">
              Resume
            </span>
            <span
              className="hover_bg absolute top-0 left-0 min-w-[255%] min-h-[255%] aspect-square bg-[#72b63b] rounded-[50%]"
              style={{
                left: `${bgPosition.left}px`,
                top: `${bgPosition.top}px`,
              }}
            ></span>
          </a>
        </div>

        <div className="  basis-2/5 relative lg:p-4 py-[200px]  ">
          <div className=" line-animation"></div>
          <Image
            src="/img/icons/html-1.svg"
            className="img-animation anime-1  m-auto  !w-8 sm:!w-10 !-top-[90px]  !-left-[250px] sm:!-left-[301px] sm:!-top-[102px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/css-3 (1).svg"
            className="img-animation anime-2  m-auto  !w-8 sm:!w-10 !-left-[170px] sm:!-left-[190px] !-top-[200px] sm:!-top-[245px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/sass-1 (2).svg"
            className="img-animation anime-1  m-auto  !w-8 sm:!w-10  !-top-[260px] sm:!-top-[300px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/bootstrap-5-1.svg"
            className="img-animation anime-2  m-auto  !w-10 sm:!w-12 !left-[170px] !-top-[200px] sm:!-top-[245px] sm:!left-[185px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/tailwind-css-2.svg"
            className="img-animation anime-1  m-auto  !w-8 sm:!w-10 !left-[240px] sm:!left-[308px] !-top-[80px] sm:!-top-[100px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/figma-5.svg"
            className="img-animation anime-2  m-auto  !w-11 sm:!w-12 !left-[240px] sm:!left-[315px] !top-7 sm:!top-9"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/jquery.svg"
            className="img-animation anime-1  m-auto  !w-11 sm:!w-12 !left-[220px] sm:!left-[280px] !top-[140px] sm:!top-[180px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/git-icon.svg"
            className="img-animation anime-2  m-auto  !w-8 sm:!w-10 !left-[130px] sm:!left-[160px] !top-[240px] sm:!top-[260px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/angular-icon-1.svg"
            className="img-animation anime-1  m-auto  !w-8 sm:!w-10  !top-[280px] sm:!top-[310px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/react-2 (1).svg"
            className="img-animation anime-2  m-auto  !w-8 sm:!w-10 !-left-[130px] sm:!-left-[150px] !top-[230px] sm:!top-[260px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/logo-javascript.svg"
            className="img-animation anime-1  m-auto  !w-8 sm:!w-10 !-left-[220px] sm:!-left-[260px] !top-[150px] sm:!top-[180px]"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          <Image
            src="/img/icons/material-ui-1.svg"
            className="img-animation anime-2  m-auto  !w-8 sm:!w-10 !-left-[250px] sm:!-left-[321px] !top-7 sm:!top-9"
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
          {/* <Image src="/img/icons/npm-square-red-1.svg" className='img-animation  m-auto  !w-8 sm:!w-10 !-left-[] sm:!-left-[350px] !-top-[200px]' layout='fill' objectFit='contain' alt="imgss" loading="lazy" /> */}
          <Image
            src="/img/icons/next-js (1).svg"
            className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] !h-fit m-auto absolute !w-[150px] "
            layout="fill"
            objectFit="contain"
            alt="imgss"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
