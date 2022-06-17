import React, {useState} from "react";
import declensionsServings from "../utils/declensionsServings";
import declensionsMouse from "../utils/declensionsMouse";

function Card({card}) {
  // Определяем, выбрана ли карточка пользователем
  const [isSelect, setIsSelect] = useState(card.isSelect);
  // Создаём переменную, которую после зададим в `className` для карточки
  const [cardIsSelectClassName, setCardIsSelectClassName] = useState(`${card.inStock ? `element__main ${isSelect ? 'element__onclick' : ''}` : "element__main element__background-color-inactive"}`);
  // Создаём переменную, которую после зададим в `className` для овала
  const [ovalIsSelectClassName, setOvalIsSelectClassName] = useState(`${card.inStock ? `element__oval ${isSelect ? 'element__onclick' : ''}` : "element__oval element__background-color-inactive"}`)
  // Создаём переменную, которую после зададим в `className` для поля купи
  const [buyClassName, setBuyClassName] = useState(`element__footer-click element__footer-click_dashed`);
  // Создаём переменную, которую после зададим в текстовое поле для описания товара
  const textDescriptionClick = `${card.inStock ? `${isSelect ? card.descriptionClick : 'Чего сидишь? Порадуй котэ, '}` : `Печалька, ${card.subtitle} закончился.`}`;
  // Создаём переменную, которую после зададим в текстовое поле покупки товара
  const buy = `${card.inStock ? `${isSelect ? '' : ' купи'}` : ""}`;

  function handleClick() {
    setIsSelect(!card.isSelect);
    card.isSelect = !card.isSelect;
    setCardIsSelectClassName(`${card.inStock ? `element__main ${card.isSelect ? 'element__onclick' : ''}` : "element__main element__background-color-inactive"}`);
    setOvalIsSelectClassName(`${card.inStock ? `element__oval ${card.isSelect ? 'element__onclick' : ''}` : "element__oval element__background-color-inactive"}`);
    setBuyClassName(`element__footer-click element__footer-click_dashed`);
  }

  function handleMouseEnter() {
    setCardIsSelectClassName(`${card.inStock ? `element__main element__hover ${isSelect ? 'element__onclick element__onclick-hover' : ''}` : "element__main element__background-color-inactive"}`);
    setOvalIsSelectClassName(`${card.inStock ? `element__oval element__hover ${isSelect ? 'element__onclick element__onclick-hover' : ''}` : "element__oval element__background-color-inactive"}`);
    setBuyClassName(`element__footer-click element__footer-click_dashed element__footer-click_hover`);
  }

  function handleMouseLeave() {
    setCardIsSelectClassName(`${card.inStock ? `element__main ${isSelect ? 'element__onclick' : ''}` : "element__main element__background-color-inactive"}`);
    setOvalIsSelectClassName(`${card.inStock ? `element__oval ${isSelect ? 'element__onclick' : ''}` : "element__oval element__background-color-inactive"}`);
    setBuyClassName(`element__footer-click element__footer-click_dashed`);
  }

  const servingsText = declensionsServings(Number(card?.servings));
  const mouseText = declensionsMouse(Number(card?.mouse));

  return(
    <div className="element">
      <div className={card.inStock ? "" : "element__main-inactive"}/>
      <div className={cardIsSelectClassName } onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="element__absolute-container">
          <div>
            <p className={`element__text element__text_margin-one ${card.inStock ? "" : "element__inactive"}`}>{card?.text}</p>
            <h1 className={`element__title ${card.inStock ? "" : "element__inactive"}`}>{card?.title}</h1>
            <h2 className={`element__subtitle ${card.inStock ? "" : "element__inactive"}`}>{card?.subtitle}</h2>
            <p className={`element__text element__text_margin-left ${card.inStock ? "" : "element__inactive"}`}>
              <span className="element__number-of-servings servings">{card?.servings}</span> {servingsText}
            </p>
            <p className={`element__text element__text_margin-left ${card.inStock ? "" : "element__inactive"}`}>
              <span className="element__number-of-servings mouse">{card?.mouse === "1" ? '' : card?.mouse}</span> {mouseText} в подарок
            </p>
            <p className={`element__text element__text_margin-left ${card.inStock ? "" : "element__inactive"}`}>{card?.mouseText}</p>
          </div>
          <div className={ovalIsSelectClassName}>
            <p className="element__oval-wt">{card?.wt}</p>
            <p className="element__oval-kg">кг</p>
          </div>
        </div>
      </div>
      <p className={`element__footer-text ${card.inStock ? "" : "element__inactive-text"}`}>
        {textDescriptionClick}
        <span className={buyClassName} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{buy}</span>
        <span className="element__footer-click">{card.inStock ? `${isSelect ? '' : '.'}` : ""}</span>
      </p>
    </div>
  )
}

export default Card
