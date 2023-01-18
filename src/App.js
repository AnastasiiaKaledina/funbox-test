import { useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card/Card';
import { cardsSelector } from './redux/slices/cards/selectors';

function App() {
  const { cards } = useSelector(cardsSelector);

  return (
    <div className="wrapper">
      <div className="title">
        <h1>Ты сегодня покормил кота?</h1>
      </div>
      <div className="cards__wrapper">
        {cards.map((card) => (
          <Card {...card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
