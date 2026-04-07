import Card2 from "@/components/Card2";
import MentorCard from "@/components/MentorCard";
import { data, data2 } from "@/lib";

const page = () => {
  return (
    <div className=" py-10 w-full bg-white ">
      <div className="mx-auto w-[80%] flex flex-col  gap-12 ">
        <div className="space-y-6 text-black">
          <p className="font-outfit font-medium text-[24px] leading-[100%] tracking-normal">Your SkillShikshya Journey</p>
          <h2 className="font-nohemi font-bold text-[32px] leading-[120%] tracking-normal">
            <span className="text-[#1DA077]" > Step</span> In. <span className="text-[#1DA077]" > Skill</span> Up. <span className="text-[#1DA077]" > Stand  </span>
            Out. 🚀
          </h2>
        </div>
        <div className="flex  gap-6">
          <div className="flex flex-col-reverse gap-12 ">
            {data.map((item, index) => (
              <MentorCard key={index} data={item} />
            ))}
          </div>
          <div className="flex flex-col-reverse gap-12">
            {data2.map((item, index) => (
              <Card2 key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
