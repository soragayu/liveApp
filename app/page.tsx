'use client'
import Image from "next/image";
import { Ticket } from "./components/Ticket";
import { darumadrop } from "./ui/fonts";
import { pridi } from "./ui/fonts";
import { LiffInitializer } from "./components/LiffInitializer";


const Home = () => {
  return (
    <div className="w-full py-[22px] px-[20px] flex flex-col items-center">
      <LiffInitializer />
      {/* タイトル */}
      <div className="w-full flex flex-col items-center gap-[24px]">
        <p className={`${darumadrop.className} text-[64px] text-[#1E1E1E] tracking-[10%] leading-[120%]`}>TICKETS</p>
      </div>
      {/* メイン */}
      <div className="w-full pt-[50px] pb-[10px] px-[10px] flex flex-col items-center gap-[10px]">
        <p className={`text-[24px] font-bold leading-[110%] tracking-[-2%]`}>出演メモリー</p>
        {/* チケッツ */}
        <div className="w-full flex flex-col items-start gap-[10px]">
          {/* チケット */}
          <Ticket />
          <div className="w-full p-[10px] flex gap-[10px]">
            <Image src="/live1alt.png" width={1080} height={1920} alt="livealt" className="w-[106px] h-[188px]" />
            <div className="flex-1 flex flex-col items-center justify-center gap-[13px] px-[21px] py-[7px]">
              <p className={`${pridi.className} text-[24px] leading-[100%] tracking-[-1%]`}>coming soon...</p>
              <p className={`${pridi.className} text-[24px] leading-[100%] tracking-[-1%]`}>？？？編</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
