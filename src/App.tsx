import { Container } from '@components/common/container';
import QrCode from '@components/qr-code';
import { GlobalStyles } from '@styles/globalStyles';
import theme from '@styles/themes';

function App() {
  return (
    <div className="app">
      <GlobalStyles theme={theme} />
      <QrCode />
    </div>
  );
}

export default App;
