import Image from "next/image";
import React from "react";
import CardLayout from "./CardLayout";

const Card3 = () => {
  return (
    <CardLayout backgroundColor={"#F45B5B"}>
      <div className="absolute top-[18px] left-[34px] z-10">
        <Image alt="profile Image" src="/card3.png" width={352} height={323} />
      </div>
      <div className="absolute w-[241px] h-[72px] top-[56px] left-[326px]">
        <p className="font-nohemi text-white font-bold text-[20px] leading-[120%] tracking-[0%]">
          Clarity unlocked—stickers, sips, and skills all in one go!
        </p>
      </div>

      <div className="absolute top-[24px] left-[67px] rotate-[11.91deg] ">
        <Image alt="Wow Image" src="/image.png" width={110} height={110} />
      </div>
      <div className="absolute top-[193px] left-[385px] ">
        <Image alt="Wow Image" src="/image2.png" width={120} height={120} />
      </div>
    </CardLayout>
  );
};

export default Card3;