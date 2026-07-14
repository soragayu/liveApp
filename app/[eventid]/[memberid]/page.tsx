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
            <div className="bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed w-full h-screen flex justify-center items-center ">
                <Image src={`/ticket${eventid}.png`} width={1080} height={1920} alt="ticket" className="w-full h-auto animate-fade-in-up" />
            </div>
        )
    } else {
        return (
            <div className="bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed w-full h-screen flex justify-center items-center ">
                <Image src={`/ticket${eventid}alt.png`} width={1080} height={1920} alt="ticket" className="w-full h-auto animate-fade-in-up" />
            </div>
        )
    }
}
export default TicketPage;