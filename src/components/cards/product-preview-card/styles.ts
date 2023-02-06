import styled from 'styled-components';
const StyledProductPreviewCard = styled.div`
  width: 300px;
  height: max-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    height: calc(100%-200px);
    width: 100%;
    padding: 2rem;
    font-family: var(--product-preview-font-1);
    font-weight: 500;
    font-size: 1.4rem;

    color: hsl(228, 12%, 48%);
    span {
      font-weight: 500;
      letter-spacing: 0.5rem;
      text-transform: uppercase;
      font-size: 1.1rem;
    }
    h2 {
      font-family: var(--product-preview-font-2);
      font-weight: 700;
      font-size: 3rem;
      text-transform: capitalize;
      color: hsl(212, 21%, 14%);
    }
    .price {
      display: flex;
      align-items: center;
      gap: 1rem;
      h3 {
        font-size: 2.5rem;
        font-weight: 700;
        color: hsl(158, 36%, 37%);
      }
      span {
        text-decoration: double line-through;
      }
    }
    button {
      width: 100%;
      height: 4rem;
      border-radius: 1rem;
      border: none;
      font-family: var(--product-preview-font-1);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      gap: 1rem;
      font-weight: 600;
      background-color: hsl(158, 36%, 37%);
    }
  }
`;

export default StyledProductPreviewCard;
