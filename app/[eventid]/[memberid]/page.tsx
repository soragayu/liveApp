import Image from "next/image";
import { hasTicket } from "@/app/lib/data";

type PageProps = {
    params: Promise<{ eventid: string, memberid: string }>
}

const TicketPage = async ({ params }: PageProps) => {
    const { eventid, memberid } = await params;

    const check = await hasTicket(eventid, memberid);

    if (check) {
        return (
            <div className="w-full h-screen flex justify-center items-center ">
                <div className="relative">
                    <Image src={`/ticket${eventid}.png`} width={1080} height={1920} alt="ticket" className="w-full h-auto" />
                    <p className="text-[20vw] absolute bottom-[15vw] left-[10vw]">ナナヲアカリ</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="w-full h-screen flex justify-center items-center ">
                <Image src={`/ticket${eventid}alt.png`} width={1080} height={1920} alt="ticket" className="w-full h-auto" />
                <p className="text-[5vw] absolute bottom-[15vw] left-[13vw]">ナナヲアカリ</p>
            </div>
        )
    }
}
export default TicketPage;