'use client';

import { useLiff } from "@/app/lib/useLiff";
import { useEffect } from "react";
import { saveLineUser } from "@/app/lib/actions";

export const LiffInitializer = () => {
    const { lineId, lineName } = useLiff();

    useEffect(() => {
        if (lineId != null && lineName != null) {
            saveLineUser(lineName, lineId);
        }
    }, [lineId, lineName])
    return null;
};