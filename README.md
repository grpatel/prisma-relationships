# Prisma relationships
This repository demonstrates examples of the eight different types of relationships supported by Prisma, including one-to-one, one-to-many, implicit many-to-many, explicit many-to-many and self relations for all four.

In the context of databases, relationships refer to connections between tables in the database. These are defined as relations within data models in the Prisma schema. Learn more about relations in Prisma [here](https://www.prisma.io/docs/orm/prisma-schema/data-model/relations).

In this project, I have defined models illustrating these relationships in separate schemas and included executable queries to retrieve data from SQLite databases.

## Getting Started

### 1. Clone this repository

Clone this repository with the following command:

```
git clone https://github.com/grpatel/prisma-relationships.git
```
Then navigate into project directory with the following command:
```
cd prisma-relationships
```

### 2. Install dependencies

Install the npm dependencies with the following command:

```
npm install
```
## Running queries
The executable queries are located within the src folder. To run these, use the custom npm commands below:

| **File**                        | **Command**                       |
|---------------------------------|-----------------------------------|
| one-to-one.ts                   | `npm run 1-1`                     |
| one-to-many.ts                  | `npm run 1-m`                     |
| implicit-many-to-many.ts        | `npm run i-m-m`                   |
| explicit-many-to-many.ts        | `npm run e-m-m`                   |
| self-one-to-one.ts              | `npm run s-1-1`                   |
| self-one-to-many.ts             | `npm run s-1-m`                   |
| self-implicit-many-to-many.ts   | `npm run si-m-m`                  |
| self-explicit-many-to-many.ts   | `npm run se-m-m`                  |



> Alternatively, you can use: `npx ts-node src/[file name]`

## Relationships
> Boilerplate code is removed from the code snippets below

### One-to-one relationship
A user can have one profile and a profile can belong to one user.

Query to retrieve profile:
```
    const userWithProfile = await prisma.user.findMany({
        include: {
            profile: true
        }
    })
```
### One-to-many relationship
A post can be authored by one user and a user can have many posts.

Query to retrieve posts:
```
    const userWithPosts = await prisma.user.findMany({
        include: {
            posts: true
        }
    })

```

### Implicit many-to-many relationship
Posts can have multiple tags, and tags can be associated with multiple posts.
Implicit means that Prisma defines the relation table. 

Query to retrieve post with tags:
```
    const postWithTags = await prisma.post.findMany({
        include: {
            tags: true
        }
    })

```
> Only one query is shown to keep it simple. The file also includes a query to retrieve tag with posts

### Explicit many-to-many relationship
Posts can have multiple tags, and tags can be associated with multiple posts.
Explicit requires manually creating the relation table.

Query to retrieve post with tags:
```
    const postWithTags = await prisma.post.findMany({
        include: {
            tags: true
        }
    })

```

### Self one-to-one relationship
For self relations, each record in the table is related to another record within the same table. In this case, a user can have zero or one best friend.

Query to retrieve best friend:
```
    const userWithBestFriend = await prisma.user.findMany({
        include: {
          bestFriend1: true
        }
    })

```

### Self one-to-many relationship
A user can act as a teacher for multiple students

Query to retrieve teacher's students:
```
    const teacherWithStudents = await prisma.user.findMany({
        where: { teacherId: null },
        include: {
          students: true 
        }
    })

```
### Self implicit many-to-many relationship
Users can follow users and be followed by other users.

Query to retrieve user's followers and following:
```
    const userWithFollowersAndFollowing = await prisma.user.findMany({
        include: {
            followedBy: true,
            following: true
        }
    })

```

### Self explicit many-to-many relationship
Users can explicitly follow users and be followed by other users. The relation table is manually created.

Query to retrieve user's followers and following:
```
    const userWithFollowersAndFollowing = await prisma.user.findMany({
        include: {
            followedBy: true,
            following: true
        }
    })

```