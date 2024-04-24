import React from "react";
import { Img, Text } from "./..";

export default function BloggerDetailsPagination({ number1 = "1", number2 = "2", next = "Next", ...props }) {
  return (
    <div {...props}>
      <Text
        as="p"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-indigo-900 text-center !font-normal !text-white-A700"
      >
        {number1}
      </Text>
      <Text
        as="p"
        className="ml-5 flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-white-A700 text-center !font-normal !text-indigo-900"
      >
        {number2}
      </Text>
      <div className="ml-10 flex items-center gap-[15px]">
        <Text as="p" className="!text-indigo-900">
          {next}
        </Text>
        <Img src="images/img_arrow_pointing_to_right.svg" alt="arrowpointing" className="h-[16px] w-[16px]" />
      </div>
    </div>
  );
}
