export default (state = {}, action) => {
  const { name, description, price, quantity, id } = action;
  switch (action.type) {
  case 'ADD_MERCH':
    return Object.assign({}, state, {
      [id] : {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  case 'DELETE_MERCH':
    const newState = { ...state };
    delete newState[id];
    return newState;
  case 'ADD_QUANTITY':
    const moreMerch = { ...state };
    moreMerch[id].quantity +=1;
    return moreMerch;
  case 'SELL_MERCH':
    const lessMerch = { ...state };
    if (lessMerch[id].quantity > 0) {
      lessMerch[id].quantity -=1;
      return lessMerch;
    } else {
      return 'Out Of Stock'
    }
  default:
    return state;
  }
};