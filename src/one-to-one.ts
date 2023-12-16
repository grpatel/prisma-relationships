import { PrismaClient } from "../prisma/one-to-one"
const prisma = new PrismaClient()

async function main() {
  
    const userWithProfile = await prisma.user.findMany({
        include: {
            profile: true
        }
    })
    console.log('User with Profile:',userWithProfile)
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