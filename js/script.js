
$(document).ready(function () {

    // 스크롤 시 gnb 표시 
    $(window).on(
        'scroll',
        throttle(function () {
          var topPosition = $(this).scrollTop();
          var headerH = $('#header').innerHeight();
          var gnb = $('.gnb');      
      
          if (topPosition > headerH - 100) {
            gnb.addClass('on');
          } else {
            gnb.removeClass('on');
          }
        }, 100) // 100ms마다 실행
      );
    // 스크롤 이벤트 발생 빈도수 제어를 위한 함수
      function throttle(callback, limit) {
        let waiting = false;
        return function () {
          if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(() => {
              waiting = false;
            }, limit);
          }
        };
      }
      
    const mainVisualSwiper = new Swiper('.mainVisual.mySwiper', {
        spaceBetween: 0,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
      });

    // portfolio swiper js 관련 스크립트
    let previousIndex = null; // 확장 전 활성화된 슬라이드 인덱스 저장
  
    const portfolioSwiper = new Swiper('.section04 .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: true, // 무한 루프 비활성화
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
          previousIndex = this.activeIndex; // 초기 활성 슬라이드 인덱스 저장
        },
      },
    });
  
    // 슬라이드 클릭 이벤트
    portfolioSwiper.on('click', function () {
      const clickedSlide = portfolioSwiper.clickedSlide;
      if (!clickedSlide) return; // 클릭된 슬라이드가 없으면 종료
  
      const realIndex = portfolioSwiper.slides.indexOf(clickedSlide);
  
      // 이미 확장된 슬라이드라면 닫기
      if (clickedSlide.classList.contains('expanded')) {
        closeExpandedSlide(realIndex);
        return;
      }
  
      // 클릭 이전의 활성화된 슬라이드 위치 저장
      previousIndex = portfolioSwiper.activeIndex;
  
      // 모든 슬라이드 초기화
      resetSlides();
  
      // 가상 슬라이드 추가
      const requiredDummySlides = Math.max(0, realIndex - (portfolioSwiper.slides.length - 5));
      updateDummySlides(requiredDummySlides);
  
      // 클릭된 슬라이드 확장
      clickedSlide.classList.add('expanded');
      portfolioSwiper.slideTo(realIndex, 300); // 클릭된 슬라이드를 페이지 왼쪽에 맞춤
    });
  
    // 슬라이드 확장 해제 함수
    function closeExpandedSlide(realIndex) {
      resetSlides();
  
      // 슬라이드를 닫은 뒤 가상 슬라이드 제거
      portfolioSwiper.slideTo(previousIndex ?? realIndex, 300); // 이전 위치로 복원
      portfolioSwiper.once('transitionEnd', () => {
        updateDummySlides(0); // 모든 가상 슬라이드 제거 (애니메이션 후)
      });
    }
  
    // 모든 슬라이드 초기화 함수
    function resetSlides() {
        portfolioSwiper.slides.forEach(slide => slide.classList.remove('expanded')); // 모든 슬라이드 확장 해제
    }
  
    // 가상 슬라이드 업데이트 함수
    function updateDummySlides(count) {
      const dummySlides = portfolioSwiper.wrapperEl.querySelectorAll('.dummy-slide');
      dummySlides.forEach(slide => slide.remove()); // 기존 가상 슬라이드 제거
  
      for (let i = 0; i < count; i++) {
        const dummySlide = document.createElement('div');
        dummySlide.className = 'swiper-slide dummy-slide';
        dummySlide.textContent = `Dummy ${i + 1}`;
        portfolioSwiper.wrapperEl.appendChild(dummySlide); // 필요한 만큼 가상 슬라이드 추가
      }
  
      portfolioSwiper.update(); // Swiper 상태 업데이트
    }


  });
  