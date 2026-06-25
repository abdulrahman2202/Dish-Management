"use client";

import React from 'react';
import Image from 'next/image';
import { Dish } from '../types/dish';

interface DishCardProps {
    dish: Dish;
    onToggle: (dishId: string) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ dish, onToggle }) => {
    return (
        <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 dark:bg-zinc-900/50 dark:border-zinc-800 ${dish.isPublished ? 'border-zinc-200' : 'border-red-200 bg-red-50/10'}`}>
            <div className="aspect-video relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                {dish.imageUrl ? (
                    <Image
                        src={dish.imageUrl}
                        alt={dish.dishName}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-zinc-400">No Image</div>
                )}
                <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full shadow-sm ${dish.isPublished ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {dish.isPublished ? 'Published' : 'Hidden'}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                            {dish.dishName}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">ID: {dish.dishId}</p>
                    </div>
                </div>

                <button
                    onClick={() => onToggle(dish.dishId)}
                    className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 transform active:scale-95 ${dish.isPublished
                            ? 'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
                            : 'border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900'
                        }`}
                >
                    {dish.isPublished ? 'Unpublish Dish' : 'Publish Dish'}
                </button>
            </div>
        </div>
    );
};
