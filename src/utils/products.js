const products = [
    {
        id: 1,
        name: "Master Dog sabor CARNE 15KG",
        stock: 20,
        price: 140,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 15000,
        image: [
          "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20087587-5Cecf8SD.jpg"
        ],
        sales: 0,
        categoryId: "perros",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 1,
          name: "dog lover"
        }
      },
      {
        id: 2,
        name: "Dog Chaw sabor Carne y Pollo 15kg",
        stock: 40,
        price: 2550,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 15000,
        image: [
          "https://carrefourar.vtexassets.com/arquivos/ids/246281/8445290085337_01.jpg?v=637901385082430000"
        ],
        sales: 0,
        categoryId: "perros",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 2,
          name: "purina"
        }
      },
      {
        id: 3,
        name: "Dog Chaw sabor Carne y Pollo 1,5kg",
        stock: 20,
        price: 140,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 1500,
        image: [
          "https://ardiaprod.vtexassets.com/arquivos/ids/225214/Alimento-Seco-para-Perro-Dog-Chow-Cachorros-Minis-y-Pequeños-15-Kg-_1.jpg?v=637894534921400000"
        ],
        sales: 0,
        categoryId: "perro",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 2,
          name: "purina"
        }
      },
      {
        id: 4,
        name: "Pedigree sabor carne 100gr",
        stock: 20,
        price: 240,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 100,
        image: [
          "https://carrefourar.vtexassets.com/arquivos/ids/161305/7797453000796_01.jpg?v=637467656789000000"
        ],
        sales: 0,
        categoryId: "perro",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 3,
          name: "pedigree"
        }
      },
      {
        id: 5,
        name: "Dogui sabor Carne, Pollo y Vegetales 3kg",
        stock: 20,
        price: 140,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 3000,
        image: [
          "https://ardiaprod.vtexassets.com/arquivos/ids/214155-500-auto?v=637711240964000000&width=500&height=auto&aspect=true"
        ],
        sales: 0,
        categoryId: "perro",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 4,
          name: "pedigree"
        }
      },
      {
        id: 6,
        name: "Cat Chow sabor Carne 3kg",
        stock: 20,
        price: 140,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 3000,
        image: [
          "https://jumboargentina.vtexassets.com/arquivos/ids/640321-500-auto?v=637556082540200000&width=500&height=auto&aspect=true"
        ],
        sales: 0,
        categoryId: "gatos",
        brandId: 1,
        category: {
          name: "Comida",
          id: 1
        },
        brand: {
          id: 2,
          name: "purina"
        }
      },
      {
        id: 7,
        name: "Cat Chow sabor Pescado 3kg",
        stock: 20,
        price: 140,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 3000,
        image: [
          "https://jumboargentina.vtexassets.com/arquivos/ids/681926/Alim-Cat-Chow-Adulto-Pescado-Pollo-3k-1-882639.jpg?v=637757194081330000"
        ],
        sales: 0,
        categoryId: "gatos",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 2,
          name: "purina"
        }
      },
    {
        id: 8,
        name: "Cat Chow sabor Carne y Pescado 1kg",
        stock: 20,
        price: 1440,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 1000,
        image: [
          "https://ardiaprod.vtexassets.com/arquivos/ids/219057/Alimento-Seco-para-Gatos-Cat-Chow-Adultos-Carne-y-Pollo-1-Kg-_1.jpg?v=637778475325170000"
        ],
        sales: 0,
        categoryId: "gatos",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 2,
          name: "purina"
        }
      },
      {
        id: 9,
        name: "Wiskas sabor carne 3kg",
        stock: 20,
        price: 140,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 3000,
        image: [
          "https://jumboargentina.vtexassets.com/arquivos/ids/586464/Alimento-Whiskas-Para-Gatos-Carne-3kg-1-814242.jpg?v=637265784394130000"
        ],
        sales: 0,
        categoryId: "gatos",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 5,
          name: "wiskas"
        }
      },
      {
        id: 10,
        name: "Gati sabor Salmon y Pollo 3kg",
        stock: 20,
        price: 1840,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 3000,
        image: [
          "https://ardiaprod.vtexassets.com/arquivos/ids/219051-500-auto?v=637778475187530000&width=500&height=auto&aspect=true"
        ],
        sales: 0,
        categoryId: "gatos",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 2,
          name: "purina"
        }
      },
      {
        id: 11,
        name: "Wiskas sabor Sardina 85gr",
        stock: 20,
        price: 280,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 85,
        image: [
          "https://jumboargentina.vtexassets.com/arquivos/ids/586429/Alimento-Para-Gatos-Whiskas-Pasta-Sardina-85-Gr-1-42084.jpg?v=637265784244630000"
        ],
        sales: 0,
        categoryId: "gatos",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 5,
          name: "wiskas"
        }
      },
      {
        id: 11,
        name: "Wiskas sabor Sardina 85gr",
        stock: 20,
        price: 280,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 85,
        image: [
          "https://jumboargentina.vtexassets.com/arquivos/ids/586429/Alimento-Para-Gatos-Whiskas-Pasta-Sardina-85-Gr-1-42084.jpg?v=637265784244630000"
        ],
        sales: 0,
        categoryId: "gatos",
        brandId: 1,
        category: {
          name: "comida",
          id: 1
        },
        brand: {
          id: 5,
          name: "wiskas"
        }
      }
]


module.exports = {
    products,
  }