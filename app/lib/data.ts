import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const hasTicket = async (eventId: number, memberId: number) => {
    const data = await sql`
    SELECT *
    FROM livePerformers
    WHERE "eventId" = ${eventId} AND "memberId" = ${memberId}
  `;
    return data.length > 0;
}