export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  badge?: string;
  category: "pastas" | "otros";
};

export const products: Product[] = [
  {
    id: "mani-original",
    name: "Pasta de Maní Original",
    description:
      "100% maní tostado, sin aditivos ni conservantes. Cremosa, nutritiva y llena de sabor natural.",
    price: 3700,
    weight: "400g",
    image: "/images/mani-original.png",
    badge: "Más vendido",
    category: "pastas",
  },
  {
    id: "mani-chocolate",
    name: "Pasta de Maní y Chocolate",
    description:
      "La combinación perfecta de maní tostado y cacao puro. Ideal para desayunos y meriendas irresistibles.",
    price: 3700,
    weight: "400g",
    image: "/images/mani-chocolate.png",
    badge: "Favorito",
    category: "pastas",
  },
  {
    id: "mani-chocolate-miel",
    name: "Maní, Chocolate y Miel",
    description:
      "Triple combinación ganadora: maní tostado, cacao y miel natural. Dulzura equilibrada en cada cucharada.",
    price: 3700,
    weight: "400g",
    image: "/images/mani-choco-miel.png",
    category: "pastas",
  },
  {
    id: "mani-salado",
    name: "Pasta de Maní Salado",
    description:
      "Maní tostado con toque de sal marina. Para los que prefieren el balance entre dulce y salado.",
    price: 3700,
    weight: "400g",
    image: "/images/mani-salado.png",
    category: "pastas",
  },
  {
    id: "tahini",
    name: "Tahini",
    description:
      "Pasta de sésamo pura y artesanal. Base de hummus, aderezos y cocina saludable. Rico en calcio y proteínas.",
    price: 2200,
    weight: "300g",
    image: "/images/tahini.png",
    category: "otros",
  },
  {
    id: "miel-600",
    name: "Miel Natural",
    description:
      "Miel pura de campo, sin procesar. Aroma y sabor intenso, ideal para endulzar naturalmente.",
    price: 5000,
    weight: "600g",
    image: "/images/miel.png",
    category: "otros",
  },
  {
    id: "miel-1kg",
    name: "Miel Natural",
    description:
      "Miel pura de campo, sin procesar. Aroma y sabor intenso, ideal para endulzar naturalmente.",
    price: 7500,
    weight: "1kg",
    image: "/images/miel.png",
    badge: "Mejor precio",
    category: "otros",
  },
  {
    id: "hummus",
    name: "Hummus Artesanal",
    description:
      "Hummus cremoso elaborado con garbanzos, tahini y limón. Fresco, sabroso y listo para disfrutar.",
    price: 1700,
    weight: "250g",
    image: "/images/hummus.png",
    category: "otros",
  },
];
