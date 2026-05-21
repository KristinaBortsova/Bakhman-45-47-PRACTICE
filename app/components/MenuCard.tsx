// Импорт типа MenuItem
import type { MenuItem } from "~/types";

// Интерфейс свойств карточки
interface Props {
  item: MenuItem;                              // данные о блюде
  onAddToCart: (item: MenuItem) => void;      // функция добавления в корзину
}

// Компонент карточки блюда
export default function MenuCard({ item, onAddToCart }: Props) {
  return (
    // Карточка с тенью и скруглениями
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {/* Изображение блюда */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      {/* Информация о блюде */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{item.name}</h3>
          <span className="text-emerald-600 font-bold">{item.price} ₽</span>
        </div>
        <p className="text-sm text-stone-500 mb-4">{item.description}</p>
        {/* Кнопка добавления в корзину */}
        <button
          onClick={() => onAddToCart(item)}
          className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 transition-colors"
        >
          В корзину
        </button>
      </div>
    </div>
  );
}