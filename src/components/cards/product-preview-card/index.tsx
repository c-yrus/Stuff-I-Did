import { FC } from 'react';
import StyledProductPreviewCard from './styles';
import Image from '@images/image-product-mobile.jpg';
import { ReactComponent as CartIcon } from '@icons/icon-cart.svg';

type ProductCardViewProps = {
  category: string;
  title: string;
  description: string;
  price: string;
  salesPrice?: string;
};
const ProductCardPreview: FC<ProductCardViewProps> = ({
  category,
  title,
  description,
  salesPrice,
  price,
}) => {
  return (
    <StyledProductPreviewCard>
      <img src={Image} alt="product image" />
      <div className="details">
        <span>{category}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="price">
          <h3>{price}</h3>
          {salesPrice && <span>{salesPrice}</span>}
        </div>
        <button>
          <CartIcon />
          Add to cart
        </button>
      </div>
    </StyledProductPreviewCard>
  );
};

export default ProductCardPreview;
