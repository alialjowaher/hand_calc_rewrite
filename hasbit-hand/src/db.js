import Dexie from 'dexie';

const db = new Dexie('database');
    db.version(1).stores({
        jawlatStore: `++No,winType,winner_team,losser_Team,winner_value,losser_value,nazil_count,nazil_total,isTasjilah`
    });
   

export default db;



  

