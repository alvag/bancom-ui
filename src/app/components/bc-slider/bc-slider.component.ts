import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper';
import { SwiperContainer } from 'swiper/element/swiper-element';
register();

@Component({
  selector: 'bc-slider',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './bc-slider.component.html',
  styleUrls: ['./bc-slider.component.scss']
})
export class BcSliderComponent implements OnInit, OnDestroy {

  @ViewChild('next') next: any;

  sliderId = Math.random().toString(36).substring(7);
  swiperEl!: SwiperContainer;

  ngOnInit(): void {
    setTimeout(() => {
      this.swiperEl = document.getElementById(this.sliderId) as SwiperContainer;
      this.initSlider();
      window.addEventListener('resize', this.handleResize.bind(this));
    }, 200)

  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    const windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
   /* if (this.swiperEl) {
      if (windowWidth >= 768) {
        if (this.swiperEl.pagination) {
          this.swiperEl.pagination = false;
        }
        this.swiperEl.slidesPerView = 3;
      } else {
        this.swiperEl.pagination = true;
      }
    }*/
  }

  initSlider() {
    const swiperParams: SwiperOptions = {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: true,
      navigation: {
        enabled: false,
        nextEl: '.test-next',
      },
      breakpoints: {
        576: {
          // slidesPerView: 2,
          // spaceBetween: 0,
        },
        1024: {
          // slidesPerView: 3,
          pagination: false
        },
      },
      on: {
        resize: () => {
          console.log('resize');
        }
      }
    };

    Object.assign(this.swiperEl!, swiperParams);
    this.swiperEl.initialize();
  }

  nextSlide() {
    this.swiperEl.swiper.slideNext();
  }

  prevSlide() {
    this.swiperEl.swiper.slidePrev();
  }

}
