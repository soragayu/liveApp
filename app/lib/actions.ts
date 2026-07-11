'use server'

import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const saveLineUser = async (lineName: string, lineId: string) => {
  await sql`
    INSERT INTO members ("name", "lineName", "lineId")
    VALUES (null, ${lineName}, ${lineId})
    ON CONFLICT ("lineId") DO UPDATE 
    SET "lineName" = EXCLUDED."lineName";
  `;
};

export const hasTicket = async (eventId: string, memberId: string) => {
  const data = await sql`
    SELECT COUNT(id)
    FROM livePerformers
    WHERE "eventId" = ${eventId} AND "memberId" = ${memberId}
  `;
  return data
}


