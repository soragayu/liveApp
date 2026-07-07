'use server'

import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export const saveLineUser = async (name: string, userId: string) => {
    await sql`
    INSERT INTO members ("lineName", "lineId")
    VALUES (${name}, ${userId})
    ON CONFLICT ("lineId") DO UPDATE 
    SET "lineName" = EXCLUDED."lineName";
  `;
};


