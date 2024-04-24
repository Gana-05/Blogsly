import React from "react";
import { Img, Heading } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="container-sm flex items-center justify-between gap-5 self-start md:flex-col md:p-5">
        <div className="flex w-[68%] items-center justify-between gap-5 md:w-full sm:flex-col">
          <Img
            src="images/img_header_logo.png"
            alt="headerlogo_one"
            className="h-[24px] w-[19%] self-end object-cover sm:w-full"
          />
          <div className="flex w-[53%] flex-col items-start sm:w-full">
            <ul className="flex flex-wrap gap-[29px]">
              <li>
                <a href="#" className="self-start">
                  <Heading as="h6" className="text-center tracking-[0.12px] !text-indigo-900_01">
                    Home
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer self-start">
                  <Heading
                    as="h6"
                    className="text-center tracking-[0.12px] !text-indigo-200_01 hover:!text-indigo-900_01"
                  >
                    Podcast
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer self-end">
                  <Heading
                    as="h6"
                    className="text-center tracking-[0.12px] !text-indigo-200_01 hover:!text-indigo-900_01"
                  >
                    Blog
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer self-start">
                  <Heading
                    as="h6"
                    className="text-center tracking-[0.12px] !text-indigo-200_01 hover:!text-indigo-900_01"
                  >
                    About
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer self-start">
                  <Heading
                    as="h6"
                    className="text-center tracking-[0.12px] !text-indigo-200_01 hover:!text-indigo-900_01"
                  >
                    Contact
                  </Heading>
                </a>
              </li>
            </ul>
            <div className="h-px w-[13%] bg-indigo-900_01" />
          </div>
        </div>
        <Img src="images/img_search.svg" alt="search_one" className="h-[30px] w-[30px] md:w-full" />
      </div>
    </header>
  );
}
