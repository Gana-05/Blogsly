import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";

const data = [
  { image: "images/img_rectangle_25.png" },
  { image: "images/img_rectangle_26.png" },
  { image: "images/img_rectangle_26_273x433.png" },
];
const data1 = [{ rectangle: "images/img_rectangle_23.png" }, { rectangle: "images/img_rectangle_24.png" }];

export default function BlogDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Blogsly - Blog Podcast</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <header className="flex items-center justify-center self-stretch bg-white-A700 py-6 sm:py-5">
          <div className="container-sm flex items-center justify-between gap-5 self-start md:flex-col md:p-5">
            <div className="flex w-[68%] items-center justify-between gap-5 md:w-full sm:flex-col">
              <Img
                src="images/img_header_logo.png"
                alt="headerlogo_one"
                className="h-[24px] w-[19%] self-end object-cover sm:w-full"
              />
              <div className="flex w-[53%] flex-col items-start sm:w-full">
                <ul className="relative z-[1] flex flex-wrap gap-[29px]">
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
                <div className="relative mt-[-23px] flex w-[13%] pt-6 md:w-full sm:pt-5">
                  <div className="h-px w-full bg-indigo-900_01" />
                </div>
              </div>
            </div>
            <Img src="images/img_search.svg" alt="search_one" className="h-[30px] w-[30px] md:w-full" />
          </div>
        </header>
        <div className="mt-10 flex w-[94%] flex-col gap-[150px] md:w-full md:gap-28 md:p-5 sm:gap-[75px]">
          <div className="flex flex-col items-center">
            <Img
              src="images/img_rectangle_20.png"
              alt="image"
              className="h-[500px] w-full rounded-[25px] object-cover md:h-auto"
            />
            <div className="container-sm relative mt-[-132px] flex flex-col items-center gap-[51px] md:p-5 sm:gap-[25px]">
              <div className="flex flex-col items-start justify-center self-stretch rounded-[25px] bg-white-A700 p-12 shadow-lg md:p-5">
                <Text size="lg" as="p" className="ml-4 !font-light !text-black-900 md:ml-0">
                  <span className="text-blue_gray-600">Category</span>
                  <span className="text-black-900">&nbsp;</span>
                  <span className="font-merriweather font-bold tracking-[0.12px] text-pink-300">Writing</span>
                </Text>
                <Heading
                  size="2xl"
                  as="h1"
                  className="ml-4 mt-[25px] w-[98%] !font-merriweather italic tracking-[0.12px] md:ml-0 md:w-full"
                >
                  How to write a book properly and correctly by paying attention to various parts to support the story
                </Heading>
                <div className="ml-4 mt-12 flex items-center justify-between gap-5 self-stretch md:ml-0 sm:flex-col">
                  <div className="flex w-[30%] items-center justify-center gap-3.5 sm:w-full">
                    <Img src="images/img_ellipse_5.png" alt="circleimage" className="h-[70px] w-[70px] rounded-[50%]" />
                    <div className="mb-2 flex flex-col items-start gap-0.5 self-end">
                      <Heading size="lg" as="h2" className="text-center !font-semibold !text-blue_gray-600">
                        By Jhone Leonardo
                      </Heading>
                      <Text size="xs" as="p" className="text-center">
                        12 September, 2020
                      </Text>
                    </div>
                  </div>
                  <Button
                    color="white_A700"
                    size="3xl"
                    shape="round"
                    leftIcon={<Img src="images/img_share_1_1.svg" alt="share (1) 1" className="h-[30px] w-[30px]" />}
                    className="min-w-[191px] gap-2.5 border border-solid border-pink-300 font-medium sm:px-5"
                  >
                    Share Now
                  </Button>
                </div>
              </div>
              <div className="flex w-[88%] flex-col items-start md:w-full">
                <Text as="p" className="leading-[35px]">
                  Did you come here for something in particular or just general Riker-bashing? And blowing into maximum
                  warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We
                  know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant
                  Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little
                  children, and ships named “Enterprise.”
                </Text>
                <div className="mt-[50px] flex w-[96%] items-start gap-5 md:w-full md:flex-col">
                  <Img
                    src="images/img_right_quotation_sign.svg"
                    alt="rightquotation"
                    className="h-[40px] w-[40px] md:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-3.5 md:self-stretch">
                    <Heading size="xl" as="h3" className="!font-merriweather italic !text-blue_gray-600">
                      There is a way out of every box, a solution to every puzzle; it’s just a matter of finding it.
                    </Heading>
                    <Text as="p">JEAN-LUC PICARD</Text>
                  </div>
                </div>
                <Text as="p" className="mt-[49px] leading-[35px]">
                  <span className="text-blue_gray-600">
                    The game’s not big enough unless it scares you a little. Wait a minute – you’ve been declared dead.
                    You can’t give&nbsp;
                  </span>
                  <span className="font-bold text-blue_gray-600">
                    orders around here. I’ll alert the crew. What? We’re not at all alike! Flair is what marks the
                    difference between artistry and mere competence.
                  </span>
                </Text>
                <Text as="p" className="mt-2.5 leading-[35px]">
                  Did you come here for something in particular or just general Riker-bashing? And blowing into maximum
                  warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.
                </Text>
                <Text as="p" className="mt-2.5 leading-[35px]">
                  Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little
                  children, and ships named “Enterprise.”
                </Text>
                <Heading size="lg" as="h4" className="mt-[45px] !font-merriweather !text-blue_gray-600">
                  Lorem Ipsum Dolor Sit Amet
                </Heading>
                <Text as="p" className="mt-5 leading-[35px]">
                  Did you come here for something in particular or just general Riker-bashing? And blowing into maximum
                  warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We
                  know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant
                  Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little
                  children, and ships named “Enterprise.”
                </Text>
                <div className="mt-[50px] flex gap-[29px] self-stretch md:flex-col">
                  {data1.map((d, index) => (
                    <Img
                      key={"previewimage" + index}
                      src="images/img_rectangle_23.png"
                      alt="rectangle"
                      className="h-[334px] w-[49%] rounded-[15px] object-cover md:w-full"
                    />
                  ))}
                </div>
                <Text as="p" className="mt-[50px] leading-[35px]">
                  What’s a knock-out like you doing in a computer-generated gin joint like this? But the probability of
                  making a six is no greater than that of rolling a seven. I guess it’s better to be lucky than good.
                </Text>
                <Text as="p" className="mt-2.5 leading-[35px]">
                  Damage report! I’ve had twelve years to think about it. And if I had it to do over again, I would have
                  grabbed the phaser and pointed it at you instead of them. Some days you get the bear, and some days
                  the bear gets you. Ensign Babyface! I’m afraid I still don’t understand, sir. Mr. Crusher, ready a
                  collision course with the Borg ship. Yesterday I did not know how to eat gagh. You’re going to be an
                  interesting companion.
                </Text>
                <div className="ml-[30px] mt-[27px] flex w-[44%] flex-col gap-3.5 md:ml-0 md:w-full">
                  <div className="flex w-[61%] items-start gap-[15px] md:w-full">
                    <div className="mt-[5px] h-[10px] w-[10px] rounded-[5px] bg-blue_gray-600" />
                    <Text as="p">Lorem ipsum dolor sit amet.</Text>
                  </div>
                  <div className="flex w-[82%] items-center gap-[15px] md:w-full">
                    <div className="mb-[5px] h-[10px] w-[10px] self-end rounded-[5px] bg-blue_gray-600" />
                    <Text as="p">At vero eos et accusamus et iusto odio.</Text>
                  </div>
                  <div className="flex items-start gap-[15px] sm:flex-col">
                    <div className="mt-[5px] h-[10px] w-[10px] rounded-[5px] bg-blue_gray-600" />
                    <Text as="p">Excepteur sint occaecat cupidatat non proident.</Text>
                  </div>
                </div>
                <Text as="p" className="mt-[26px] leading-[35px]">
                  Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little
                  children, and ships named “Enterprise.”
                </Text>
              </div>
              <div className="ml-[66px] flex w-[48%] flex-col items-start gap-3 self-start md:ml-0 md:w-full">
                <Text size="lg" as="p" className="!font-medium">
                  Tags
                </Text>
                <div className="flex gap-[15px] self-stretch sm:flex-col">
                  <Button color="gray_200" size="md" shape="round" className="w-full flex-1 font-thin sm:self-stretch">
                    Writing
                  </Button>
                  <Button color="gray_200" size="md" shape="round" className="w-full flex-1 font-thin sm:self-stretch">
                    Tutorial
                  </Button>
                  <Button color="gray_200" size="md" shape="round" className="w-full flex-1 font-thin sm:self-stretch">
                    How to
                  </Button>
                  <Button color="gray_200" size="md" shape="round" className="min-w-[77px] font-thin">
                    Book
                  </Button>
                  <Button color="gray_200" size="md" shape="round" className="min-w-[77px] font-thin">
                    2020
                  </Button>
                </div>
              </div>
              <div className="relative h-[253px] w-[56%]">
                <Img
                  src="images/img_right_quotation_sign_blue_50_01.svg"
                  alt="rightquotation"
                  className="absolute left-[0.00px] top-[0.00px] m-auto h-[103px] w-[103px]"
                />
                <div className="absolute bottom-[0.00px] right-[0.00px] m-auto flex w-[92%] flex-col items-center gap-[30px]">
                  <Text size="lg" as="p" className="text-center !font-light leading-10">
                    Increase your knowledge by reading new things and I will share whatever I know for you, as long as I
                    enjoy it
                  </Text>
                  <div className="flex w-[41%] items-center gap-[15px] md:w-full">
                    <Img
                      src="images/img_ellipse_5_60x60.png"
                      alt="circleimage_one"
                      className="h-[60px] w-[60px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start gap-[3px]">
                      <Heading as="h5" className="text-center !font-semibold !text-blue_gray-600">
                        By Jhone Leonardo
                      </Heading>
                      <Text size="xs" as="p" className="text-center">
                        Podcaster & Blogger
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[27px] md:flex-col">
            {data.map((d, index) => (
              <div key={"bloglist" + index} className="relative h-[273px] w-full md:h-auto">
                <Img src={d.image} alt="image" className="h-[273px] w-full rounded-[5px] object-cover" />
                <div className="absolute bottom-[29.68px] left-[28.00px] m-auto flex w-[72%] flex-col items-start gap-[23px]">
                  <Heading size="lg" as="h2" className="!font-merriweather italic !text-white-A700">
                    Consistent way of working to train yourself
                  </Heading>
                  <Text as="p" className="!text-white-A700">
                    5 minutes ago
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer className="mt-[100px] flex items-end justify-center self-stretch bg-gray-600_01 py-[33px] sm:py-5" />
      </div>
    </>
  );
}
