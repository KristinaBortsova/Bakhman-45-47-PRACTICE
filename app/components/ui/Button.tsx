// Импорт типов из React для типизации
import type { ButtonHTMLAttributes, ReactNode } from "react";

// Интерфейс свойств кнопки
// ButtonHTMLAttributes - наследует все стандартные атрибуты HTML кнопки (onClick, disabled и т.д.)
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;           // содержимое кнопки (текст, иконки)
  variant?: "primary" | "secondary"; // вариант оформления (основная/второстепенная)
}

// Компонент кнопки с параметрами по умолчанию
export default function Button({ 
  children,           // содержимое
  variant = "primary", // вариант по умолчанию - основная
  className = "",      // дополнительные CSS классы
  ...props             // остальные атрибуты кнопки
}: ButtonProps) {
  // Базовые стили для всех кнопок
  const baseClass = "px-6 py-2 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Стили для разных вариантов кнопок
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",   // зеленая кнопка
    secondary: "bg-stone-200 text-stone-800 hover:bg-stone-300"  // серая кнопка
  };
  
  // Возвращаем кнопку с объединенными классами
  return (
    <button className={`${baseClass} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}