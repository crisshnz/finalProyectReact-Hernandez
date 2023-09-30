const products = [
  {
    id: "1",
    name: "SECADOR DE PELO PROFESIONAL MARCA TEKNIKPRO MODELO 2800 ALTRO * 1600w",
    price: 150,
    category: "electronicos",
    img: "https://acdn.mitiendanube.com/stores/198/447/products/2800-altro-b1-1cd38bb0b2f9b9b22e15722775189171-320-0.png",
    stock: 25,
    description: "Descripcion de Secador de pelo Teknikpro 2800",
    quantity: 0,
  },
  {
    id: "2",
    name: "Juego De Tijeras De Adelgazamiento De 7 Profesional",
    price: 200,
    category: "herramientas",
    img: "https://down-co.img.susercontent.com/file/441474e0983c222525ad274008f0ecd4_tn",
    stock: 16,
    description: "Descripcion de Juego de tijeras Profesional",
    quantity: 0,
  },
  {
    id: "3",
    name: "Shampoo matizador Elvive purple 200ml",
    price: 5,
    category: "capilares",
    img: "https://farmacityar.vtexassets.com/arquivos/ids/229185/229990_shampoo-elvive-colorvive-purple-x-200-ml_imagen-1.jpg?v=637998805058670000",
    stock: 3,
    description: "Descripcion de Shampoo Matizador",
    quantity: 0,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 500);
  });
};
