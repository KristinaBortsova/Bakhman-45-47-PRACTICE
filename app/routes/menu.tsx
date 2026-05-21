import { useState } from "react";
import { menuData } from "~/data/menu";
import MenuCard from "~/components/MenuCard";
import { useCart } from "~/hooks/useCart";
import type { MenuItem } from "~/types";

// Мета-данные страницы
export function meta() {
  return [{ title: "Меню | Эль Камино" }];
}

// Компонент страницы меню
export default function MenuPage() {
  // Массив категорий для фильтрации
  const categories = ["Все", "Закуски", "Основные блюда", "Десерты", "Напитки"];
  // Состояние текущей выбранной категории
  const [activeCategory, setActiveCategory] = useState("Все");
  // Получаем данные корзины из контекста
  const { totalCount, addItem } = useCart();
  
  // Фильтрация блюд по выбранной категории
  const filteredMenu = activeCategory === "Все"
    ? menuData
    : menuData.filter(item => item.category === activeCategory);
  
  // Обработчик добавления в корзину
  const addToCart = (item: MenuItem) => {
    addItem(item);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Заголовок и счетчик корзины */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-stone-800">🌮 Наше меню</h1>
        <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-medium">
          🛒 В корзине: {totalCount} товаров
        </div>
      </div>
      
      {/* Кнопки фильтрации по категориям */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? "bg-emerald-600 text-white"
                : "bg-stone-200 text-stone-700 hover:bg-stone-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Сетка карточек блюд */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenu.map(item => (
          <MenuCard key={item.id} item={item} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}