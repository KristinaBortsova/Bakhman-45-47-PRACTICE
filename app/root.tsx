// Импорты из React Router
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { LinksFunction } from "react-router";
// Импорт провайдера корзины
import { CartProvider } from "~/hooks/useCart";
// Импорт компонентов шапки и подвала
import Header from "~/components/Header";
import Footer from "~/components/Footer";
// Глобальные стили
import "./app.css";

export const links: LinksFunction = () => [];

// Layout - обертка для всего приложения
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Провайдер корзины - данные доступны во всем приложении */}
        <CartProvider>
          {/* Flex-контейнер для прижатия футера к низу */}
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {/* Outlet - место для отображения текущей страницы */}
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
        {/* Восстановление позиции скролла при переходах */}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// Корневой компонент
export default function Root() {
  return <Outlet />;
}