import { saveLineUser } from "../lib/actions";
import { saveLivePerformer } from "../lib/actions";

export const GET = async () => {
    try {
        const data = await saveLineUser("sora", "U4d2b16eb45595f2e217a2f719b86ad23");
        const memberid = data[0].id;
        const eventid = 1;
        const saveLivePerformerdata = await saveLivePerformer(memberid, eventid);
        return Response.json({ data, saveLivePerformerdata });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}