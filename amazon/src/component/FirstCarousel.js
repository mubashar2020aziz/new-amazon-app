import Carousel from 'react-bootstrap/Carousel';

const FirstCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="assets/pix1.jpg" className="d-block w-100" alt="pix1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/pix2.jpg" className="d-block w-100" alt="pix2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="assets/pix3.jpg" className="d-block w-100" alt="pix3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default FirstCarousel;
