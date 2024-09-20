import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export async function PUT(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const { _id, heading, summary, facebook, twitter, linkedin, instagram, github } = extractData;

        let updateData = await Home.findById(_id);

        if (updateData) {
            // Update existing document
            updateData = await Home.findByIdAndUpdate(
                _id,
                { heading, summary, facebook, twitter, linkedin, instagram, github },
                { new: true }
            );
            return NextResponse.json({
                success: true,
                message: 'Updated successfully',
                data: updateData
            });
        } else {
            // Create new document
            const newData = new Home({
                _id,
                heading,
                summary,
                facebook, 
                twitter, 
                linkedin, 
                instagram, 
                github
            });
            const createdData = await newData.save();
            return NextResponse.json({
                success: true,
                message: 'Created successfully',
                data: createdData
            });
        }
    } catch (e) {
        console.error('Error in PUT handler:', e);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong'
        });
    }
}