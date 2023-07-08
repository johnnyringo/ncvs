import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/25 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                <img
                className="flex items-center justify-center w-full h-full max-w-2xl mx-auto"
                src="/img/NCVSLogo1.png"
                alt="Virtual Search Logo"
                width={500}
                height={500}
                />
              </Typography>
              <Typography variant="h1" color="white" className="opacity-80 pt-10">
                Mission
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 pt-10">
              The Mission of the National Center for Virtual Search is to provide operational intelligence and tactical guidance, research, and training for the resolution of lost or missing persons.

              </Typography>
            </div>
            
          </div>
        </div>
      </div>
      
      
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
