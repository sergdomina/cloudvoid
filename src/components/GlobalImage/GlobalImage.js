import { ImageThumb } from './GlobalImage.styled';
// import defaultImage from './pngegg.png';

const GlobalImage = ({children}) => {
  return (
    <ImageThumb>
      {children}
    </ImageThumb>
  );
};
export default GlobalImage;
