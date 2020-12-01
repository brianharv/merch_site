import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {

  const currentState = {
    1: {name: 'Black Sabbath Shirt',
    description: 'A really cool tee',
    quantity: 12,
    price: 20,
    id: 1},
    2: {name: 'Thin Lizzy Pants',
    description: 'Some tight pants',
    quantity: 3,
    price: 60,
    id: 2} 
  }

  let action;
  const merchData = {
    name: 'Black Sabbath Shirt',
    description: 'A really cool tee',
    quantity: 12,
    price: 20,
    id: 1
  }

  test('Should return default state if there is not action type passed to it', () => {
    expect(merchListReducer({}, {type: null})).toEqual({});
  });

  test('Should add a piece of merch to the masterMerchList', () => {
    const { name, description, quantity, price, id } = merchData;
    let action = {
      type: 'ADD_MERCH',
      name: name,
      description: description,
      quantity: quantity,
      price: price,
      id: id,
    }

    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        quantity: quantity,
        price: price,
        id: id
      }
    });
  });

test('Should delete merch item from masterMerchList', () => {
  action = {
    type: 'DELETE_MERCH',
    id: 1
  };

  expect(merchListReducer(currentState, action)).toEqual({
    2: {name: 'Thin Lizzy Pants',
      description: 'Some tight pants',
      quantity: 3,
      price: 60,
      id: 2} 
    });
  });

  test('Should increment quantity', () => {
    action = {
      type: 'ADD_QUANTITY',
      id: 1
    }

    expect(merchListReducer(currentState, action)).toEqual({
        1: {name: 'Black Sabbath Shirt',
        description: 'A really cool tee',
        quantity: 13,
        price: 20,
        id: 1},
        2: {name: 'Thin Lizzy Pants',
        description: 'Some tight pants',
        quantity: 3,
        price: 60,
        id: 2} 
    })
  })

});