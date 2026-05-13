export type ProductVariant = {
  weight: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  variants: ProductVariant[];
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
    variants: [
      { weight: "500g", price: 3700 },
      { weight: "750g", price: 6600 },
      { weight: "1.5kg", price: 9700 },
      { weight: "5kg", price: 31200 },
    ],
    image: "/images/mani-original.png",
    badge: "Más vendido",
    category: "pastas",
  },
  {
    id: "mani-chocolate",
    name: "Pasta de Maní y Chocolate",
    description:
      "La combinación perfecta de maní tostado y cacao puro. Ideal para desayunos y meriendas irresistibles.",
    variants: [{ weight: "500g", price: 3700 }],
    image: "/images/mani-chocolate.png",
    badge: "Favorito",
    category: "pastas",
  },
  {
    id: "mani-chocolate-miel",
    name: "Maní, Chocolate y Miel",
    description:
      "Triple combinación ganadora: maní tostado, cacao y miel natural. Dulzura equilibrada en cada cucharada.",
    variants: [{ weight: "500g", price: 3700 }],
    image: "/images/mani-choco-miel.png",
    category: "pastas",
  },
  {
    id: "mani-salado",
    name: "Pasta de Maní Salado",
    description:
      "Maní tostado con toque de sal marina. Para los que prefieren el balance entre dulce y salado.",
    variants: [{ weight: "500g", price: 3700 }],
    image: "/images/mani-salado.png",
    category: "pastas",
  },
  {
    id: "tahini",
    name: "Tahini",
    description:
      "Pasta de sésamo pura y artesanal. Base de hummus, aderezos y cocina saludable. Rico en calcio y proteínas.",
    variants: [{ weight: "300g", price: 2200 }],
    image: "/images/tahini.png",
    category: "otros",
  },
  {
    id: "miel-600",
    name: "Miel Natural",
    description:
      "Miel pura de campo, sin procesar. Aroma y sabor intenso, ideal para endulzar naturalmente.",
    variants: [
      { weight: "600g", price: 5000 },
      { weight: "1kg", price: 7500 },
    ],
    image: "/images/miel.png",
    category: "otros",
  },
  {
    id: "hummus",
    name: "Hummus Artesanal",
    description:
      "Hummus cremoso elaborado con garbanzos, tahini y limón. Fresco, sabroso y listo para disfrutar.",
    variants: [{ weight: "250g", price: 1700 }],
    image: "/images/hummus.png",
    category: "otros",
  },
];
