import StyledQRCode from './styles';
import QrImage from '@images/image-qr-code.png';
const QrCode = () => {
  return (
    <StyledQRCode>
      <img alt="qr code" src={QrImage} />
      <div className="content">
        <h3>
          Improve your front-end
          <br />
          skills by building projects
        </h3>
        <p>
          Scan the QR code to visit Frontend Mentor and Take your coding skills
          to the next level
        </p>
      </div>
    </StyledQRCode>
  );
};

export default QrCode;
