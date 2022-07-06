export const ADD_CART_ITEM = (data) => {
  return async (dispatch, getState) => {
    const { qty, id } = data;
    dispatch({
      type: 'ADD_CART_ITEM',
      payload: data,
      code: id,
      quantity: qty,
    });
  };
};
