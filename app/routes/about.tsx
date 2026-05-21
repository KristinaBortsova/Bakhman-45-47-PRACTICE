import { restaurantInfo } from "~/data/restaurant";

export function meta() {
  return [{ title: "О нас | Эль Камино" }];
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">🇲🇽 О нашем ресторане</h1>
        <p className="text-stone-500 text-lg">Узнайте больше о {restaurantInfo.name}</p>
      </div>
      
      <div className="bg-stone-50 rounded-2xl p-8 shadow-md">
        {/* Место для фотографии ресторана */}
        <div className="aspect-video bg-stone-300 rounded-xl mb-8 flex items-center justify-center text-stone-500">
          🎸 Фотография ресторана "Эль Камино"
        </div>
        
        <p className="text-stone-700 text-lg leading-relaxed mb-6">
          {restaurantInfo.description}
        </p>
        
        <div className="border-t border-stone-200 pt-6">
          <h2 className="text-xl font-bold text-stone-800 mb-4">Наши преимущества</h2>
          <ul className="space-y-3 text-stone-600">
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 text-xl">🌮</span>
              Аутентичные рецепты из разных регионов Мексики
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 text-xl">🥑</span>
              Только свежайшие продукты от проверенных поставщиков
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 text-xl">🎵</span>
              Живая музыка и атмосфера настоящей фиесты
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 text-xl">🏆</span>
              Лучший мексиканский ресторан Москвы 2023-2024
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-500 text-xl">🚚</span>
              Бесплатная доставка по городу от 2000 ₽
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}