import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Kevin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Blue Dress shirt',
      slug: 'blue-dress-shirt',
      category: 'Shirts',
      image: '/images/p1.jpeg',
      price: 120,
      countInStock: 0, 
      brand: 'Generic',
      rating: 3.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Red Dress Shirt',
      slug: 'red-dress-shirt',
      category: 'Shirts',
      image: '/images/p2.jpeg',
      price: 250,
      countInStock: 20,
      brand: 'Generic',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Chino Slim Pant',
      slug: 'chino-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpeg',
      price: 25,
      countInStock: 15,
      brand: 'Generic',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      name: 'Chino Fit Pant',
      slug: 'chino-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpeg',
      price: 65,
      countInStock: 5,
      brand: 'Generic',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;