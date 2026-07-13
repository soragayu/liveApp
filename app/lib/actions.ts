'use server'

import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// ラインidからメンバーを登録する
export const saveLineUser = async (lineName: string, lineId: string) => {
  const data = await sql`
    INSERT INTO members (name, linename, lineid)
    VALUES (null, ${lineName}, ${lineId})
    ON CONFLICT (lineid) DO UPDATE 
    SET linename = EXCLUDED.linename
    RETURNING *;
  `;
  return data;
};

// ラインidからメンバーidを取得する
export const fetchMembersIdByLineId = async (lineId: string) => {
  const data = await sql`
    SELECT id 
    FROM members
    WHERE lineid = ${lineId}
    `;
  if (data.length > 0) {
    return data[0].id as number;
  } else {
    return null;
  }
}

// メンバーidをlivePerformersテーブルに登録
export const saveLivePerformer = async (memberid: number, eventid: string) => {
  const data = await sql`
    SELECT *
    FROM livePerformers
    WHERE memberid = ${memberid}
    AND eventid = ${eventid}
  `;
  return data;
}



