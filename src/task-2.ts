interface Product {
  readonly id: number;
  title: string;
  description?: string;
  price: number;
}

const product: Product = {
  id: 1,
  title: 'Tablet',
  description: 'Compact and powerful tablet',
  price: 1000,
};

console.log(`Product: ${JSON.stringify(product)}`);
