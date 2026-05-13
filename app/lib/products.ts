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
    price: 1800,
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
    price: 2100,
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
    price: 2300,
    weight: "400g",
    image: "/images/mani-choco-miel.png",
    category: "pastas",
  },
  {
    id: "mani-salado",
    name: "Pasta de Maní Salado",
    description:
      "Maní tostado con toque de sal marina. Para los que prefieren el balance entre dulce y salado.",
    price: 1900,
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
    id: "miel",
    name: "Miel Natural",
    description:
      "Miel pura de campo, sin procesar. Aroma y sabor intenso, ideal para endulzar naturalmente.",
    price: 2500,
    weight: "500g",
    image: "/images/miel.png",
    badge: "Nuevo",
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
