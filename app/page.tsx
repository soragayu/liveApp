import Image from "next/image";
import Link from "next/link";
import { darumadrop } from "./ui/fonts";
import { pridi } from "./ui/fonts";


const Home = () => {
  return (
    <div className="w-full py-[22px] px-[20px] flex flex-col items-center">
      <div className="w-full px-[30px] flex justify-between">
        <p className={`text-[10px] tracking-[-4%] leading-[120%] ${pridi.className}`}>MY PAGE</p>
        <p className={`text-[10px] tracking-[--4%] leading-[120%] ${pridi.className}`}>MORE INFORMATION</p>
      </div>
      <div className="w-full flex flex-col items-center gap-[24px]">
        <p className={`${darumadrop.className} text-[64px] text-[#1E1E1E] tracking-[10%] leading-[120%]`}>TICKETS</p>
        <div className="w-full px-[30px] flex items-center justify-between ">
          <p className={`${pridi.className} text-[14px] leading-[120%] tracking-[-2%]`}>ぶちあげLIVE</p>
          <p className={` ${pridi.className} text-[12px] leading-[120%] tracking-[-2%]`}>@nonsensefashion</p>
        </div>
      </div>
      <div className="w-full pt-[50px] pb-[10px] px-[10px] flex flex-col items-center gap-[10px]">
        <p className={`text-[24px] font-bold leading-[110%] tracking-[-2%]`}>出演メモリー</p>
        <div className="w-full flex flex-col items-start gap-[10px]">
          <div className="w-full p-[10px] flex gap-[10px]">
            <Link href="/ticket"><Image src="/live1.png" width={106} height={188} alt="live1" /></Link>
            <div className="flex-1 flex flex-col items-center justify-center gap-[13px] px-[21px] py-[7px]">
              <p className={`${pridi.className} text-[24px] leading-[100%] tracking-[-1%]`}>ぶちあげLIVE</p>
              <p className={`${pridi.className} text-[24px] leading-[100%] tracking-[-1%]`}>Ocean編</p>
            </div>
          </div>
          <div className="w-full p-[10px] flex gap-[10px]">
            <Image src="/livealt.png" width={106} height={188} alt="livealt" />
            <div className="flex-1 flex flex-col items-center justify-center gap-[13px] px-[21px] py-[7px]">
              <p className={`${pridi.className} text-[24px] leading-[100%] tracking-[-1%]`}>comingsoon...</p>
              <p className={`${pridi.className} text-[24px] leading-[100%] tracking-[-1%]`}>？？？編</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
