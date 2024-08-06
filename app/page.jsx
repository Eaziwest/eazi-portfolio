"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const downloadCv = () => {
  const link = document.createElement('a');
  link.href = '/assets/OLUWATOBI-ABRAHAM_ISRAEL_TEMILOLUWA_RESUME1.pdf';
  link.download = 'Israel_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">𝑫𝒆𝒗𝑶𝒑𝒔</span> <br />
            <span className="text-xl">𝑪𝒚𝒃𝒆𝒓-𝑺𝒆𝒄𝒖𝒓𝒊𝒕𝒚</span>
            <h1 className="h1 mb-6">
              𝑯𝒆𝒍𝒍𝒐, 𝑰'𝒎 <br />{" "}
              <span className="text-accent">𝑶.𝑨. <br /> 𝑰𝑺𝑹𝑨𝑬𝑳 𝑻.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              𝑰 𝒂𝒎 𝒂 𝟓𝟎𝟎-𝒍𝒆𝒗𝒆𝒍 𝑪𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝑬𝒏𝒈𝒊𝒏𝒆𝒆𝒓𝒊𝒏𝒈 𝒔𝒕𝒖𝒅𝒆𝒏𝒕 𝒂𝒕 𝑹𝒆𝒅𝒆𝒆𝒎𝒆𝒓’𝒔 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚 𝒘𝒊𝒕𝒉 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆 𝒊𝒏 𝒄𝒚𝒃𝒆𝒓𝒔𝒆𝒄𝒖𝒓𝒊𝒕𝒚, 𝑽𝑴 𝒖𝒔𝒂𝒈𝒆, 𝒂𝒏𝒅 𝒂𝒑𝒑/𝒘𝒆𝒃 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕. 𝑰 𝒂𝒔𝒑𝒊𝒓𝒆 𝒕𝒐 𝒃𝒆𝒄𝒐𝒎𝒆 𝒂 𝑴𝒊𝒄𝒓𝒐𝒔𝒐𝒇𝒕 𝑴𝑽𝑷.
            </p>
            <div className="flex items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={downloadCv}
              >
                <span className="text-white">Download CV</span>
                <FiDownload className="text-xl text-white" />
              </Button>
              <Socials
                containerStyles="flex gap-6"
                iconStyles="w-12 h-12 border border-accent rounded-full flex
                justify-center items-center text-accent text-base hover:bg-accent
                hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
