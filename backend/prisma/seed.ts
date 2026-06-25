import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const dishes = [
    {
        dishId: "1",
        dishName: "Jeera Rice",
        imageUrl: "https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg",
        isPublished: true
    },
    {
        dishId: "2",
        dishName: "Paneer Tikka",
        imageUrl: "https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg",
        isPublished: true
    },
    {
        dishId: "3",
        dishName: "Rabri",
        imageUrl: "https://images.pexels.com/photos/8951202/pexels-photo-8951202.jpeg",
        isPublished: true
    },
    {
        dishId: "4",
        dishName: "Chicken Biryani",
        imageUrl: "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg",
        isPublished: false
    },
    {
        dishId: "5",
        dishName: "Masala Dosa",
        imageUrl: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-1014x1536.jpg",
        isPublished: true
    }
];

async function main() {
    console.log('Seeding dishes...');
    for (const dish of dishes) {
        try {
            const result = await prisma.dish.upsert({
                where: { dishId: dish.dishId },
                update: {
                    dishName: dish.dishName,
                    imageUrl: dish.imageUrl,
                    isPublished: dish.isPublished,
                },
                create: dish,
            });
            console.log(`Upserted dish: ${result.dishName} (${result.dishId}) -> ${result.imageUrl}`);
        } catch (error) {
            console.error(`Failed to upsert dish ${dish.dishId}:`, error);
        }
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
