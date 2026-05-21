// Импорт типа CartItem с переименованием для избежания конфликта имен
import type { CartItem as CartItemType } from "~/types";

// Интерфейс свойств элемента корзины
interface CartItemProps {
  item: CartItemType;                                    // товар в корзине
  onUpdateQuantity: (id: number, quantity: number) => void; // функция изменения количества
}

// Компонент элемента корзины
export default function CartItem({ item, onUpdateQuantity }: CartItemProps) {
  // Деструктуризация для удобства
  const { menuItem, quantity } = item;
  
  return (
    <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl">
      {/* Изображение блюда */}
      <img
        src={menuItem.image}
        alt={menuItem.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      {/* Информация о блюде */}
      <div className="flex-1">
        <h3 className="font-bold text-stone-800">{menuItem.name}</h3>
        <p className="text-emerald-600 font-bold">{menuItem.price} ₽</p>
        <p className="text-sm text-stone-500">Всего: {menuItem.price * quantity} ₽</p>
      </div>
      
      {/* Кнопки управления количеством */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => onUpdateQuantity(menuItem.id, quantity - 1)}
          className="w-8 h-8 bg-stone-200 rounded-full hover:bg-stone-300 transition-colors"
        >
          -
        </button>
        <span className="font-medium w-8 text-center">{quantity}</span>
        <button
          onClick={() => onUpdateQuantity(menuItem.id, quantity + 1)}
          className="w-8 h-8 bg-stone-200 rounded-full hover:bg-stone-300 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}