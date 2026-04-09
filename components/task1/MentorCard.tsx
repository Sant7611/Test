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
};

const MentorCard = ({ data }: { data: CardProps }) => {
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
        }}
        className="absolute left-[-49px] animate-bounce-smooth "
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-contain "
        />
      </div>

      <div className="ml-auto flex flex-col h-auto  text-right mr-9   ">
        <div className="flex flex-col items-end gap-4">
          <h3 className="text-white text-[32px] font-nohemi w-fit h-fit font-bold leading-[120%] font-nohemi ">
            {data.title}
          </h3>
          <p className="text-white text-[24px] leading-normal  w-auto font-medium text-center font-outfit">
            {data.subHeading}
          </p>
          <p className="text-white text-[18px] w-[351px] font-normal leading-normal text-right font-outfit ">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
