import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request, { params }) {
    try {
        const data = await request.json();
        console.log(data);
        const { name, email } = data;
        const id = parseInt(params.id);
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                name,
                email
            }
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}

export async function DELETE(request, {params}){
    try {
      const id = parseInt(params.id);
      const deleteUser = await prisma.user.delete({
        where: {id}
      });
        return NextResponse.json(deleteUser);

    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.error("Internal Server Error", 500);
    }
}