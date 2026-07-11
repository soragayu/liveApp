'use server'
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const fetchMembersIdByLineId = async (lineId: string) => {
    const data = await sql`
    SELECT id 
    FROM members
    WHERE "lineId" = ${lineId}
    `;
    if (data.length > 0) {
        return data[0].id as number;
    } else {
        return null;
    }
}

export { fetchMembersIdByLineId };