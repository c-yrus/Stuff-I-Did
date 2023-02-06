import styled from 'styled-components';

const StyledQRCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: white;
  width: 300px;
  padding: 1.5rem 1.5rem 3rem;
  gap: 2rem;
  aspect-ratio: 1.5;
  box-shadow: hsl(220, 15%, 55%) 0px 0px 20px 0px;
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 1rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--qr-font);
    font-size: 1.5rem;
    text-align: center;
    gap: 1rem;
    h3 {
      font-weight: 700;
      font-size: 2rem;
      color: hsl(218, 44%, 22%);
    }
    p {
      font-weight: 400;
      color: hsl(220, 15%, 55%);
    }
  }
`;
export default StyledQRCode;
