import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TYPES } from '../const';
import { buyGuitar, setIsBasket, setIsSuccessBasket } from '../store/guitar-data';
import { Guitar } from '../types/types';
import { pasrePrice, startScroll } from '../utils';
import Pentoville from 'pentonville';

type BasketAdiingProps = {
  guitar: Guitar ,
}

function BasketAdiing({ guitar }: BasketAdiingProps): JSX.Element {
  const { name, previewImg, price, vendorCode, type, stringCount } = guitar;
  const dispatch = useDispatch();

  const modalCloseHandler = () => {
    dispatch(setIsBasket(false));
    startScroll();
  };

  useEffect(() => () => modalCloseHandler(), []);

  return (
    <Pentoville>
      <div className="modal is-active modal-for-ui-kit">
        <div className="modal__wrapper">
          <div className="modal__overlay"
            onClick={modalCloseHandler}
          >
          </div>
          <div className="modal__content">
            <h2 className="modal__header title title--medium">Добавить товар в корзину</h2>
            <div className="modal__info"><img className="modal__img" src={`img/content/${previewImg.length && previewImg.slice(0).substring(4)}`} srcSet={`img/content/${previewImg.length && previewImg.slice(0).substring(4, previewImg.length - 4)}@2x.jpg 2x`} width="67" height="137" alt={name} />
              <div className="modal__info-wrapper">
                <h3 className="modal__product-name title title--little title--uppercase">Гитара {name}</h3>
                <p className="modal__product-params modal__product-params--margin-11">Артикул:{vendorCode}</p>
                <p className="modal__product-params">{type ? TYPES[type] : ''},{stringCount} струнная</p>
                <p className="modal__price-wrapper"><span className="modal__price">Цена:</span><span className="modal__price">{pasrePrice(price)} ₽</span></p>
              </div>
            </div>
            <div className="modal__button-container">
              <button className="button button--red button--big modal__button modal__button--add"
                onClick={() => {
                  dispatch(buyGuitar(guitar));
                  dispatch(setIsBasket(false));
                  dispatch(setIsSuccessBasket(true));
                }} autoFocus
              >
                Добавить в корзину
              </button>
            </div>
            <button className="modal__close-btn button-cross" type="button" aria-label="Закрыть"
              onClick={modalCloseHandler}
            >
              <span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
            </button>
          </div>
        </div>
      </div>
    </Pentoville>
  );
}

export default BasketAdiing;


