'use client';

import { useLiff } from "@/app/lib/useLiff";
import { useEffect } from "react";
import { saveLineUser } from "@/app/lib/actions";

export const LiffInitializer = () => {
    const { lineName, lineId } = useLiff();

    useEffect(() => {
        if (lineName != null && lineId != null) {
            saveLineUser(lineName, lineId);
        }
    }, [lineName, lineId])
    return null;
};