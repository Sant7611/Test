import { ArrowLeft, ArrowRight } from "lucide-react";

type CardProps = {
  backgroundColor: string;
  children: React.ReactNode;
};

export default function CardLayout({ children, backgroundColor }: CardProps) {
  return (
    <div
      className={`flex relative rounded-[30px] align-middle items-center h-[341px] w-[592px] `}
      style={{ backgroundColor }}
    >
      {children}
      <button className=" bg-white w-[106px] h-[106px] rounded-full border-[50px] border-white absolute left-[-20px] flex items-center justify-center ">
        <span className="p-4 rounded-full shadow-md flex items-center justify-center bg-[#FAFAFA]">
          <ArrowLeft size={35} className="text-black text-sm" />
        </span>
      </button>
      <button className=" bg-white w-[106px] h-[106px] border-[50px] border-white rounded-full absolute translate-x-0.5 -right-6 flex items-center justify-center ">
        <span className=" p-4 rounded-full shadow-md  flex items-center justify-center bg-[#FAFAFA]">
          <ArrowRight size={35} className="text-black "  />
        </span>
      </button>
    </div>
  );
}
