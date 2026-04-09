import T2Card from "@/components/task2/T2Card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center  py-28 bg-white ">
      <div className="mx-auto flex flex-col  gap-12 ">
        <div className="space-y-6 text-black">
          <p className="font-outfit font-normal text-[24px] leading-[100%] tracking-normal">
            Explore our classes and master trending skills!
          </p>
          <h2 className="font-nohemi font-bold text-[32px] leading-[120%] tracking-normal">
            Dive Into{" "}
            <span className="text-[#1DA077]"> What’s Hot Right Now! 🔥</span>
          </h2>
        </div>
        <div className="">
          <div className="flex gap-[32px] items-center ">
            <div className="flex flex-col items-center justify-between bg-[#C33241] w-[592px] h-[461px] rounded-[32px] py-[40px] ">
              <div className="flex  ml-auto pr-9.5 group">
                <button className="flex gap-2  ">
                  View all Courses{" "}
                  <ArrowRight className=" cursor-pointer group-hover:animate-to-fro" />
                </button>
              </div>
              <div className="flex flex-col gap-16">
                <div className="px-[66px]">
                  <div className="flex gap-[42px] mt-[63px] justify-center">
                    <div>
                      <Image
                        src="/task2/icon1.png"
                        alt="course image"
                        width={95}
                        height={95}
                      />
                    </div>
                    <div>
                      <Image
                        src="/task2/icon2.png"
                        alt="course image"
                        width={95}
                        height={95}
                      />
                    </div>
                    <div>
                      <Image
                        src="/task2/icon3.png"
                        alt="course image"
                        width={95}
                        height={95}
                      />
                    </div>
                    <div>
                      <Image
                        src="/task2/icon5.png"
                        alt="course image"
                        width={95}
                        height={95}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-3  items-center justify-center  px-[75px]">
                    <div className="relative">
                      <h1 className="  font-nohemi font-bold text-[150px] leading-[120%] tracking-normal ">
                        23
                        <span className="text-[64px] absolute -top-15 -right-6 ">
                          +
                        </span>
                      </h1>
                    </div>
                    <div className="text-left pl-[15px]  w-[218px] leading-tight text-left py-[20px] pb-9 ">
                      <h3 className="font-outfit font-bold pb-2 text-[32px] leading-[100%] tracking-normal">
                        All Courses
                      </h3>

                      <p className="font-[400] font-outfit text-[18px]">
                        courses you&apos;re powering through right now.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[32px] cards-group">
              <T2Card
                heading="Upcoming Courses"
                subheading="exciting new courses waiting to boost your skills."
                number={5}
              />
              <T2Card
                heading="Ongoing Courses"
                subheading="currently happening—don't miss out on the action!"
                number={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
