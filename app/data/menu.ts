import type { MenuItem } from "~/types";

// Массив блюд ресторана "Эль Камино"
// new URL() используется для правильного пути к изображениям после сборки
export const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Гуакамоле",
    description: "Классическое мексиканское авокадо-пюре с лаймом, кинзой и томатами. Подается с чипсами из тортильи",
    price: 350,
    image: new URL('../assets/images/guacamole.jpg', import.meta.url).href,
    category: "Закуски"
  },
  {
    id: 2,
    name: "Начос с сыром",
    description: "Хрустящие чипсы из тортильи с расплавленным сыром чеддер, халапеньо и соусом сальса",
    price: 420,
    image: new URL('../assets/images/nachos.jpg', import.meta.url).href,
    category: "Закуски"
  },
  {
    id: 3,
    name: "Кесо-дип",
    description: "Нежный сырный соус с халапеньо и специями. Подается с тортильей",
    price: 280,
    image: new URL('../assets/images/queso.jpg', import.meta.url).href,
    category: "Закуски"
  },
  {
    id: 4,
    name: "Тако с говядиной",
    description: "Две сочные тортильи с мраморной говядиной, луком, кинзой и острым соусом",
    price: 520,
    image: new URL('../assets/images/taco-beef.jpg', import.meta.url).href,
    category: "Основные блюда"
  },
  {
    id: 5,
    name: "Буррито",
    description: "Большая тортилья с рисом, фасолью, курицей, сыром и томатным соусом",
    price: 590,
    image: new URL('../assets/images/burrito.jpg', import.meta.url).href,
    category: "Основные блюда"
  },
  {
    id: 6,
    name: "Фахитас с курицей",
    description: "Сковорода с маринованной курицей, перцем, луком. Подается с тортильями и 3 соусами",
    price: 680,
    image: new URL('../assets/images/fajitas.jpg', import.meta.url).href,
    category: "Основные блюда"
  },
  {
    id: 7,
    name: "Кесадилья",
    description: "Хрустящая тортилья с курицей, сыром, грибами и сладким перцем",
    price: 480,
    image: new URL('../assets/images/quesadilla.jpg', import.meta.url).href,
    category: "Основные блюда"
  },
  {
    id: 8,
    name: "Чилес эн ногада",
    description: "Фаршированные перцы в грецко-сливочном соусе с гранатом - коронное блюдо",
    price: 890,
    image: new URL('../assets/images/chiles.jpg', import.meta.url).href,
    category: "Основные блюда"
  },
  {
    id: 9,
    name: "Трес лечес",
    description: "Нежный бисквит, пропитанный тремя видами молока, с карамелью",
    price: 380,
    image: new URL('../assets/images/tres-leches.jpg', import.meta.url).href,
    category: "Десерты"
  },
  {
    id: 10,
    name: "Чуррос",
    description: "Испанские пончики с корицей и сахаром. Подаются с шоколадным соусом",
    price: 320,
    image: new URL('../assets/images/churros.jpg', import.meta.url).href,
    category: "Десерты"
  },
  {
    id: 11,
    name: "Маргарита",
    description: "Классическая маргарита на текиле с лаймом и солью на ободке",
    price: 450,
    image: new URL('../assets/images/margarita.jpg', import.meta.url).href,
    category: "Напитки"
  },
  {
    id: 12,
    name: "Орчата",
    description: "Традиционный мексиканский напиток из риса с корицей и ванилью",
    price: 250,
    image: new URL('../assets/images/horchata.jpg', import.meta.url).href,
    category: "Напитки"
  }
];