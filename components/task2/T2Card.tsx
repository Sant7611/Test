import Image from "next/image";

type Props = {
  heading: string;
  subheading: string;
  number: number;
};

const T2Card = ({ heading, subheading, number }: Props) => {
  return (
    <div className="group relative w-70 px-[35.5px] flex flex-col items-center justify-center text-[#C33241] h-[461px] rounded-[32px] bg-red-100">
      <div className="absolute -top-22 opacity-0  group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-500">
        <Image src="/task2/arrow.png" alt="Click me" width={120} height={120} />
      </div>
      <div className="flex flex-col items-center">
        <div className="-rotate-[90deg] w-[218px] flex flex-1 flex-col gap-2">
          <div className="font-outfit font-bold text-[32px] leading-[100%] tracking-normal">
            <h2>{heading}</h2>
          </div>
          <div className="font-outfit font-normal text-[18px]">
            <p>{subheading}</p>
          </div>
        </div>
        <div className="text-[150px] relative font-nohemi h-[180px] font-bold pt-15">
          <h1>
            {number.toString().padStart(2, "0")}
            <span className="plus-animate inline-block absolute text-[64px] top-[50px] -right-[18px]">
              +
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default T2Card;
