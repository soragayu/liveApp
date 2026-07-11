'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLiff } from "@/app/lib/useLiff";
import { fetchMembersIdByLineId } from "@/app/lib/actions";
import { zenmarugothic } from "@/app/ui/fonts";

const Ticket = () => {

    const { lineName, lineId } = useLiff();
    const [membersId, setMembersId] = useState<number | null>(null);

    useEffect(() => {
        if (lineId != null) {

            const getMemberId = async () => {
                const id = await fetchMembersIdByLineId(lineId);
                setMembersId(id);
            }

            getMemberId();
        }
    }, [lineId])



    return (
        <Link href={`/1/${membersId}`}>
            <div className="w-full p-[10px] flex gap-[10px]">
                <Image src="/live1.png" width={1080} height={1920} alt="live1" className="w-[190.8px] h-[338.4px]" />
                <div className="flex-1 flex flex-col items-center justify-center gap-[13px] px-[21px] py-[7px]">
                    <p className={`${zenmarugothic.className} text-[12px] leading-[100%] tracking-[-1%]`}>ぶちあげLIVE</p>
                    <p className={`${zenmarugothic.className} text-[12px] leading-[100%] tracking-[-1%]`}>Ocean編</p>
                </div>
            </div>
        </Link>
    );
}

export { Ticket };