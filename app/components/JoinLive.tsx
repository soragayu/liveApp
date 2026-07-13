'use client'
import { useLiff } from "@/app/lib/useLiff";
import { useEffect, useState } from "react";
import { saveLineUser } from "@/app/lib/actions";
import { saveLivePerformer } from "@/app/lib/actions";

const JoinLive = () => {
    const { lineName, lineId } = useLiff();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

    useEffect(() => {
        if (lineName != null && lineId != null) {

            const joinData = async () => {
                try {
                    const saveLineUserData = await saveLineUser(lineName, lineId);
                    const memberid = saveLineUserData[0].id;
                    const eventid = 1;
                    await saveLivePerformer(memberid, eventid);
                    setStatus('success');
                } catch (error) {
                    setStatus('error');
                }
            }

            joinData();
        }
    }, [lineId, lineName])

    if (status === 'loading') {
        return <div>loading...</div>;
    } else if (status === 'success') {
        return <div>success</div>;
    } else {
        return <div>error</div>;
    }
}

export default JoinLive;