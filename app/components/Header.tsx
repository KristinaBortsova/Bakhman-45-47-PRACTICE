// Импорт компонентов навигации из React Router
import { Link, NavLink } from "react-router";

// Компонент шапки (навигационная панель)
export default function Header() {
  return (
    <header className="bg-emerald-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 max-w-6xl flex justify-between items-center">
        {/* Логотип - ссылка на главную */}
        <Link to="/" className="text-2xl font-bold hover:text-emerald-300 transition-colors">
          Эль Камино
        </Link>
        
        {/* Навигационные ссылки */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            // isActive - автоматический параметр от React Router, показывает активную страницу
            className={({ isActive }) =>
              isActive ? "text-emerald-300 font-medium" : "hover:text-emerald-300 transition-colors"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "text-emerald-300 font-medium" : "hover:text-emerald-300 transition-colors"
            }
          >
            Меню
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-emerald-300 font-medium" : "hover:text-emerald-300 transition-colors"
            }
          >
            Корзина
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-emerald-300 font-medium" : "hover:text-emerald-300 transition-colors"
            }
          >
            О нас
          </NavLink>
        </div>
      </nav>
    </header>
  );
}