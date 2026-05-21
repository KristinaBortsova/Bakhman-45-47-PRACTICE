// Импорт компонента Link для навигации
import { Link } from "react-router";
// Импорт данных о ресторане
import { restaurantInfo } from "~/data/restaurant";

// Мета-данные страницы (заголовок вкладки, SEO)
export function meta() {
  return [
    { title: `${restaurantInfo.name} | Аутентичная мексиканская кухня` },
    { name: "description", content: restaurantInfo.description }
  ];
}

// Компонент главной страницы
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl text-center">
      <div className="space-y-6">
        {/* Заголовок с названием ресторана */}
        <h1 className="text-5xl font-bold text-stone-800">🤠 {restaurantInfo.name}</h1>
        {/* Описание */}
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">{restaurantInfo.description}</p>
        {/* Кнопка перехода в меню */}
        <div className="pt-6">
          <Link
            to="/menu"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            📖 Посмотреть меню
          </Link>
        </div>
      </div>
    </div>
  );
}