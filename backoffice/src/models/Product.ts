export default interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  price_cents: string;
  created_at?: string;
  updated_at?: string;
}
