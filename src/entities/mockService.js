const mockProducts = [
  {
    id: 1,
    title: 'Смарт‑часы X100',
    price: 7490,
    category: 'Гаджеты',
    image:
      '/images/watch.jpeg',
    description: 'Водонепроницаемые, GPS, 7‑дневный аккумулятор',
  },
  {
    id: 2,
    title: 'Смартфон ZTE',
    price: 30000,
    category: 'Гаджеты',
    image:
      '/images/phone.webp',
    description: 'Камера: 40mpx, Bluetooth 5.0, NFC, Full HD Display',
  },
  {
    id: 3,
    title: 'Гантели SportFit',
    price: 2000,
    category: 'Спорт',
    image:
      '/images/dumbbells.jpeg',
    description: '20 килограмм, чугун, силиконовая ручка',
  },
  {
    id: 4,
    title: 'Набор для творчества DoctorShop',
    price: 1500,
    category: 'Хобби',
    image:
      '/images/doctor.jpg',
    description: 'Стетоскоп, термометр, шприц, удобная сумка для хранения',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 600);
  });
};
