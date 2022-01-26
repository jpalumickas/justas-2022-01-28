export type Item = {
  price: number;
  size: number;
};

export interface OrderbookState {
  productId: string;
  asks: Item[];
  bids: Item[];
  render: {
    asks: Item[];
    bids: Item[];
  };
}

export type MessageData = {
  bids: [number, number][];
  asks: [number, number][];
};
