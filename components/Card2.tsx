import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  subHeading: string;
  description: string;
  image: string;
  backgroundColor: string;
  width: string;
  height: string;
  top: string;
  left?: string;
  rotate?: string;
};

const Card2 = ({ data }: { data: CardProps }) => {
  return (
    <div
      className={`flex relative rounded-[30px] align-middle items-center h-[341px] w-[592px] `}
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div
        style={{
          top: data.top,
          width: data.width,
          height: data.height,
          left: data.left,
          transform: `rotate(${data.rotate})`,
        }}
        className="absolute right-[-49px]"
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          loading="eager"
          unoptimized
          className="object-contain h-full w-full "
        />
      </div>

      <div className="mr-auto flex flex-col h-auto  text-left ml-9   ">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-white text-[32px] font-nohemi w-fit h-fit font-[700] leading-[120%] font-nohemi ">
            {data.title}
          </h3>
          <p className=" text-[24px] leading-normal  w-auto font-[500] text-center font-outfit">
            {data.subHeading}
          </p>
          <p className="text-white text-[18px] w-[351px] font-[400] leading-normal  font-outfit ">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
