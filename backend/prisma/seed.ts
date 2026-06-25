import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const dishes = [
    {
        dishId: "1",
        dishName: "Jeera Rice",
        imageUrl: "https://manjulaskitchen.com/wp-content/uploads/jeera_rice.jpg",
        isPublished: true
    },
    {
        dishId: "2",
        dishName: "Paneer Tikka",
        imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2014/11/paneer-tikka-restaurant-style.jpg",
        isPublished: true
    },
    {
        dishId: "3",
        dishName: "Rabri",
        imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2012/10/rabri-recipe-1.jpg",
        isPublished: true
    },
    {
        dishId: "4",
        dishName: "Chicken Biryani",
        imageUrl: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Biryani.jpg",
        isPublished: false
    },
    {
        dishId: "5",
        dishName: "Masala Dosa",
        imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/masala-dosa-1.jpg",
        isPublished: true
    }
];

async function main() {
    console.log('Seeding dishes...');
    for (const dish of dishes) {
        await prisma.dish.upsert({
            where: { dishId: dish.dishId },
            update: {},
            create: dish,
        });
    }
    console.log('Seeding completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
