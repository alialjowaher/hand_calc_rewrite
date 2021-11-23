import Dexie from 'dexie';

export const db = new Dexie('database');
    db.version(1).stores({
        jawlatStore: `++No,jawlahID,winType,winnerTeam,losserTeam,winnerValue,losserValue,nazilCount,nazilTotal,isTasjilah`
    });
    db.open();

  

