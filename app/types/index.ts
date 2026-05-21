// Интерфейс для блюда в меню
export interface MenuItem {
  id: number;           // уникальный идентификатор
  name: string;         // название блюда
  description: string;  // описание блюда
  price: number;        // цена в рублях
  image: string;        // путь к изображению
  category: string;     // категория (Закуски, Основные блюда, Десерты, Напитки)
}

// Интерфейс для товара в корзине
export interface CartItem {
  menuItem: MenuItem;   // информация о блюде
  quantity: number;     // количество
}

// Интерфейс для информации о ресторане
export interface RestaurantInfo {
  name: string;         // название ресторана
  description: string;  // описание
  address: string;      // адрес
  phone: string;        // телефон
  hours: string;        // режим работы
}

// Интерфейс для информации о заказе
export interface OrderInfo {
  items: CartItem[];           // товары в заказе
  totalAmount: number;         // общая сумма
  customerName: string;        // имя клиента
  customerPhone: string;       // телефон клиента
  comment: string;             // комментарий к заказу
  paymentMethod: 'card' | 'cash'; // способ оплаты
}