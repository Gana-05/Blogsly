import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, TextArea, Input } from "../../components";
import Header from "../../components/Header";

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>Blogsly - Blog Podcast</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[105px] bg-white-A700 md:gap-[78px] sm:gap-[52px]">
        <Header className="flex items-center justify-center self-stretch bg-white-A700 py-6 sm:py-5" />
        <div className="mx-auto flex w-full max-w-[1103px] md:p-5">
          <div className="flex w-full flex-col items-center gap-[39px]">
            <div className="flex flex-col items-center gap-[5px]">
              <a href="#">
                <Heading size="xl" as="h1" className="!text-blue_gray-600">
                  Contact us
                </Heading>
              </a>
              <Text as="p">Complete the form to contact us</Text>
            </div>
            <div className="flex items-start gap-[29px] self-stretch md:flex-col">
              <div className="flex w-[29%] flex-col items-start gap-[19px] md:w-full">
                <Heading size="xl" as="h2" className="!text-blue_gray-600">
                  Info
                </Heading>
                <div className="flex flex-col gap-[18px] self-stretch">
                  <div className="flex items-center gap-2.5">
                    <Img src="images/img_call.svg" alt="call_one" className="h-[20px] w-[20px]" />
                    <Text as="p">01234567890</Text>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Img src="images/img_lock.svg" alt="lock_one" className="h-[20px] w-[20px] self-start" />
                    <Text as="p">hello@gmail.com</Text>
                  </div>
                  <div className="flex items-start gap-2">
                    <Img src="images/img_pin_1.svg" alt="pinone_one" className="mt-[5px] h-[20px]" />
                    <Text as="p" className="w-[94%] leading-[30px]">
                      Massachusetts Ave NW, Washington, DC 20036
                    </Text>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-1 flex-col items-start justify-center gap-[30px] rounded-[10px] bg-white-A700 p-[26px] shadow-xl md:self-stretch sm:p-5">
                <div className="mt-[17px] flex gap-[25px] self-stretch md:flex-col">
                  <Input
                    shape="round"
                    type="text"
                    name="name"
                    placeholder={`Your Name`}
                    className="w-full font-light sm:px-5"
                  />
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Your Email`}
                    className="w-full font-light sm:px-5"
                  />
                </div>
                <Input
                  shape="round"
                  name="field_one"
                  placeholder={`Your Subject`}
                  className="self-stretch font-light sm:px-5"
                />
                <TextArea
                  shape="round"
                  name="field_three"
                  placeholder={`Description`}
                  className="self-stretch font-light text-gray-400 sm:px-5 sm:pb-5"
                />
                <Button color="indigo_900_01" size="5xl" shape="round" className="mb-[17px] min-w-[190px] sm:px-5">
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-end justify-center self-stretch bg-gray-600_01 py-[33px] sm:py-5">
          <div className="container-xs mt-[30px] flex flex-col items-center gap-[66px] md:p-5 sm:gap-[33px]">
            <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
              <div className="flex w-[74%] items-center justify-between gap-5 md:w-full md:flex-col">
                <div className="flex w-[20%] flex-col items-start gap-2 md:w-full">
                  <Img
                    src="images/img_footer_logo.png"
                    alt="footerlogo_one"
                    className="h-[33px] w-[89%] object-cover"
                  />
                  <div className="flex items-center gap-2.5">
                    <Img src="images/img_heart_3_1.svg" alt="heart3one_one" className="h-[20px] w-[20px] self-start" />
                    <Text as="p" className="!font-medium !text-white-A700">
                      Build with heart
                    </Text>
                  </div>
                </div>
                <ul className="flex w-[58%] flex-wrap justify-between gap-5 md:w-full">
                  <li>
                    <a href="#" className="self-start">
                      <Text as="p" className="!text-white-A700">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-start">
                      <Text as="p" className="!text-white-A700">
                        Podcast
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-end">
                      <Text as="p" className="!text-white-A700">
                        Blog
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-start">
                      <Text as="p" className="!text-white-A700">
                        About
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="self-start">
                      <Text as="p" className="!text-white-A700">
                        Contact
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
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
      </div>
    </>
  );
}
