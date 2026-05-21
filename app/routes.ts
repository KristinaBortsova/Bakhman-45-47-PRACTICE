// Импорт типов и функций для маршрутизации
import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

// Экспорт массива маршрутов
// index() - корневой маршрут (главная страница)
// route(путь, компонент) - остальные страницы
export default [
  index("routes/home.tsx"),           // / - главная
  route("menu", "routes/menu.tsx"),   // /menu - страница меню
  route("cart", "routes/cart.tsx"),   // /cart - корзина
  route("checkout", "routes/checkout.tsx"), // /checkout - оформление заказа
  route("about", "routes/about.tsx")  // /about - о ресторане
] satisfies RouteConfig;