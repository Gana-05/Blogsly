import React from "react";
import { Text, Img, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="container-xs mt-[30px] flex flex-col items-center gap-[66px] md:p-5 sm:gap-[33px]">
        <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
          <div className="flex w-[15%] flex-col items-start gap-2 md:w-full">
            <Img src="images/img_footer_logo.png" alt="footerlogo_one" className="h-[33px] w-[89%] object-cover" />
            <div className="flex items-center gap-2.5">
              <Img src="images/img_heart_3_1.svg" alt="heart3one_one" className="h-[20px] w-[20px] self-start" />
              <Text as="p" className="!font-medium !text-white-A700">
                Build with heart
              </Text>
            </div>
          </div>
          <ul className="flex w-[43%] flex-wrap justify-between gap-5 md:w-full">
            <li>
              <a href="Home" target="_blank" rel="noreferrer" className="self-start">
                <Text as="p" className="!text-white-A700">
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a href="Podcast" target="_blank" rel="noreferrer" className="self-start">
                <Text as="p" className="!text-white-A700">
                  Podcast
                </Text>
              </a>
            </li>
            <li>
              <a href="Blog" target="_blank" rel="noreferrer" className="self-end">
                <Text as="p" className="!text-white-A700">
                  Blog
                </Text>
              </a>
            </li>
            <li>
              <a href="About" target="_blank" rel="noreferrer" className="self-start">
                <Text as="p" className="!text-white-A700">
                  About
                </Text>
              </a>
            </li>
            <li>
              <a href="Contact" target="_blank" rel="noreferrer" className="self-start">
                <Text as="p" className="!text-white-A700">
                  Contact
                </Text>
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-[19px]">
            <Heading as="h6" className="text-center !text-white-A700">
              Follow Me on
            </Heading>
            <div className="flex gap-5 self-start">
              <Img src="images/img_instagram_3_1.svg" alt="instagram3one" className="h-[25px] w-[25px]" />
              <Img src="images/img_whatsapp_2_1.svg" alt="whatsapp2one" className="h-[25px] w-[25px]" />
              <Img src="images/img_link.svg" alt="link_one" className="h-[25px] w-[25px]" />
            </div>
          </div>
        </div>
        <Text size="xs" as="p" className="!text-white-A700">
          Powered by Blogsly
        </Text>
      </div>
    </footer>
  );
}
