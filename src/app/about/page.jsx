"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bioImage from "../../../public/bio.jpeg";

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

    const buttonClick = (buttonType) => {
        if (buttonType === 'theSidelineCode') {
            window.open('https://github.com/dani-marinescu7/the-sideline', '_blank');
        } else if (buttonType === 'theSidelineLive' || buttonType === 'onlineShopLive') {
            toast("Not live yet.");
        } else if (buttonType === 'portofolioCode') {
            window.open('https://github.com/dani-marinescu7/portofolio-website', '_blank');
        } else if (buttonType === 'portofolioLive') {
            window.location.href = '/';
        } else if (buttonType === 'onlineShopCode') {
            window.open('https://github.com/dani-marinescu7/online-shop', '_blank');
        }
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                <ToastContainer />
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center min-w-[600px] lg:ml-[-100px]">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src={bioImage}
                            alt=""
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        {/* BIOGRAPHY TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg">
                            Passionate web developer with comprehensive knowledge in both backend and frontend technologies.
                            Dedicated to crafting seamless digital experiences, I bring creativity and
                            problem-solving skills to every project. Excited about innovation and
                            committed to continuous learning, I thrive in collaborative environments where
                            I can contribute my expertise and grow as a professional.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">
              Navigate the symphony of challenges with the melody of determination, and let the rhythm of passion guide your journey
            </span>
                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-8 justify-center min-w-[600px] lg:ml-[-100px]" ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                SCSS
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                MongoDB
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                PostgreSQL
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Java
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Express.js
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Spring Boot
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Redux
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Docker
                            </div>
                            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Git
                            </div>
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48 min-w-[600px] lg:ml-[-100px]"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-58">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* PROJECT TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        The Sideline
                                    </div>
                                    {/* PROJECT DESCRIPTION */}
                                    <div className="p-3 text-sm italic">
                                        Built a dynamic social media app catering to football enthusiasts,
                                        utilizing the MERN stack. This compact application integrates seamlessly with APIs,
                                        offering quick updates on news and standings,
                                        showcasing my knack for creating user-centric solutions.{" "}
                                    </div>
                                    {/* BUTTONS */}
                                    <div className="flex justify-between space-x-8">
                                        {/* CODE */}
                                        <button onClick={() => buttonClick('theSidelineCode')} className="p-1 rounded bg-white text-sm font-semibold flex-grow">
                                            Code
                                        </button>
                                        {/* LIVE */}
                                        <button onClick={() => buttonClick('theSidelineLive')} className="p-1 rounded bg-white text-sm font-semibold flex-grow">
                                            Live
                                        </button>
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-58">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* PROJECT TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Portofolio App
                                    </div>
                                    {/* PROJECT DESC */}
                                    <div className="p-3 text-sm italic">
                                        I used NextJS and Vercel to create and deploy my online portfolio,
                                        transforming it into a convenient showcase of my skills.
                                        This serves as a simplified way for recruiters to explore my work
                                        and allows me the flexibility to update my "CV" even after submission.{" "}
                                    </div>
                                    {/* BUTTONS */}
                                    <div className="flex justify-between space-x-8">
                                        {/* CODE */}
                                        <button onClick={() => buttonClick('portofolioCode')} className="p-1 rounded bg-white text-sm font-semibold flex-grow">
                                            Code
                                        </button>
                                        {/* LIVE */}
                                        <button onClick={() => buttonClick('portofolioLive')} className="p-1 rounded bg-white text-sm font-semibold flex-grow">
                                            Live
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-58">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* PROJECT TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Online Shop{" "}
                                    </div>
                                    {/* PROJECT DESC */}
                                    <div className="p-3 text-sm italic">
                                        Crafted an efficient online shopping platform using Java for the backend and React for the frontend.
                                        Developed separate interfaces for customers to browse and shop seamlessly,
                                        while providing store owners with a dedicated portal for product management,
                                        reporting, and transaction tracking.{" "}
                                    </div>
                                    {/* BUTTONS */}
                                    <div className="flex justify-between space-x-8">
                                        {/* CODE */}
                                        <button onClick={() => buttonClick('onlineShopCode')} className="p-1 rounded bg-white text-sm font-semibold flex-grow">
                                            Code
                                        </button>
                                        {/* LIVE */}
                                        <button onClick={() => buttonClick('onlineShopLive')} className="p-1 rounded bg-white text-sm font-semibold flex-grow">
                                            Live
                                        </button>
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;