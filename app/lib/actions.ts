'use server'

import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// ラインidからメンバーを登録する
export const saveLineUser = async (lineName: string, lineId: string) => {
  const data1 = await sql`
    SELECT *
    FROM members
    WHERE lineid = ${lineId}
  `;

  if (data1.length === 0) {
    const data2 = await sql`
    INSERT INTO members (name, linename, lineid)
    VALUES (null, ${lineName}, ${lineId})
    RETURNING *;
    `;
    return data2;
  } else {
    const data2 = await sql`
    UPDATE members 
    SET linename = ${lineName}
    WHERE lineid = ${lineId}
    RETURNING *;
    `;
    return data2;
  }
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
export const saveLivePerformer = async (memberid: number, eventid: number) => {
  const data1 = await sql`
    SELECT *
    FROM liveperformers
    WHERE memberid = ${memberid}
    AND eventid = ${eventid}
  `;

  if (data1.length === 0) {
    await sql`
    INSERT INTO livePerformers (memberid, eventid)
    VALUES (${memberid}, ${eventid})
    `;
    return null;
  } else {
    return null;
  }
}



