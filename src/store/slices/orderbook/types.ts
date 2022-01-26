export type OrderbookItem = {
  price: number;
  size: number;
};

export type RenderItem = {
  price: number;
  size: number;
  total: number;
};

export interface OrderbookState {
  productId: string;
  asks: OrderbookItem[];
  bids: OrderbookItem[];
  render: {
    asks: RenderItem[];
    bids: RenderItem[];
  };
}

export type MessageData = {
  bids: [number, number][];
  asks: [number, number][];
};
