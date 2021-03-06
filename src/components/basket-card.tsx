import { useDispatch } from 'react-redux';
import { TYPES } from '../const';
import { setIsBasketRemoval, setIsGuitar, setQuantity, setQuantityText } from '../store/guitar-data';
import { Guitar } from '../types/types';
import { inputProhibition, insertProhibition, pasrePrice } from '../utils';

type BasketCardProps = {
  guitar: Guitar;
}

function BasketCard({ guitar }: BasketCardProps): JSX.Element {
  const { id, name, vendorCode, type, stringCount, price, previewImg } = guitar;
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить" onClick={() => {
        dispatch(setIsBasketRemoval(true));
        dispatch(setIsGuitar(guitar));
      }}
      >
        <span className="button-cross__icon"></span><span className="cart-item__close-button-interactive-area"></span>
      </button>
      <div className="cart-item__image"><img src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="55" height="130" alt={name} />
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{name}</p>
        <p className="product-info__info">Артикул: {vendorCode}</p>
        <p className="product-info__info">{type ? TYPES[type] : ''}, {stringCount} струнная</p>
      </div>
      <div className="cart-item__price">{pasrePrice(price)} ₽</div>
      <div className="quantity cart-item__quantity">
        <button className="quantity__button" aria-label="Уменьшить количество" onClick={() => {
          dispatch(setQuantity({ id, quantity: 'decr' }));
        }}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-minus"></use>
          </svg>
        </button>
        <input className="quantity__input" type="number" value={guitar.quantity === 0 ? '' : String(guitar.quantity)} id={`${id}$-count`} name={`${id}$-count`} step="1" min="1" max="99"
          onPaste={(evt) => inputProhibition(evt)}
          onKeyPress={(evt) =>insertProhibition(evt)}
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
            if (evt.currentTarget.value.length > 2) {
              evt.currentTarget.value = evt.currentTarget.value.substring(0, evt.currentTarget.value.length - 1);
            }
            dispatch(setQuantityText({ id, quantity: Number(evt.currentTarget.value) }));
          }}
          onBlur={() => {
            if (guitar.quantity === 0) {
              dispatch(setQuantityText({ id, quantity: 1 }));
            }
          }}
        />
        <button className="quantity__button" aria-label="Увеличить количество" onClick={() => {
          dispatch(setQuantity({ id, quantity: 'inc' }));
        }}
        >
          <svg width="8" height="8" aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div className="cart-item__price-total">{price * (guitar.quantity || 0)} ₽</div>
    </div>
  );
}

export default BasketCard;

