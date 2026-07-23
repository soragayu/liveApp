'use client'
import Image from "next/image";
import { Ticket } from "./components/Ticket";
import { darumadrop } from "./ui/fonts";
import { zenmarugothic } from "./ui/fonts";
import { LiffInitializer } from "./components/LiffInitializer";


const Home = () => {
  return (
    <div className="w-full py-[22px] px-[20px] flex flex-col items-center">
      <Image src="/bg.jpg" alt="bg" width={768} height={1376} className="fixed top-0 left-0 w-full" />
      <LiffInitializer />
      {/* タイトル */}
      <div className="w-full flex flex-col items-center gap-[24px]">
        <p className={`${darumadrop.className} animate-fade-in-up text-[64px] text-white tracking-[10%] leading-[120%]`}>TICKETS</p>
      </div>
      {/* メイン */}
      <div className="w-full pt-[50px] pb-[10px] px-[10px] flex flex-col items-center gap-[10px]">
        <p className={`${zenmarugothic.className} animate-fade-in-up text-[24px] text-white font-bold leading-[110%] tracking-[-2%]`}>出演メモリー</p>
        {/* チケッツ */}
        <div className="w-full flex flex-col items-start gap-[10px]">
          {/* チケット */}
          <Ticket />
          <div className="w-full p-[10px] flex gap-[10px]">
            <Image src="/live1alt.png" width={1080} height={1920} alt="livealt" className="animate-fade-in-up w-[190.8px] h-[338.4px]" />
            <div className="flex-1 flex flex-col items-center justify-center gap-[13px] px-[21px] py-[7px]">
              <p className={`${zenmarugothic.className} animate-fade-in-up text-[12px] text-white leading-[100%] tracking-[-1%]`}>coming</p>
              <p className={`${zenmarugothic.className} animate-fade-in-up text-[12px] text-white leading-[100%] tracking-[-1%]`}>soon...</p>
              <p className={`${zenmarugothic.className} animate-fade-in-up text-[12px] text-white leading-[100%] tracking-[-1%]`}>？？？編</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
