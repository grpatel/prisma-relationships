import { PrismaClient } from '../prisma/one-to-many'
const prisma = new PrismaClient()

async function main() {
  
    const userWithPosts = await prisma.user.findMany({
        include: {
            posts: true
        }
    })

    console.log('User with Posts:', JSON.stringify(userWithPosts, null, 2));

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