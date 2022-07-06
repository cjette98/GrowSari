const initialState = {
  products: [],
};

const CartReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      const inCart = state.products.find((item) =>
        item.id === action.code ? true : false
      );
      return {
        ...state,
        products: inCart
          ? state.products.map((item) =>
              item.id === action.code
                ? { ...item, qty: item.qty + action.quantity }
                : item
            )
          : [...state.products, action.payload],
      };

    default:
      return state;
  }
};

export default CartReducers;
