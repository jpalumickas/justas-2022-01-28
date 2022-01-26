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
  isWebSocketPaused: boolean;
  asks: OrderbookItem[];
  bids: OrderbookItem[];
  render: {
    limit: number;
    asks: RenderItem[];
    bids: RenderItem[];
    highestTotal: number;
  };
}

export type MessageData = {
  bids: [number, number][];
  asks: [number, number][];
};
