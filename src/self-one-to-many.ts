import { PrismaClient } from "../prisma/self-one-to-many"
const prisma = new PrismaClient()

async function main() {
    const teacherWithStudents = await prisma.user.findMany({
        where: { teacherId: null },
        include: {
          students: true 
        }
      })
    
    console.log('Teacher with Students:', JSON.stringify(teacherWithStudents, null, 2))
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
