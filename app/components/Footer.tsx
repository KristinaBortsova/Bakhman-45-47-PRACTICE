// Импорт данных о ресторане
import { restaurantInfo } from "~/data/restaurant";

// Компонент подвала (футер)
export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-300 py-8 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Три колонки с информацией */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Колонка 1: Название и описание */}
          <div>
            <h3 className="font-bold text-white mb-3">{restaurantInfo.name}</h3>
            <p className="text-sm">{restaurantInfo.description}</p>
          </div>
          {/* Колонка 2: Контакты */}
          <div>
            <h3 className="font-bold text-white mb-3">Контакты</h3>
            <p className="text-sm">{restaurantInfo.address}</p>
            <p className="text-sm">{restaurantInfo.phone}</p>
          </div>
          {/* Колонка 3: Режим работы */}
          <div>
            <h3 className="font-bold text-white mb-3">Режим работы</h3>
            <p className="text-sm">{restaurantInfo.hours}</p>
          </div>
        </div>
        {/* Копирайт */}
        <div className="text-center text-xs text-stone-400 mt-6 pt-4 border-t border-stone-700">
          © 2024 {restaurantInfo.name}. Все права защищены. ¡Bienvenidos!
        </div>
      </div>
    </footer>
  );
}