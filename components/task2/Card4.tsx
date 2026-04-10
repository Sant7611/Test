import Image from "next/image";
import CardLayout from "./CardLayout";

export default function Card4() {
  return (
    <CardLayout backgroundColor={"#5492A0"}>
      <div className="absolute z-10  top-[38px] left-[62px] z-10 ">
        <Image
          alt="profile Image"
          src="/task1/check.png"
          height={329}
          width={572}
        />
      </div>
      <div className="absolute w-[241px] h-[48px] top-[36px] left-[80px]">
        <p className="text-white font-nohemi font-bold text-[20px] leading-[120%] tracking-normal">
          Focused faces—learning mode: ON!
        </p>
      </div>
    </CardLayout>
  );
}
