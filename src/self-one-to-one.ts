import { PrismaClient } from "../prisma/self-one-to-one"
const prisma = new PrismaClient()

async function main() {
    const userWithBestFriend = await prisma.user.findMany({
        include: {
          bestFriend1: true
        }
      })
      
      console.log('User with Best Friend:', userWithBestFriend);
    
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