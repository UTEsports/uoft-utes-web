import prisma from "../../prisma/db";
import { Event } from "@prisma/client";

// Get all events
async function GET() {
  let data;
  try {
    data = await prisma.event.findMany();
  } catch (e) {
    console.error("Error fetching events:", e);
    return new Response("Failed to fetch events", { status: 500 });
  }

  return data;
}

// Create a new event
async function POST(req: Request) {
  let eventData;
  let data;
  try {
    const res = await req.json();
    eventData = res.data;
    const data = await prisma.event.create({
      data: {
        ...eventData,
      },
    });
  } catch (e) {
    console.error("Error creating event:", e);
    return new Response("Failed to create event", { status: 500 });
  }

  return data;
}

// Delete an event
async function DELETE(req: Request) {
  await prisma.event.delete({
    where: {
      id: id,
    },
  });
}

// Update an event
async function PUT(
  id: string,
  title: string,
  description: string,
  date: DateTime,
  image?: string,
  signup?: string,
  rulebook?: string
) {
  await prisma.event.update({
    where: {
      id: id,
    },
    data: {
      title,
      description,
      date,
      ...(image && { image }),
      ...(signup && { signup }),
      ...(rulebook && { rulebook }),
    },
  });
}
