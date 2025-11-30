"use client";
import { useState, useEffect, useRef } from "react";

const categories = [
  {
    label: "D2C",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Nykaa_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Flipkart_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Fila_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/The_Souled_Store_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Bewakoof_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Snapdeal_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Dream11_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Godrej_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Cityflo_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Plum_logo.png",
    ],
  },
  {
    label: "Tech",
    logos: [
      "/Tech_logo/Frame 427321912.png",
      "/Tech_logo/6 5.png",
      "/Tech_logo/1 441.png",
      "/Tech_logo/2 7002.png",
      "/Tech_logo/3 8.png",
      "/Tech_logo/4 1.png",
      "/Tech_logo/5 7.png",
      "/Tech_logo/7 7.png",
      "/Tech_logo/8 10.png",
      "/Tech_logo/9 7.png",
      "/Tech_logo/10 1.png",
      "/Tech_logo/11 1.png",
      "/Tech_logo/12 1.png",
      "/Tech_logo/13 1.png",
      "/Tech_logo/14 41.png",
      "/Tech_logo/15 1.png",
      "/Tech_logo/16 1.png",
      "/Tech_logo/17 1.png",
      "/Tech_logo/18 1.png",
      "/Tech_logo/19 1.png",
      "/Tech_logo/20 1.png",
      "/Tech_logo/21 1.png",
      "/Tech_logo/22 1.png",
      "/Tech_logo/23 1.png",
      "/Tech_logo/24 1.png",
      "/Tech_logo/25 1.png",
      "/Tech_logo/26 1.png",
      "/Tech_logo/27 2.png",
      "/Tech_logo/28 1.png",
      "/Tech_logo/29 1.png",
      "/Tech_logo/30 1.png",
      "/Tech_logo/31 1.png",
      "/Tech_logo/32 2.png",
      "/Tech_logo/33 1.png",
      "/Tech_logo/34 1.png",
      "/Tech_logo/35 1.png",
      "/Tech_logo/36 1.png",
      "/Tech_logo/37 1.png",

    ],
  },
  {
    label: "SaaS",
    logos: [
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Shopify_logo_2018.svg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Tesla_Motors.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Slack_icon_2019.svg",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/HubSpot_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Mailchimp_Logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Airtable_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/0/04/Notion_app_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Webflow_logo_2023.svg",
    ],
  },
];

export default function ProcessSlider() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Get only Tech logos
  const techLogos = categories[1].logos; // Tech is at index 1

  const pause = () => intervalRef.current && clearInterval(intervalRef.current);
  const resume = () => {
    // You can add auto-scroll logic here if needed
  };

  return (
    <div className="w-full">
      {/* Logos - Full Width */}
      <div
        onMouseEnter={pause}
        onMouseLeave={resume}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-y-10 gap-x-6 px-6 sm:px-10 md:px-20"
      >
        {techLogos.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center h-12 sm:h-14 md:h-16"
          >
            <img
              src={src}
              alt={`Logo ${i + 1}`}
              className="max-h-10 sm:max-h-12 md:max-h-14 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}