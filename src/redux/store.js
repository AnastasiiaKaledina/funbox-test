import { configureStore } from '@reduxjs/toolkit';
import cardSlice from './slices/cards/cardsSlice';

export const store = configureStore({
  reducer: {
    cards: cardSlice,
  },
});
