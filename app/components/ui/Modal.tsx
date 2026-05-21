// Импорт типа ReactNode для типизации дочерних элементов
import type { ReactNode } from "react";

// Интерфейс свойств модального окна
interface ModalProps {
  isOpen: boolean;        // открыто ли окно?
  onClose: () => void;    // функция закрытия
  children: ReactNode;    // содержимое окна
  title: string;          // заголовок окна
}

// Компонент модального окна
export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Условный рендеринг: если окно закрыто - ничего не показываем
  if (!isOpen) return null;
  
  return (
    // Затемненный фон на весь экран
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Полупрозрачный черный фон - при клике закрывает окно */}
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      {/* Само модальное окно */}
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 z-10">
        {/* Заголовок окна с кнопкой закрытия */}
        <div className="flex justify-between items-center p-5 border-b border-stone-200">
          <h2 className="text-xl font-bold text-stone-800">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-stone-400 hover:text-stone-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>
        {/* Содержимое окна */}
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
}