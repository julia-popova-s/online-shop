import { Link } from 'react-router-dom';
import { FC } from 'react';
import { BasketMiniWrap } from './BasketMiniWrap.styled';
import { getFormatNumber } from '../../../utils/getFormatNumber';
import { getWordProduct } from '../../../utils/getWordProduct';

type BasketMiniProps = {
  counter: number;
  sum: number;
  classNames: string;
};

export const BasketMini: FC<BasketMiniProps> = ({ counter, sum, classNames }) => {
  const newSum = getFormatNumber(sum);
  const word = getWordProduct(counter);

  return (
    <BasketMiniWrap className={classNames}>
      <div className="basket-mini__text">
        <p className="basket-mini__text-item">{`${counter} ${word}`}</p>
        <p className="basket-mini__text-item"> на сумму {`${newSum}`}</p>
      </div>
      <Link to="/basket" className="basket-mini__icon">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#D58C51" />
          <path
            d="M34.0746 23.2042H30.1774L27.379 15.239C27.2096 14.7569 26.6815 14.5032 26.1992 14.6727C25.717 14.8421 25.4635 15.3703 25.6329 15.8525L28.2157 23.2041H20.7843L23.3671 15.8525C23.5365 15.3703 23.283 14.8421 22.8008 14.6727C22.3187 14.5032 21.7904 14.7569 21.621 15.239L18.8226 23.2042H14.9254C14.4143 23.2042 14 23.6184 14 24.1296C14 24.6406 14.4143 25.0549 14.9254 25.0549H15.1789L17.4465 33.3309C17.6163 33.9505 18.1793 34.38 18.8217 34.38H30.2413C30.8871 34.38 31.4522 33.946 31.6189 33.3221L33.8274 25.0549H34.0746C34.5857 25.0549 35 24.6406 35 24.1296C35 23.6185 34.5857 23.2042 34.0746 23.2042ZM21.4678 31.355C21.4678 31.866 21.0535 32.2803 20.5425 32.2803C20.0314 32.2803 19.6171 31.866 19.6171 31.355V26.6562C19.6171 26.1451 20.0314 25.7308 20.5425 25.7308C21.0535 25.7308 21.4678 26.1451 21.4678 26.6562V31.355ZM25.4254 31.355C25.4254 31.866 25.011 32.2803 24.5 32.2803C23.9889 32.2803 23.5746 31.866 23.5746 31.355V26.6562C23.5746 26.1451 23.9889 25.7308 24.5 25.7308C25.011 25.7308 25.4254 26.1451 25.4254 26.6562V31.355ZM29.3829 31.355C29.3829 31.866 28.9686 32.2803 28.4575 32.2803C27.9464 32.2803 27.5321 31.866 27.5321 31.355V26.6562C27.5321 26.1451 27.9464 25.7308 28.4575 25.7308C28.9686 25.7308 29.3829 26.1451 29.3829 26.6562V31.355Z"
            fill="white"
          />
        </svg>
      </Link>
    </BasketMiniWrap>
  );
};
