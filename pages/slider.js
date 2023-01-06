import css from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {
  return (
    <div className={css.wrapper}>
      <Container fluid>
        <h1>Slider</h1>
        <Row className="justify-content-md-center">
          <Col xs={12}>
            <Swiper
              spaceBetween={15}
              slidesPerView={2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className={css.cardPhoto}>
                  Slide 1
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={css.cardPhoto}>
                  Slide 2
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={css.cardPhoto}>
                  Slide 3
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={css.cardPhoto}>
                  Slide 4
                </div>
              </SwiperSlide>          
            </Swiper>
          </Col>
        </Row> 
      </Container>    
    </div>
  )
}
