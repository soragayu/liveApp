import liff from "@line/liff";
import { useEffect } from "react";
import { saveLineUser } from "@/app/lib/actions";

export const useLiff = () => {
    useEffect(() => {
        liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! }).then(async () => {
            if (liff.isLoggedIn()) {
                const profile = await liff.getProfile();
                await saveLineUser(profile.displayName, profile.userId);
            } else {
                liff.login();
            }
        });
    }, []);
};