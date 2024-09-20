import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function POST(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const savedData = await About.create(extractData)

        if (savedData) {
            return NextResponse.json({
                success: true,
                message: "Data Saved Successfully."
            })
        }
        else {
            return NextResponse.json({
                success: false,
                message: "Something goes wrong! Please try again."
            })
        }
    }
    catch (e) {
        console.log(e)
        return NextResponse.json({
            success: false,
            message: "Something goes wrong! Please try again."
        })
    }
}