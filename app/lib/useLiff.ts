import liff from "@line/liff";
import { useEffect, useState } from "react";

export const useLiff = () => {

    const [lineName, setLineName] = useState<string | null>(null);
    const [lineId, setLineId] = useState<string | null>(null);

    useEffect(() => {
        liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! }).then(async () => {
            if (liff.isLoggedIn()) {
                const profile = await liff.getProfile();
                setLineName(profile.displayName);
                setLineId(profile.userId);
            } else {
                liff.login();
            }
        });
    }, []);

    return { lineName, lineId };
};