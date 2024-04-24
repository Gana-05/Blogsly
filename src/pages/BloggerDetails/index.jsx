import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import BloggerDetailsPagination from "../../components/BloggerDetailsPagination";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const data = [
  { image: "images/img_rectangle_9_3.png" },
  { image: "images/img_rectangle_9_4.png" },
  { image: "images/img_rectangle_9_5.png" },
  { image: "images/img_rectangle_9_6.png" },
  { image: "images/img_rectangle_9_7.png" },
  { image: "images/img_rectangle_9_8.png" },
  { image: "images/img_rectangle_9_9.png" },
  { image: "images/img_rectangle_9_10.png" },
  { image: "images/img_rectangle_9_11.png" },
  { image: "images/img_rectangle_9_12.png" },
  { image: "images/img_rectangle_9_4.png" },
  { image: "images/img_rectangle_9_13.png" },
];

export default function BloggerDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Blogsly - Blog Podcast</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <Header className="flex items-center justify-center bg-white-A700 py-6 sm:py-5" />
        <div className="mt-10 flex flex-col items-center gap-[97px] md:gap-[72px] sm:gap-12">
          <div className="flex flex-col items-center self-stretch">
            <div className="flex h-[525px] items-start justify-center self-stretch bg-gray-600_01 bg-[url(/public/images/img_group_1.svg)] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
              <div className="container-xs mb-[116px] flex items-center justify-between gap-5 md:flex-col md:p-5">
                <div className="flex w-[57%] flex-col items-start gap-[25px] md:w-full">
                  <Button color="white_A700_3f" size="sm" shape="round" className="min-w-[82px] font-light">
                    Writer
                  </Button>
                  <Heading size="xl" as="h1" className="!font-merriweather italic tracking-[0.12px] !text-white-A700">
                    Eps 3 : How to write a book properly and correctly by paying attention to various parts to support
                    the story
                  </Heading>
                  <div className="flex w-[37%] items-center gap-3.5 md:w-full">
                    <Img
                      src="images/img_ellipse_5_60x60.png"
                      alt="circleimage"
                      className="h-[60px] w-[60px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start gap-[3px]">
                      <Heading as="h2" className="text-center !font-semibold tracking-[0.12px] !text-white-A700">
                        By Jhone Leonardo
                      </Heading>
                      <Text size="xs" as="p" className="text-center !text-white-A700">
                        Podcaster & Blogger
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex w-[31%] flex-col gap-6 rounded-[5px] bg-white-A700_3f p-8 md:w-full sm:p-5">
                  <Heading size="lg" as="h3" className="mt-[11px] !font-semibold tracking-[0.12px] !text-white-A700">
                    Find and make it easy for yourself in listening to our podcasts on
                  </Heading>
                  <div className="mb-[11px] flex justify-between gap-5">
                    <Img
                      src="images/img_iconfinder_anch.svg"
                      alt="iconfinderanch"
                      className="h-[50px] w-[50px] self-start"
                    />
                    <Img
                      src="images/img_soundcloud_1.svg"
                      alt="soundcloudone"
                      className="h-[50px] w-[50px] self-start"
                    />
                    <Img src="images/img_spotify_1.svg" alt="spotifyone_one" className="h-[50px] w-[50px] self-start" />
                    <Img src="images/img_podcast_1_1.svg" alt="podcast1one_one" className="h-[50px] w-[50px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-sm relative mt-[-106px] px-[95px] md:p-5 md:px-5">
              <div className="flex items-center gap-[22px] rounded-[5px] bg-white-A700 p-[21px] shadow-2xl md:flex-col sm:p-5">
                <Img
                  src="images/img_rectangle_39.png"
                  alt="image"
                  className="mt-2 h-[215px] w-[24%] rounded-[5px] object-cover md:w-full"
                />
                <div className="flex flex-1 flex-col md:self-stretch">
                  <div className="flex items-center justify-between gap-5">
                    <Button color="gray_200" size="xs" shape="round" className="min-w-[74px] font-light">
                      Writer
                    </Button>
                    <Text size="xs" as="p" className="self-end">
                      25 August, 2020{" "}
                    </Text>
                  </div>
                  <Heading as="h4" className="mt-5 !font-merriweather italic tracking-[0.12px] !text-gray-900">
                    Eps 3 : How to write a book properly and correctly by paying attention to various parts to support
                    the story
                  </Heading>
                  <Text size="xs" as="p" className="mt-2.5 leading-[25px]">
                    Did you come here for something in particular or just general Riker-bashing? And blowing into
                    maximum warp speed, you appeared for an instant to be in two places at once. We have a sabot...
                  </Text>
                  <div className="mt-2.5 flex items-center gap-5">
                    <Button
                      color="indigo_900_01"
                      size="lg"
                      shape="round"
                      leftIcon={
                        <Img src="images/img_overflow_menu.svg" alt="overflow_menu" className="h-[20px] w-[20px]" />
                      }
                      className="min-w-[132px] gap-2.5 font-light"
                    >
                      Play Now
                    </Button>
                    <Text size="xs" as="p" className="mb-3 self-end">
                      Go to Spotify Now
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[1106px] flex-col gap-[17px] md:p-5">
            <div className="flex items-center gap-[18px] sm:flex-col">
              <div className="flex flex-col items-center rounded-[38px] bg-gray-300_01 p-[13px]">
                <Img src="images/img_podcast_1.svg" alt="podcastone_one" className="h-[50px] w-[50px]" />
              </div>
              <div className="flex flex-col items-start gap-2">
                <Heading size="xl" as="h2" className="text-center !font-merriweather !font-black">
                  Latest Podcasts{" "}
                </Heading>
                <Text size="lg" as="p" className="text-center tracking-[0.12px]">
                  Get started on latest episodes
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[50px]">
              <div className="grid grid-cols-4 gap-[22px] md:grid-cols-2 sm:grid-cols-1">
                {data.map((d, index) => (
                  <div
                    key={"bloggerdetails" + index}
                    className="flex w-full flex-col gap-[15px] rounded-[5px] bg-white-A700 p-[13px] shadow-sm"
                  >
                    <div className="relative h-[207px] md:h-auto">
                      <Img src={d.image} alt="image" className="h-[207px] w-full rounded-[5px] object-cover" />
                      <Button
                        shape="circle"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto w-[72px] !rounded-[36px]"
                      >
                        <Img src="images/img_overflow_menu.svg" />
                      </Button>
                    </div>
                    <div className="mb-2.5 flex flex-col items-start gap-2.5">
                      <Heading size="s" as="h3" className="!font-merriweather">
                        The secrets of writing a good book
                      </Heading>
                      <Text size="xs" as="p">
                        By LaosPodcast
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
              <BloggerDetailsPagination className="flex items-center" />
            </div>
          </div>
        </div>
        <Footer className="mt-[97px] flex items-end justify-center bg-gray-600_01 py-[33px] sm:py-5" />
      </div>
    </>
  );
}
