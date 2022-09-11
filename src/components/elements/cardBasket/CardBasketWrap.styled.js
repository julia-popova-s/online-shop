import styled from "styled-components";

export const CardBasketWrap = styled.div`
  font-family: var(--font-family);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 100%;
  transition: color 0.2s ease;
  cursor: pointer;
  padding: 15.5px 0;
  max-width: 860px;

  &:hover {
    color: var(--color-basic);
    transition: color 0.2s ease;
  }

  .card__preview {
    max-width: 220px;
    min-height: 133px;
    display: flex;
    align-items: center;
    justify-content: center;

    .card__img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .card__text {
    width: calc(100% - 220px);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 30px;

    .card__title {
      max-width: 310px;
      font-weight: 500;
      font-size: 17px;
      line-height: 21px;
    }
    .card__block-price {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 5px;

      .card__quantity {
        min-width: 80px;
        text-align: center;
      }

      .card__price {
        font-weight: 500;
        font-size: 17px;
        line-height: 21px;
        color: var(--color-basic);
        justify-self: right;
        min-width: 90px;
        text-align: center;
      }

      .card__btn-add {
        border-radius: 50%;
        border: 1px solid var(--color-basic);
        width: 30px;
        height: 30px;
        background-color: transparent;
        transition: all 0.2s ease;
        position: relative;

        .card__btn-plus,
        .card__btn-minus {
          position: absolute;
          top: 7px;
          right: 7px;
        }

        .card__btn-delete {
          position: absolute;
          top: 8px;
          right: 7px;
        }
      }

      .card__btn-add:hover {
        background-color: var(--color-basic);
        border: 1px solid var(--color-basic);
        transition: all 0.2s ease;

        svg path {
          fill: white;
        }
      }
    }
  }
`;
