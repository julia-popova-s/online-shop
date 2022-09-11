import "./index.scss";
import OrderAmount from "../../elements/orderAmount";
import ButtonForOrder from "../../ui/buttonForOrder";
import BasketList from "../../elements/basketList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BasketPage() {
  const basket = useSelector((state) => state.basket.basket);
  const amount = useSelector((state) => state.basket.totalAmount);
  return (
    <div className="basket">
      <header className="header">
        <div className="container">
          <div className="header-block">
            <Link to="/" className="header-block__link">
              <div className="header-block__arrow">
                <svg
                  className="header-block__icon"
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7057_4)">
                    <path
                      d="M3.65166 2.04683C3.787 1.91149 4.00007 1.91149 4.13541 2.04683C4.26618 2.1776 4.26618 2.39524 4.13541 2.5257L1.68253 4.97859H9.77672C9.9654 4.97859 10.1202 5.12856 10.1202 5.31725C10.1202 5.50593 9.9654 5.66078 9.77672 5.66078H1.68253L4.13541 8.10909C4.26618 8.24443 4.26618 8.46238 4.13541 8.59284C4.00007 8.72818 3.787 8.72818 3.65166 8.59284L0.618095 5.55927C0.487328 5.42851 0.487328 5.21086 0.618095 5.0804L3.65166 2.04683Z"
                      fill="#D58C51"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_7057_4">
                      <rect
                        width="9.6"
                        height="9.6"
                        fill="white"
                        transform="translate(0.52002 0.520004)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </Link>
            <h2 className="header-block__title">
              корзина с выбранными товарами
            </h2>
          </div>
        </div>
      </header>
      <BasketList products={basket} />
      <footer className="footer">
        <div className="container">
          <div className="footer-block">
            <OrderAmount sum={amount} />
            <ButtonForOrder type={"submit"} name={"Оформить заказ"} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BasketPage;
