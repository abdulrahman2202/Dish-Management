-- CreateTable
CREATE TABLE "public"."Dish" (
    "id" SERIAL NOT NULL,
    "dishId" TEXT NOT NULL,
    "dishName" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dish_dishId_key" ON "public"."Dish"("dishId");
