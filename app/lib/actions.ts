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

export const fetchMembersIdByLineId = async (lineId: string) => {
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


