import { PrismaClient } from "../prisma/self-one-to-many"
const prisma = new PrismaClient()

async function main() {
    const teacherWithStudents = await prisma.user.findMany({
        include: {
        students: true
        }
    });
    
    console.log('Teacher with Students:', teacherWithStudents);
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