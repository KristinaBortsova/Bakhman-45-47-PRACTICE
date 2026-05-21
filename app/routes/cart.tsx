import { Link } from "react-router";
import { useCart } from "~/hooks/useCart";

export function meta() {
  return [{ title: "Корзина | Эль Камино" }];
}

export default function CartPage() {
  // Получаем данные корзины из контекста
  const { items, totalAmount, updateQuantity } = useCart();
  
  // Если корзина пуста - показываем сообщение и ссылку на меню
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-stone-800 mb-4">🛒 Корзина</h1>
        <p className="text-stone-500 mb-6">Ваша корзина пуста... но это легко исправить! 🌮</p>
        <Link
          to="/menu"
          className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition-colors"
        >
          Перейти в меню
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-stone-800 mb-8">🛒 Корзина</h1>
      
      {/* Список товаров в корзине */}
      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.menuItem.id} className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl">
            <img
              src={item.menuItem.image}
              alt={item.menuItem.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-bold text-stone-800 text-lg">{item.menuItem.name}</h3>
              <p className="text-emerald-600 font-bold">{item.menuItem.price} ₽</p>
              <p className="text-sm text-stone-500">Всего: {item.menuItem.price * item.quantity} ₽</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                className="w-8 h-8 bg-stone-200 rounded-full hover:bg-stone-300 transition-colors text-lg"
              >
                -
              </button>
              <span className="font-medium w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                className="w-8 h-8 bg-stone-200 rounded-full hover:bg-stone-300 transition-colors text-lg"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Блок с итоговой суммой и кнопкой оформления */}
      <div className="bg-stone-100 rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold text-stone-800">Итого:</span>
          <span className="text-2xl font-bold text-emerald-600">{totalAmount} ₽</span>
        </div>
        <Link
          to="/checkout"
          className="block w-full bg-emerald-600 text-white text-center py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
        >
          Оформить заказ
        </Link>
      </div>
    </div>
  );
}