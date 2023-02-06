import ProductCardPreview from '@components/cards/product-preview-card';
import { GlobalStyles } from '@styles/globalStyles';
import theme from '@styles/themes';

function App() {
  return (
    <>
      <GlobalStyles theme={theme} />
      <div className="app">
        <ProductCardPreview
          category="perfume"
          title="Gabrielle Essence Eau De Parfum"
          description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
          price="$149.99"
          salesPrice="$169.99"
        />
      </div>
    </>
  );
}

export default App;
