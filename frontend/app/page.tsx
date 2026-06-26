"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Dish } from "../types/dish";
import * as dishService from "../services/dish.service";
import { DishCard } from "../components/DishCard";

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4000";

export default function Home() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDishes();

    // Socket.IO Integration
    const socket = io(SOCKET_URL);

    socket.on("connect", () => {
      console.log("Connected to real-time updates server");
    });

    socket.on("dishUpdated", (updatedDish: Dish) => {
      console.log("Real-time update received:", updatedDish);
      setDishes((prev) =>
        prev.map((d) => (d.dishId === updatedDish.dishId ? updatedDish : d))
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchDishes = async () => {
    try {
      setLoading(true);
      const data = await dishService.getDishes();
      setDishes(data);
      setError(null);
    } catch (err: any) {
      setError("Failed to fetch dishes. Is the backend server running?");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (dishId: string) => {
    try {
      // Optimistic update
      setDishes((prev) =>
        prev.map((d) =>
          d.dishId === dishId ? { ...d, isPublished: !d.isPublished } : d
        )
      );

      await dishService.toggleDishStatus(dishId);
    } catch (err: any) {
      console.error("Failed to toggle status:", err);
      // Revert on error
      fetchDishes();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <header className="sticky top-0 z-30 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-xl flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-xl">D</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Dish Dashboard
            </h1>
          </div>
          <button
            onClick={fetchDishes}
            className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            Refresh Feed
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Kitchen Inventory
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Manage your menu items in real-time. Toggle visibility to control what customers can see on the digital menu.
          </p>
        </div>

        {loading && dishes.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse bg-zinc-100 dark:bg-zinc-900 rounded-2xl h-80"></div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/20 rounded-2xl p-8 text-center">
            <p className="text-red-700 dark:text-red-400 font-medium mb-4">{error}</p>
            <button
              onClick={fetchDishes}
              className="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-colors"
            >
              Retry Connection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {dishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} onToggle={handleToggle} />
            ))}
          </div>
        )}
      </main>

      <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-400 dark:text-zinc-600 text-sm">
            &copy; 2026 Dish Management Assignment. Powered by Real-time Sync. Develop By Abdul Rahman
          </p>
        </div>
      </footer>
    </div>
  );
}
