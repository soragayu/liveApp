import { saveLineUser } from "../lib/actions";

export const GET = async () => {
    try {
        return Response.json(await saveLineUser("sora", "U4d2b16eb45595f2e217a2f719b86ad23"));
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}