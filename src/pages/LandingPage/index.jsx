import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Input, Text, Heading } from "../../components";
import Footer from "../../components/Footer";

const data = [
  { image: "images/img_rectangle_9.png" },
  { image: "images/img_rectangle_9_207x233.png" },
  { image: "images/img_rectangle_9_1.png" },
  { image: "images/img_rectangle_9_2.png" },
];
const data1 = [
  { image: "images/img_rectangle_14_96x96.png" },
  { image: "images/img_rectangle_14_1.png" },
  { image: "images/img_rectangle_14_2.png" },
  { image: "images/img_rectangle_14_3.png" },
];
const data2 = [
  { writing: "Writing", groupseventyfiv: "1" },
  { writing: "Working", groupseventyfiv: "5" },
  { writing: "Podcaster", groupseventyfiv: "3" },
];

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>Blogsly - Blog Podcast</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[109px] bg-white-A700 md:gap-[81px] sm:gap-[54px]">
        <header className="flex items-center justify-center self-stretch bg-white-A700 py-6 sm:py-5">
          <div className="container-sm flex items-center justify-between gap-5 self-start md:flex-col md:p-5">
            <div className="flex w-[68%] items-center justify-between gap-5 md:w-full sm:flex-col">
              <Img
                src="images/img_header_logo.png"
                alt="headerlogo_one"
                className="h-[24px] w-[19%] self-start object-cover sm:w-full"
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
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
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
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
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
        <div className="mx-auto flex w-full max-w-[1111px] flex-col items-center gap-[159px] md:gap-[119px] md:p-5 sm:gap-[79px]">
          <div className="flex w-[93%] flex-col items-center md:w-full">
            <div className="flex items-start gap-[43px] self-stretch md:flex-col">
              <Img src="images/img_brand_1.svg" alt="brandone_one" className="mt-[66px] h-[61px] w-[61px] md:w-full" />
              <div className="mb-9 flex flex-1 flex-col items-center gap-[30px] md:self-stretch">
                <Heading size="3xl" as="h1" className="text-center !font-merriweather">
                  Share via writing and podcasts, hope you enjoy
                </Heading>
                <Text size="lg" as="p" className="w-[77%] text-center leading-[35px] !text-gray-600 md:w-full">
                  Increase your knowledge by reading new things and I will share whatever I know for you, as long as I
                  enjoy it
                </Text>
              </div>
              <Img src="images/img_television.svg" alt="television_one" className="h-[61px] w-[61px] md:w-full" />
            </div>
            <div className="relative mt-[-4px] flex gap-[25px]">
              <Button
                color="indigo_900_01"
                size="4xl"
                className="min-w-[221px] rounded-[35px] tracking-[0.12px] shadow-xs sm:px-5"
              >
                Read More
              </Button>
              <Button
                color="indigo_200"
                size="4xl"
                variant="outline"
                className="min-w-[271px] rounded-[35px] tracking-[0.12px] sm:px-5"
              >
                Listen to Podcasts
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[100px] self-stretch md:gap-[75px] sm:gap-[50px]">
            <div className="flex flex-col gap-[17px]">
              <div className="flex items-center justify-between gap-5 sm:flex-col">
                <div className="flex items-center gap-[18px] sm:flex-col">
                  <div className="flex flex-col items-center rounded-[38px] bg-gray-300 p-[13px]">
                    <Img src="images/img_podcast_1.svg" alt="podcastone_one" className="h-[50px] w-[50px]" />
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Heading size="xl" as="h2" className="text-center !font-merriweather !font-black">
                      Latest Podcasts{" "}
                    </Heading>
                    <Text size="lg" as="p" className="text-center tracking-[0.12px] !text-gray-600">
                      Get started on latest episodes
                    </Text>
                  </div>
                </div>
                <a href="#">
                  <Heading size="xs" as="h3" className="tracking-[0.12px] !text-indigo-900">
                    See all podcasts
                  </Heading>
                </a>
              </div>
              <div className="flex gap-[22px] md:flex-col">
                {data.map((d, index) => (
                  <div
                    key={"listoverflowmen" + index}
                    className="flex w-full flex-col justify-center gap-[15px] rounded-[5px] bg-white-A700 p-[13px] shadow-sm"
                  >
                    <div className="relative mt-[7px] h-[207px] md:h-auto">
                      <Img src={d.image} alt="image" className="h-[207px] w-full rounded-[5px] object-cover" />
                      <Button
                        color="gray_600_4f"
                        shape="circle"
                        className="absolute left-0 right-0 top-[30%] m-auto w-[72px] !rounded-[36px]"
                      >
                        <Img src="images/img_overflow_menu.svg" />
                      </Button>
                    </div>
                    <div className="mb-[5px] flex flex-col items-start gap-2.5">
                      <Heading size="s" as="h4" className="!font-merriweather">
                        The secrets of writing a good book
                      </Heading>
                      <Text size="xs" as="p">
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-[29px] md:flex-col">
              <div className="flex flex-1 flex-col items-end gap-[50px] md:self-stretch">
                <div className="flex flex-col gap-[50px] self-stretch">
                  <div className="flex flex-1 flex-col gap-[29px]">
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex items-center justify-between gap-5 sm:flex-col">
                        <div className="flex w-[33%] items-center justify-center gap-3.5 sm:w-full">
                          <Img
                            src="images/img_ellipse_5.png"
                            alt="by_jhone"
                            className="h-[70px] w-[70px] rounded-[50%]"
                          />
                          <div className="flex flex-col items-start gap-[3px]">
                            <Heading as="h6" className="text-center !font-semibold !text-blue_gray-600">
                              By Jhone Leonardo
                            </Heading>
                            <Text size="xs" as="p" className="text-center">
                              12 September, 2020
                            </Text>
                          </div>
                        </div>
                        <Text size="xs" as="p" className="text-center">
                          <span className="text-blue_gray-600">Category&nbsp;</span>
                          <span className="font-merriweather text-lg font-black text-pink-300">Writing</span>
                        </Text>
                      </div>
                      <Heading size="2xl" as="h1" className="!font-merriweather italic tracking-[0.12px]">
                        Consistent way of working to train yourself
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start">
                      <Img
                        src="images/img_rectangle_11.png"
                        alt="image"
                        className="h-[390px] w-full rounded-[5px] object-cover md:h-auto"
                      />
                      <Text as="p" className="mt-[30px] leading-[30px] !text-blue_gray-900">
                        We all know that every person has his or her own desire to work, but do you know that we can
                        actually be consistent in making works if we want, now in this article I want to invite all of
                        you to learn to be consistent in creating.
                      </Text>
                      <div className="mt-[19px] flex w-[65%] justify-between gap-5 md:w-full sm:flex-col">
                        <div className="flex items-center gap-2.5">
                          <Button color="light_blue_50" size="xl" className="w-[55px] rounded-[27px]">
                            <Img src="images/img_clock_1.svg" />
                          </Button>
                          <Text size="xs" as="p" className="mb-[17px] self-end text-center !text-black-900">
                            5 minutes ago
                          </Text>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Button color="lime_50" size="xl" className="w-[55px] rounded-[27px]">
                            <Img src="images/img_like_1.svg" />
                          </Button>
                          <Text size="xs" as="p" className="text-center !text-black-900">
                            12 Like
                          </Text>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Button color="red_50" size="xl" className="w-[55px] rounded-[27px]">
                            <Img src="images/img_send_1_1.svg" />
                          </Button>
                          <Text size="xs" as="p" className="text-center !text-black-900">
                            Share
                          </Text>
                        </div>
                      </div>
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <Button
                          color="indigo_900_26"
                          size="5xl"
                          shape="round"
                          rightIcon={
                            <Img
                              src="images/img_arrowpointingtoright_1.svg"
                              alt="arrow-pointing-to-right 1"
                              className="h-[25px] w-[25px]"
                            />
                          }
                          className="mt-5 min-w-[255px] gap-[19px] font-bold tracking-[0.12px] sm:px-5"
                        >
                          Continue Reading
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[29px]">
                    <div className="flex items-center justify-between gap-5 sm:flex-col">
                      <div className="flex w-[33%] items-center justify-center gap-3.5 sm:w-full">
                        <Img
                          src="images/img_ellipse_5.png"
                          alt="circleimage"
                          className="h-[70px] w-[70px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-[3px]">
                          <Heading as="h6" className="text-center !font-semibold !text-blue_gray-600">
                            By Jhone Leonardo
                          </Heading>
                          <Text size="xs" as="p" className="text-center">
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text size="xs" as="p" className="text-center">
                        <span className="text-blue_gray-600">Category&nbsp;</span>
                        <span className="font-merriweather text-lg font-black text-pink-300">Writing</span>
                      </Text>
                    </div>
                    <Heading size="2xl" as="h1" className="!font-merriweather italic tracking-[0.12px]">
                      Consistent way of working to train yourself
                    </Heading>
                    <div className="flex flex-col items-start">
                      <Img
                        src="images/img_rectangle_11_390x728.png"
                        alt="image"
                        className="h-[390px] w-full rounded-[5px] object-cover md:h-auto"
                      />
                      <Text as="p" className="mt-[30px] leading-[30px] !text-blue_gray-900">
                        We all know that every person has his or her own desire to work, but do you know that we can
                        actually be consistent in making works if we want, now in this article I want to invite all of
                        you to learn to be consistent in creating.
                      </Text>
                      <div className="mt-[19px] flex w-[65%] justify-between gap-5 md:w-full sm:flex-col">
                        <div className="flex items-center gap-2.5">
                          <Button color="light_blue_50" size="xl" className="w-[55px] rounded-[27px]">
                            <Img src="images/img_clock_1.svg" />
                          </Button>
                          <Text size="xs" as="p" className="mb-[17px] self-end text-center !text-black-900">
                            5 minutes ago
                          </Text>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Button color="lime_50" size="xl" className="w-[55px] rounded-[27px]">
                            <Img src="images/img_like_1.svg" />
                          </Button>
                          <Text size="xs" as="p" className="text-center !text-black-900">
                            12 Like
                          </Text>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Button color="red_50" size="xl" className="w-[55px] rounded-[27px]">
                            <Img src="images/img_send_1_1.svg" />
                          </Button>
                          <Text size="xs" as="p" className="text-center !text-black-900">
                            Share
                          </Text>
                        </div>
                      </div>
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <Button
                          color="indigo_900_26"
                          size="5xl"
                          shape="round"
                          rightIcon={
                            <Img
                              src="images/img_arrowpointingtoright_1.svg"
                              alt="arrow-pointing-to-right 1"
                              className="h-[25px] w-[25px]"
                            />
                          }
                          className="mt-5 min-w-[255px] gap-[19px] font-bold tracking-[0.12px] sm:px-5"
                        >
                          Continue Reading
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start">
                    <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                      <div className="flex w-[33%] items-center justify-center gap-3.5 sm:w-full">
                        <Img
                          src="images/img_ellipse_5.png"
                          alt="circleimage"
                          className="h-[70px] w-[70px] rounded-[50%]"
                        />
                        <div className="flex flex-col items-start gap-[3px]">
                          <Heading as="h6" className="text-center !font-semibold !text-blue_gray-600">
                            By Jhone Leonardo
                          </Heading>
                          <Text size="xs" as="p" className="text-center">
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Text size="xs" as="p" className="text-center">
                        <span className="text-blue_gray-600">Category&nbsp;</span>
                        <span className="font-merriweather text-lg font-black text-pink-300">Writing</span>
                      </Text>
                    </div>
                    <Heading size="2xl" as="h1" className="mt-[30px] !font-merriweather italic tracking-[0.12px]">
                      Consistent way of working to train yourself
                    </Heading>
                    <Img
                      src="images/img_rectangle_11_1.png"
                      alt="image"
                      className="mt-[29px] h-[390px] w-full rounded-[5px] object-cover md:h-auto"
                    />
                    <Text as="p" className="mt-[30px] leading-[30px] !text-blue_gray-900">
                      We all know that every person has his or her own desire to work, but do you know that we can
                      actually be consistent in making works if we want, now in this article I want to invite all of you
                      to learn to be consistent in creating.
                    </Text>
                    <div className="mt-[19px] flex w-[65%] justify-between gap-5 md:w-full sm:flex-col">
                      <div className="flex items-center gap-2.5">
                        <Button color="light_blue_50" size="xl" className="w-[55px] rounded-[27px]">
                          <Img src="images/img_clock_1.svg" />
                        </Button>
                        <Text size="xs" as="p" className="mb-[17px] self-end text-center !text-black-900">
                          5 minutes ago
                        </Text>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Button color="lime_50" size="xl" className="w-[55px] rounded-[27px]">
                          <Img src="images/img_like_1.svg" />
                        </Button>
                        <Text size="xs" as="p" className="text-center !text-black-900">
                          12 Like
                        </Text>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Button color="red_50" size="xl" className="w-[55px] rounded-[27px]">
                          <Img src="images/img_send_1_1.svg" />
                        </Button>
                        <Text size="xs" as="p" className="text-center !text-black-900">
                          Share
                        </Text>
                      </div>
                    </div>
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <Button
                        color="indigo_900_26"
                        size="5xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_arrowpointingtoright_1.svg"
                            alt="arrow-pointing-to-right 1"
                            className="h-[25px] w-[25px]"
                          />
                        }
                        className="mt-5 min-w-[255px] gap-[19px] font-bold tracking-[0.12px] sm:px-5"
                      >
                        Continue Reading
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="mr-[69px] flex items-center md:mr-0">
                  <Text
                    as="p"
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-indigo-900_01 text-center !font-normal !text-white-A700"
                  >
                    1
                  </Text>
                  <Text
                    as="p"
                    className="ml-5 flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-white-A700 text-center !font-normal !text-indigo-900_01"
                  >
                    2
                  </Text>
                  <div className="ml-10 flex items-center gap-[15px]">
                    <Text as="p" className="!text-indigo-900_01">
                      Next
                    </Text>
                    <Img
                      src="images/img_arrowpointingtoright_1.svg"
                      alt="arrowpointing"
                      className="h-[16px] w-[16px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-[32%] flex-col gap-[51px] md:w-full sm:gap-[25px]">
                <div className="flex flex-col gap-[47px]">
                  <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                    <div className="flex flex-col items-start gap-[23px]">
                      <Img
                        src="images/img_rectangle_10.png"
                        alt="image"
                        className="h-[400px] w-full rounded-[5px] object-cover md:h-auto"
                      />
                      <div className="flex flex-col items-start gap-1">
                        <Heading size="lg" as="h4" className="!font-merriweather">
                          Jhone Leonardo
                        </Heading>
                        <Text size="s" as="p" className="text-center !font-medium">
                          Podcaster & Blogger
                        </Text>
                      </div>
                      <Text as="p" className="leading-[30px]">
                        I want to share knowledge in my own style. I have been working on various things that I think I
                        really need to share with you all. I am a jhone podcaster and blogger
                      </Text>
                    </div>
                  </a>
                  <div className="flex flex-col items-start gap-5">
                    <Heading as="h6" className="!font-merriweather">
                      Follow Me On
                    </Heading>
                    <div className="flex flex-col items-start gap-3.5">
                      <div className="flex items-center gap-[5px]">
                        <Img src="images/img_email_1.svg" alt="emailone_one" className="h-[20px] w-[20px] self-start" />
                        <Text size="s" as="p" className="self-end">
                          hello@gmail.com
                        </Text>
                      </div>
                      <div className="flex items-center gap-2">
                        <Img src="images/img_info.svg" alt="info_one" className="h-[20px] w-[20px] self-start" />
                        <Text size="s" as="p" className="self-end">
                          @insta_user
                        </Text>
                      </div>
                      <div className="flex items-center gap-[5px]">
                        <Img
                          src="images/img_twitter_2_1.svg"
                          alt="twitter2one_one"
                          className="h-[20px] w-[20px] self-start"
                        />
                        <Text size="s" as="p" className="self-end">
                          @tweetuser
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[21px]">
                  <Heading as="h6" className="!font-merriweather">
                    Tranding Blog
                  </Heading>
                  <div className="relative h-[200px] self-stretch md:h-auto">
                    <Img
                      src="images/img_rectangle_13.png"
                      alt="image_one"
                      className="h-[200px] w-full rounded-[5px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[200px] w-full md:h-auto">
                      <Img
                        src="images/img_rectangle_14.png"
                        alt="image_two"
                        className="h-[200px] w-full rounded-[5px] object-cover"
                      />
                      <div className="absolute bottom-[26.11px] left-0 right-0 m-auto flex w-[77%] flex-col items-start gap-[11px]">
                        <Heading as="h6" className="!font-merriweather italic !text-white-A700">
                          Consistent way of working to train yourself
                        </Heading>
                        <Text size="xs" as="p" className="!text-white-A700">
                          5 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 self-stretch">
                    {data1.map((d, index) => (
                      <div key={"listcardblog" + index} className="flex flex-1 items-center gap-[15px]">
                        <Img src={d.image} alt="image" className="h-[96px] w-[96px] rounded-[5px] object-cover" />
                        <div className="flex flex-1 flex-col items-start gap-2.5">
                          <Heading as="h6" className="!font-merriweather italic">
                            Consistent way of working to train yourself
                          </Heading>
                          <Text size="xs" as="p">
                            5 minutes ago
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[18px]">
                  <Heading as="h6" className="!font-merriweather tracking-[0.12px]">
                    Categories
                  </Heading>
                  <div className="flex flex-col gap-[9px] self-stretch">
                    {data2.map((d, index) => (
                      <div key={"list" + index} className="flex flex-1 flex-wrap items-center justify-between gap-5">
                        <Text as="p" className="mb-1.5 self-end">
                          {d.writing}
                        </Text>
                        <Text
                          as="p"
                          className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] bg-blue-50 text-center !font-normal !text-gray-600_01"
                        >
                          {d.groupseventyfiv}
                        </Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5 rounded-[5px] bg-green-50 p-[50px] md:flex-col md:p-5">
              <div className="ml-1.5 flex w-[51%] flex-col items-start md:ml-0 md:w-full">
                <Text as="p" className="!text-indigo-900_01">
                  NEWSLETTER
                </Text>
                <Heading size="xl" as="h1" className="!font-merriweather !font-black">
                  Subscribe to our website newsletter to receive news and updates.
                </Heading>
                <Text as="p" className="mt-5 !text-blue_gray-900">
                  Get special offers directly to your email every week!
                </Text>
              </div>
              <div className="mr-1.5 flex w-[44%] flex-col items-end gap-[7px] self-end md:mr-0 md:w-full">
                <div className="flex flex-col items-start gap-5 self-stretch">
                  <Input
                    color="white_A700"
                    size="sm"
                    variant="fill"
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Your Email`}
                    className="self-stretch border-indigo-900_01 font-bold sm:px-5"
                  />
                  <Button
                    color="indigo_900_01"
                    size="2xl"
                    shape="round"
                    className="min-w-[137px] font-semibold sm:px-5"
                  >
                    Subscribe
                  </Button>
                </div>
                <Button color="pink_300" size="7xl" className="mr-[77px] w-[77px] rounded-[38px] md:mr-0">
                  <Img src="images/img_newspaper_1.svg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-end justify-center self-stretch bg-gray-600_01 py-[33px] sm:py-5" />
      </div>
    </>
  );
}
