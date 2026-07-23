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
                <Image src="/bg.jpg" alt="bg" width={768} height={1376} className="fixed top-0 left-0 w-full" />
                <Image src={`/ticket${eventid}.png`} width={1080} height={1920} alt="ticket" className="w-full max-w-[400px] h-auto animate-fade-in-up" />
            </div>
        )
    } else {
        return (
            <div className="w-full h-screen flex justify-center items-center ">
                <Image src="/bg.jpg" alt="bg" width={768} height={1376} className="fixed top-0 left-0 w-full" />
                <Image src={`/ticket${eventid}alt.png`} width={1080} height={1920} alt="ticket" className="w-full max-w-[400px] h-auto animate-fade-in-up" />
            </div>
        )
    }
}
export default TicketPage;