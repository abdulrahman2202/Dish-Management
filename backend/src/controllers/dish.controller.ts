import { Request, Response } from "express";
import * as dishService from "../services/dish.service";
import { emitDishUpdate } from "../socket/socket";

interface DishParams {
    dishId: string;
}

export const getDishes = async (_req: Request, res: Response) => {
    try {
        const dishes = await dishService.getAllDishes();
        res.json(dishes);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const toggleStatus = async (
    req: Request<DishParams>,
    res: Response
): Promise<void> => {
    try {
        const { dishId } = req.params;

        const updatedDish = await dishService.toggleDishStatus(dishId);

        emitDishUpdate(updatedDish);

        res.json(updatedDish);
    } catch (error: any) {
        if (error.message === "Dish not found") {
            res.status(404).json({ message: error.message });
            return;
        }

        res.status(500).json({ message: error.message });
    }
};