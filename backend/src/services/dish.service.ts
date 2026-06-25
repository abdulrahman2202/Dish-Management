import prisma from '../utils/prisma';

export const getAllDishes = async () => {
    return await prisma.dish.findMany({
        orderBy: {
            id: 'asc',
        },
    });
};

export const toggleDishStatus = async (dishId: string) => {
    const dish = await prisma.dish.findUnique({
        where: { dishId },
    });

    if (!dish) {
        throw new Error('Dish not found');
    }

    return await prisma.dish.update({
        where: { dishId },
        data: {
            isPublished: !dish.isPublished,
        },
    });
};
