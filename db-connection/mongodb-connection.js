import { MongoClient } from 'mongodb';

const url = "mongodb://mongodb:27017/ironmuscle";
const client = new MongoClient(url);

let savedDb = null;

async function dbConnection() {
    if (savedDb) {
        return savedDb;
    }

    try {
        await client.connect();
        const db = client.db();
        savedDb = db;
        return db;
    } catch (err) {
        throw new Error("Could not connect to the database.");
    }
}

export { dbConnection };