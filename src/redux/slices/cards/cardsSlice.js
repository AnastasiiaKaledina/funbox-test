import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [
    {
      id: 0,
      brand: 'Нямушка',
      title: 'Сказочное заморское яство',
      taste: 'с фуа-гра',
      portionCount: 10,
      gifts: ['мышь в подарок'],
      weight: '0,5',
      mode: 'notSelected',
      description: 'Печень утки разварная с артишоками.',
    },
    {
      id: 1,
      brand: 'Нямушка',
      title: 'Сказочное заморское яство',
      taste: 'с рыбой',
      portionCount: 40,
      gifts: ['2 мыши в подарок'],
      weight: '2',
      mode: 'notSelected',
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    },
    {
      id: 2,
      brand: 'Нямушка',
      title: 'Сказочное заморское яство',
      taste: 'с курой',
      portionCount: 100,
      gifts: ['5 мышей в подарок', 'заказчик доволен'],
      weight: '5',
      mode: 'disabled',
      description: 'Филе из цыплят с трюфелями в бульоне.',
    },
  ],
  titleOnHover: 'Котэ не одобряет?',
};

export const filterSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.cards[action.payload.id].mode = action.payload.mode;
    },
  },
});

export const { setMode } = filterSlice.actions;

export default filterSlice.reducer;
