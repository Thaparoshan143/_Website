import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(req: NextRequest) {

    const client = getMongoClient();

    try {

        const data = await req.json();
        console.log("Post request recieved", data);
        await client.connect();

        const collection = getMongoDBColl(client);
        const updated = await collection.insertOne(data);

        return NextResponse.json(updated, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json(error, { status: 404 });
    } finally {
        await client.close();
    }
}

// for POS PUT & DELETE method are not implemented..


// helper functions
const _defDBName = "port";
const _defDBColl = "port-coll";

export function getMongoClient() {
    const mongodbURI = process.env.NEXT_PUBLIC_MONGODB_URI || '';
    return new MongoClient(mongodbURI);
}

export function getMongoDBColl(client: MongoClient, dbName: string = _defDBName, dbColl: string = _defDBColl) {

    const db = client.db(dbName);
    return db.collection(dbColl);
}