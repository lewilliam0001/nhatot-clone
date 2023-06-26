import React, { useRef } from "react";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Person,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

import "./BDSCarousel.scss";
import styles from "./MuaBanBDS.module.scss";
import ICardProps from "../../interfaces/card-interface";

const Card: React.FC<ICardProps> = (props) => {
  const { img, title, children } = props;

  return (
    <Link to="/product" className={styles["card-wrapper"]}>
      <div className={styles["card"]}>
        <div className={styles["card-media"]}>
          {img && <img src={img.src} alt={img.alt} />}
        </div>
        <div className={styles["card-content"]}>
          <div className={styles["card-title"]}>
            <p>{title}</p>
          </div>
          <div className={styles["card-details"]}>{children}</div>
        </div>
      </div>
    </Link>
  );
};

const srcList = [
  "https://cdn.chotot.com/YiW5G3t-XPqvOmy4_dwktTnpfcUDx1F5i7ZGRKPgn10/preset:listing/plain/fe8c3c1720749469fc518bc17ff6dcaf-2828836700652840477.jpg",
  "https://cdn.chotot.com/9lbxj-EKh1KXVOJb_5I5f4d44WgTDjB5gYiO1WnTuss/preset:listing/plain/765da8c83777256683311c681e39c390-2819732954924348631.jpg",
  "https://cdn.chotot.com/z5wMimw_gLHA93GF9D3zjYsrBfXM9fbjJ5fGaNaIyWw/preset:listing/plain/2c65368a27b9d7df05a3f97b3880bb6c-2828991746408773885.jpg",
  "https://cdn.chotot.com/rF68XKEgwEsekc9xXD-lHzXCpnZPUQXb1BAzGanx6u4/preset:listing/plain/8c0637277b08f171e2dd04f5dc28c406-2830984849783579334.jpg",
  "https://cdn.chotot.com/6BHLaw-fe8sx3P4GpB3HDfXmXKeRyXXmo0mBkAifyXc/preset:listing/plain/ce354c8585a87565315f3b173174619b-2823934818590421101.jpg",
  "https://cdn.chotot.com/Mt5CA46No541mBP9gGaGb5d72UM_u_sB997J52IQ5kM/preset:listing/plain/832173c5773e6c6a0381c9d654a577b2-2824457488492683656.jpg",
  "https://cdn.chotot.com/0AQZ0aBviO6LoMlsUFEQ1M1639CeeeilIXyFB9YLinI/preset:listing/plain/7650c53c67a0319388e9cb2f9c38571c-2824458832462501098.jpg",
  "https://cdn.chotot.com/pAtlrCEj7MEB8IcBUJyFnfx1Rj8k7eCDsqgBn10Ffig/preset:listing/plain/88096984dc2b20ce3b94ee52161fe431-2830984665748857542.jpg",
  "https://cdn.chotot.com/7L6VWe71_tvp7yeSmyBNQsjZm1wC1YHaERhJN1xL8ng/preset:listing/plain/a65b14520bc775d4ecf57e5cb0dfe0f4-2804924532258773338.jpg",
];

const slides = srcList.map((src) => {
  return {
    img: {
      src: src,
    },
  };
});

const MuaBanBDS: React.FC = () => {
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <div className="container">
        <div className={styles["wrapper"]}>
          <h2 className={styles["title"]}>Mua bán bất động sản</h2>
          <div className={"mua-ban-bds-carousel"}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation={{
                prevEl: ".prev-mua-ban",
                nextEl: ".next-mua-ban",
              }}
              modules={[Navigation]}
              breakpoints={{
                420: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                576: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 5,
                },
              }}
              className="mua-ban-bds"
            >
              {slides.map((slide, index) => (
                <SwiperSlide>
                  <Card
                    title="Cần bán bất động sản nhất cận thị nhị cận sông"
                    {...slide}
                  >
                    <span>
                      65-70 m<sup>2</sup>
                    </span>
                    <span className={styles["price"]}>1375 tỷ</span>
                    <footer>
                      <Person fontSize="small" />
                      <span>1 ngày trước</span>
                      <span>Hà Nội</span>
                    </footer>
                  </Card>
                </SwiperSlide>
              ))}
              <button style={{ display: "none" }} ref={prevRef}>
                <KeyboardArrowLeft fontSize="medium" />
              </button>
              <button style={{ display: "none" }} ref={nextRef}>
                <KeyboardArrowRight fontSize="medium" />
              </button>
            </Swiper>
            <button
              className="prev-mua-ban"
              onClick={() => prevRef.current?.click()}
            >
              <KeyboardArrowLeft fontSize="medium" />
            </button>
            <button
              className="next-mua-ban"
              onClick={() => nextRef.current?.click()}
            >
              <KeyboardArrowRight fontSize="medium" />
            </button>
          </div>
          <Link to="/mua-ban-bds" className={styles["more"]}>
            <span>Xem thêm 148.654 tin khác</span>
            <KeyboardArrowRight fontSize="medium" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MuaBanBDS;
