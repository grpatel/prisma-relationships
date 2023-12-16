import { PrismaClient } from '../prisma/implicit-many-to-many'
const prisma = new PrismaClient()

async function main() {
  
    const postWithTags = await prisma.post.findMany({
        include: {
            tags: true
        }
    })

    const tagWithPosts = await prisma.tag.findMany({
        include: {
            posts: true
        }
    })

    console.log('Post with Tags:', JSON.stringify(postWithTags, null, 2))
    console.log('Tag with Posts:', JSON.stringify(tagWithPosts, null, 2))

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