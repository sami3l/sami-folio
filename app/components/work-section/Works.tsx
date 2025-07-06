import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

 const works = [
    {
      title: "QuizApp",
      gitLink: "https://github.com/sami3l/QuizApp_Dockerise", // Update with your actual repo link
      liveLink: "",
      about:
        "Full-stack web application for creating, managing, and participating in online quizzes. Features secure JWT authentication, admin dashboard for quiz management, real-time feedback, and analytics. Built with modern web technologies for optimal user experience.",
      stack: ["Spring Boot", "ReactJS", "MongoDB Atlas", "JWT", "Swagger", "Docker", "Azure DevOps"],
      img: "/ResultatQuiz.png", // You'll need to add this image
    },
    {
      title: "Food Allergy Detector",
      gitLink: "https://github.com/sami3l/Foodallergy_MobileApp", // Update with your actual repo link
      liveLink: "",
      about:
        "AI-powered mobile solution for instant food safety evaluation through barcode scanning. Provides personalized allergen risk assessment, color-coded safety alerts, and scan history tracking to help users with food allergies make safer dietary choices.",
      stack: ["Spring Boot", "Android (Kotlin)", "MongoDB", "JWT", "OpenFoodFacts API", "MVVM"],
      img: "/IMG-20250520-WA0023.jpg", // You'll need to add this image
    },
    {
      title: "GuideMalvoyant",
      gitLink: "https://github.com/sami3l/ProjetAiMalvoyant_V2", // Update with your actual repo link
      liveLink: "",
      about:
        "AI-powered navigation assistant for the visually impaired. Features real-time object detection with TensorFlow Lite, voice-guided GPS navigation, haptic feedback, and offline maps. Privacy-first approach with all AI inference running locally on device.",
      stack: ["Android (Kotlin)", "TensorFlow Lite", "CameraX", "OSMDroid", "Material Design 3", "GPS"],
      img: "/guide-malvoyant.svg", // You'll need to add this image
    },
    {
      title: "OCP StockManagement",
      gitLink: "https://github.com/sami3l/StockManagement",
      liveLink: "",
      about:
        "Developed a web app for inventory management, enabling efficient product, category, and user tracking with intuitive CRUD operations. Ensured data security and consistency, improving inventory accuracy and workflow efficiency for businesses.",
      stack: ["next.js", "typescript", "express.js", "tailwindcss", "Prisma ORM"],
      img: "/offset-folio.svg",
    },
    {
      title: "Hotel Management System",
      gitLink: "https://github.com/sami3l/HotelBookingBackend",
      liveLink: "",
      about:
        "Developed a back-office hotel management system to streamline operations, including reservations, room management, and guest data tracking, enhancing efficiency and user experience.",
      stack: [".NET", "EntityFrameworkCore", "SQL Server", "Identity"],
      img: "/shortly.svg",
    },
  ];
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
          owner={work.owner}
        />
      ))}

      <Timeline />
    </section>
  );
}
