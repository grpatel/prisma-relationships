import { PrismaClient } from "../prisma/self-explicit-many-to-many"
const prisma = new PrismaClient()

async function main() {
    const userWithFollowersAndFollowing = await prisma.user.findMany({
        include: {
        followedBy: true,
        following: true
        }
    })
    
    console.log('User with Followers and Following:', userWithFollowersAndFollowing)
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