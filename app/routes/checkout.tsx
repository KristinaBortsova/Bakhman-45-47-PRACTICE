import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useCart } from "~/hooks/useCart";
import Button from "~/components/ui/Button";
import Modal from "~/components/ui/Modal";

export function meta() {
  return [{ title: "Оформление заказа | Эль Камино" }];
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalAmount, clearCart } = useCart();
  
  // Состояния формы
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash">("card");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Если корзина пуста - показываем сообщение
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-6xl text-center">
        <h1 className="text-3xl font-bold text-stone-800 mb-4">Оформление заказа</h1>
        <p className="text-stone-500 mb-6">Корзина пуста, невозможно оформить заказ</p>
        <Link
          to="/menu"
          className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-xl hover:bg-emerald-700 transition-colors"
        >
          Перейти в меню
        </Link>
      </div>
    );
  }
  
  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Отменяем стандартное поведение формы
    if (!name.trim() || !phone.trim()) {
      alert("Пожалуйста, заполните имя и телефон");
      return;
    }
    setIsProcessing(true);
    // Имитация обработки платежа (2 секунды)
    setTimeout(() => {
      setIsProcessing(false);
      setIsModalOpen(true);
    }, 2000);
  };
  
  // Закрытие модального окна и очистка корзины
  const handleCloseModal = () => {
    setIsModalOpen(false);
    clearCart();
    navigate("/");
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-stone-800 mb-8">📋 Оформление заказа</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Поля имени и телефона */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-stone-700 font-medium mb-2">Ваше имя *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Иван"
            />
          </div>
          <div>
            <label className="block text-stone-700 font-medium mb-2">Телефон *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="+7 (999) 123-45-67"
            />
          </div>
        </div>
        
        {/* Комментарий к заказу */}
        <div>
          <label className="block text-stone-700 font-medium mb-2">Комментарий к заказу</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            rows={3}
            placeholder="Пожелания, аллергии, особенности..."
          />
        </div>
        
        {/* Способ оплаты */}
        <div>
          <label className="block text-stone-700 font-medium mb-2">Способ оплаты</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="accent-emerald-600"
              />
              💳 Картой онлайн
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="accent-emerald-600"
              />
              💵 Наличными
            </label>
          </div>
        </div>
        
        {/* Сводка заказа */}
        <div className="bg-stone-100 rounded-2xl p-5">
          <h3 className="font-bold text-stone-800 mb-3">Ваш заказ:</h3>
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.menuItem.id} className="flex justify-between text-stone-600 py-1">
                <span>{item.menuItem.name} × {item.quantity}</span>
                <span>{item.menuItem.price * item.quantity} ₽</span>
              </div>
            ))}
          </div>
          <div className="border-t border-stone-300 mt-3 pt-3 flex justify-between font-bold text-lg">
            <span>Итого:</span>
            <span className="text-emerald-700">{totalAmount} ₽</span>
          </div>
        </div>
        
        {/* Кнопка оплаты */}
        <Button type="submit" disabled={isProcessing} className="w-full py-4 text-lg">
          {isProcessing ? "⏳ Обработка платежа..." : "💳 Оплатить заказ"}
        </Button>
      </form>
      
      {/* Модальное окно после успешного заказа */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="¡Gracias! Заказ оформлен!">
        <div className="text-center py-4">
          <p className="text-lg text-stone-700 mb-2">
            Спасибо, {name}! 🌮
          </p>
          <p className="text-stone-500 mb-6">
            Ваш заказ на сумму <strong>{totalAmount} ₽</strong> принят.<br />
            Мы свяжемся с вами по телефону <strong>{phone}</strong> в ближайшее время.
          </p>
          <Button onClick={handleCloseModal} className="w-full">
            На главную
          </Button>
        </div>
      </Modal>
    </div>
  );
}