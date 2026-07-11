import Image from "next/image";
import { hasTicket } from "@/app/lib/data";

type PageProps = {
    params: Promise<{ eventid: string, memberid: string }>
}

const TicketPage = async ({ params }: PageProps) => {
    const { eventid, memberid } = await params;

    const data = await hasTicket(eventid, memberid);
    console.log(data);


    return (
        <div className="w-full h-screen flex justify-center items-center ">
            <Image src="/ticket1.png" width={1080} height={1920} alt="ticket" className="w-full" />

        </div>
    )
}
export default TicketPage;