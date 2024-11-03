import prisma from "../../prisma/db"
 
export async function GET() {
  const allEvents = await prisma.event.create({
    data: {
        title: "title",
        description: "bob builder",
        date: "2024",
        image: "image",
        signup: "link1",
        rulebook: "link2",
    }
  })
 
  return Response.json({ allEvents })
}