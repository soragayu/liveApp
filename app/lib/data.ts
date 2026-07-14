import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const hasTicket = async (eventid: string, memberid: string) => {
  const data = await sql`
    SELECT *
    FROM liveperformers
    WHERE eventid = ${eventid} 
    AND memberid = ${memberid}
  `;
  return data.length > 0;
}