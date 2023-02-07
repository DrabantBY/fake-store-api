import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductsSlider = ({ images }: { images: string[] }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop
      modules={[Autoplay, Pagination, Navigation]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}>
      {images.map((image) => (
        <SwiperSlide key={image}>
          <figure
            className="overflow-hidden mx-auto mb-5"
            style={{ height: '300px', maxWidth: '400px' }}>
            <img src={image} alt="product" />
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;
