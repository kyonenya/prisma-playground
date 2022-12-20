import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
//  const user = await prisma.user.create({
//    data: {
//      name: 'Alice',
//      email: 'alice@gmail.com',
//    }
//  });
//  console.log(user);
  const users = await prisma.user.findMany();
  console.log(users);
}

main
  ().then(async () => await prisma.$disconnect())
