import Dexie from 'dexie';

export const db = new Dexie('database');
    db.version(1).stores({
        jawlatStore: `++No,winType,winner_Team,losser_Team,winner_value,losser_value,nazil_count,nazil_total,isTasjilah`
    });
    db.open();

  

