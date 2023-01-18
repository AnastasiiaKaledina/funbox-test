import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardsSelector } from '../../redux/slices/cards/selectors';
import './card.css';
import { setMode } from '../../redux/slices/cards/cardsSlice';

const Card = ({ title, mode, brand, portionCount, taste, description, gifts, weight, id }) => {
  const { titleOnHover } = useSelector(cardsSelector);
  const dispatch = useDispatch();
  const cardWrapperRef = React.useRef();
  const titleRef = React.useRef();

  const returnHeaderStyle = () => {
    titleRef.current.innerHTML = title;
    titleRef.current.style.color = '#666';
  };

  const changeMode = () => {
    if (mode !== 'disabled') {
      if (mode === 'notSelected') {
        dispatch(setMode({ id, mode: 'selected' }));
      } else {
        dispatch(setMode({ id, mode: 'notSelected' }));
        returnHeaderStyle();
      }
    }
  };

  const changeTitle = (event) => {
    if (cardWrapperRef.current.classList.contains('selected') && event === 'MouseEnter') {
      titleRef.current.innerHTML = titleOnHover;
      titleRef.current.style.color = '#e62e7a';
    }

    if (event === 'MouseLeave') {
      returnHeaderStyle();
    }
  };

  return (
    <div className={'card-wrapper ' + mode} ref={cardWrapperRef}>
      <div
        className="card"
        onClick={() => changeMode()}
        onMouseEnter={() => changeTitle('MouseEnter')}
        onMouseLeave={() => changeTitle('MouseLeave')}>
        <div className="card__background-disabled" />
        <div className="card__title" ref={titleRef}>
          {title}
        </div>
        <h3 className="card__brand">{brand}</h3>
        <div className="card__taste">{taste}</div>
        <div className="card__portionCount">
          <b>{portionCount}</b> порций
        </div>
        {gifts.map((item) => (
          <div key={Math.random()} className="card__gifts">
            {item}
          </div>
        ))}
        <div className="card__img" />
        <div className="card__weight">
          <div className="card__weight-value">{weight}</div>
          <div className="card__weight-kg">кг</div>
        </div>
      </div>
      <div className="card__label card__label_buy">
        Чего сидишь? Порадуй котэ,&nbsp;
        <span className="card__label-link" onClick={() => changeMode(id)}>
          купи
        </span>
      </div>
      <div className="card__label card__label_disabled">{'Печалька, ' + taste + ' закончился.'}</div>
      <div className="card__label card__label_selected">{description}</div>
    </div>
  );
};

export default Card;
