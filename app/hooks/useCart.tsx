// Импорты из React
import { createContext, useContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import type { MenuItem, CartItem } from "~/types";

// Интерфейс значений контекста корзины
interface CartContextValue {
  items: CartItem[];                          // товары в корзине
  totalAmount: number;                       // общая сумма
  totalCount: number;                        // общее количество товаров
  addItem: (item: MenuItem) => void;         // добавить товар
  updateQuantity: (id: number, quantity: number) => void; // изменить количество
  removeItem: (id: number) => void;          // удалить товар
  clearCart: () => void;                     // очистить корзину
}

// Создание контекста (начальное значение null)
const CartContext = createContext<CartContextValue | null>(null);

// Провайдер корзины - оборачивает приложение и предоставляет данные о корзине
export function CartProvider({ children }: { children: ReactNode }) {
  // Состояние корзины
  const [items, setItems] = useState<CartItem[]>([]);
  
  // useMemo кэширует вычисленное значение и пересчитывает только при изменении items
  // Общая сумма заказа
  const totalAmount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  }, [items]);
  
  // Общее количество товаров
  const totalCount = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);
  
  // Добавление товара в корзину
  const addItem = (menuItem: MenuItem) => {
    setItems(prevItems => {
      // Проверяем, есть ли уже такой товар в корзине
      const existingItem = prevItems.find(item => item.menuItem.id === menuItem.id);
      if (existingItem) {
        // Если есть - увеличиваем количество
        return prevItems.map(item =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Если нет - добавляем новый товар с количеством 1
      return [...prevItems, { menuItem, quantity: 1 }];
    });
  };
  
  // Изменение количества товара
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id); // если количество <= 0 - удаляем товар
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.menuItem.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  // Удаление товара из корзины
  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.menuItem.id !== id));
  };
  
  // Полная очистка корзины
  const clearCart = () => {
    setItems([]);
  };
  
  // Возвращаем провайдер контекста
  return (
    <CartContext.Provider
      value={{
        items,
        totalAmount,
        totalCount,
        addItem,
        updateQuantity,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Кастомный хук для использования корзины в любом компоненте
export function useCart() {
  const context = useContext(CartContext);
  // Проверяем, что хук используется внутри провайдера
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}