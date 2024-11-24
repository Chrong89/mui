$(document).ready(function () {

    // 메뉴 이동
    $('.menu a').on('click',function(e){
      e.preventDefault()
      var tg = $(this).attr('href')
      var tgSection = $("#" + tg).offset().top;
      console.log(tgSection);
      
      $("html, body").animate({scrollTop: tgSection -80,},800);
    });

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
  
    // 상단 메인 비주얼 영역
    const mainVisualSwiper = new Swiper('.mainVisual.mySwiper', {
      spaceBetween: 0,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  
    // portfolio swiper js 관련 스크립트
    let previousIndex = null; // 확장 전 활성화된 슬라이드 인덱스 저장
  
    const portfolioSwiper = new Swiper('.section04 .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 20,
      loop: false, // 무한 루프 비활성화
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
  
    // 동적 슬라이드 데이터 추가 (새로운 코드)
    const slideData = [
      {
        cartegori: "wood",
        eventTitle: "2024 대한민국교육박람회(코엑스)",
        discription: "부스 수: 20",
        client: "NHN에듀",
        mainImg: "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/compressed_NHN (1)-0.jpg",
        images: [
            "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/compressed_NHN (1)-0.jpg",
            "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/compressed_NHN (1)-1.jpg",
            "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/compressed_NHN (2)-0.jpg",
            "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/compressed_NHN (2)-1.jpg",
            "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/NHN (1).jpg",
            "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/NHN (2).jpg",
            "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/NHN에듀 (5).jpg",
            "images/wood/2024/wood (10부스) 2024 대한민국교육박람회(코엑스) - NHN에듀/NHN에듀 (6).jpg"
        ],
      },
      { //wood (2부스) 2024 서울국제식품산업대전(킨텍스) - 우마락시미
        cartegori: "wood",
        eventTitle: "2024 서울국제식품산업대전(킨텍스)",
        discription: "부스 수: 2",
        client: "우마락시미",
        mainImg: "images/wood/2024/wood (2부스) 2024 서울국제식품산업대전(킨텍스) - 우마락시미/compressed_우마락시미-0.jpg",
        images: [
            "images/wood/2024/wood (2부스) 2024 서울국제식품산업대전(킨텍스) - 우마락시미/compressed_우마락시미-0.jpg",
            "images/wood/2024/wood (2부스) 2024 서울국제식품산업대전(킨텍스) - 우마락시미/compressed_우마락시미-1.jpg",
            "images/wood/2024/wood (2부스) 2024 서울국제식품산업대전(킨텍스) - 우마락시미/우마락시미-0607 (4).jpg",
            "images/wood/2024/wood (2부스) 2024 서울국제식품산업대전(킨텍스) - 우마락시미/우마락시미.jpg",
        ],
      },
      { // wood (20부스) 2024 경기국제보트쇼(킨텍스) - 경기바다
        cartegori: "wood",
        eventTitle: "2024 경기국제보트쇼(킨텍스)",
        discription: "부스 수: 20",
        client: "경기바다",
        mainImg: "images/wood/2024/wood (20부스) 2024 경기국제보트쇼(킨텍스) - 경기바다/평택항만공사 (1).jpg",
        images: [
            "images/wood/2024/wood (20부스) 2024 경기국제보트쇼(킨텍스) - 경기바다/평택항만공사 (1).jpg",
            "images/wood/2024/wood (20부스) 2024 경기국제보트쇼(킨텍스) - 경기바다/평택항만공사 (2).jpg",
            "images/wood/2024/wood (20부스) 2024 경기국제보트쇼(킨텍스) - 경기바다/평택항만공사 (3).jpg",
            "images/wood/2024/wood (20부스) 2024 경기국제보트쇼(킨텍스) - 경기바다/평택항만공사-01.jpg",
            "images/wood/2024/wood (20부스) 2024 경기국제보트쇼(킨텍스) - 경기바다/평택항만공사-02.jpg",
        ]
      },
      { // system (20부스) AGF 2023 (킨텍스) - Bushiroad
        cartegori: "system",
        eventTitle: "AGF 2023 (킨텍스)",
        discription: "부스 수: 20",
        client: "Bushiroad",
        mainImg: "images/system/2023/system (20부스) AGF 2023 (킨텍스) - Bushiroad/부쉬로드 (3).jpg",
        images: [
            "images/system/2023/system (20부스) AGF 2023 (킨텍스) - Bushiroad/부쉬로드 (1).jpg",
            "images/system/2023/system (20부스) AGF 2023 (킨텍스) - Bushiroad/부쉬로드 (2).jpg",
            "images/system/2023/system (20부스) AGF 2023 (킨텍스) - Bushiroad/부쉬로드 (3).jpg",
            "images/system/2023/system (20부스) AGF 2023 (킨텍스) - Bushiroad/부쉬로드 (4).jpg"
        ]
        
      },
      { // system (10부스) 23년 대한민국 교육박람회 (코엑스) - 빅드림
        cartegori: "system",
        eventTitle: "23년 대한민국 교육박람회 (코엑스)",
        discription: "부스 수: 10",
        client: "빅드림",
        mainImg: "images/system/2023/system (10부스) 23년 대한민국 교육박람회 (코엑스) - 빅드림/KakaoTalk_20230113_095401466_09.jpg",
        images: [
            "images/system/2023/system (10부스) 23년 대한민국 교육박람회 (코엑스) - 빅드림/KakaoTalk_20230113_095401466_06.jpg",
            "images/system/2023/system (10부스) 23년 대한민국 교육박람회 (코엑스) - 빅드림/KakaoTalk_20230113_095401466_09.jpg",
            "images/system/2023/system (10부스) 23년 대한민국 교육박람회 (코엑스) - 빅드림/꾸그&티처스 1228 1.jpg",
            "images/system/2023/system (10부스) 23년 대한민국 교육박람회 (코엑스) - 빅드림/꾸그&티처스 1228 6.jpg"
        ]
        
      },
      { // wood (20부스) 2024 대한민국교육박람회(코엑스) - EBS
        cartegori: "wood",
        eventTitle: "23년 대한민국 교육박람회 (코엑스)",
        discription: "부스 수: 10",
        client: "EBS",
        mainImg: 
        "images/wood/2024/wood (20부스) 2024 대한민국교육박람회(코엑스) - EBS/EBS (4).jpg",
        images: [
            "images/wood/2024/wood (20부스) 2024 대한민국교육박람회(코엑스) - EBS/EBS (1).jpg",
            "images/wood/2024/wood (20부스) 2024 대한민국교육박람회(코엑스) - EBS/EBS (3).jpg",
            "images/wood/2024/wood (20부스) 2024 대한민국교육박람회(코엑스) - EBS/EBS (4).jpg",
            "images/wood/2024/wood (20부스) 2024 대한민국교육박람회(코엑스) - EBS/EBS (5).jpg",
            "images/wood/2024/wood (20부스) 2024 대한민국교육박람회(코엑스) - EBS/EBS(1).jpg",
            "images/wood/2024/wood (20부스) 2024 대한민국교육박람회(코엑스) - EBS/EBS(3).jpg"
        ]
      },
      { // wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비
        cartegori: "wood",
        eventTitle: "2024 드론쇼 코리아(벡스코)",
        discription: "부스 수: 60",
        client: "숨비",
        mainImg: "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/숨비 설치사진 (1).jpg",
        images: [
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/compressed_숨비 설치사진 (1)-0.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/compressed_숨비 설치사진 (1)-1.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/compressed_숨비 설치사진 (2)-0.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/compressed_숨비 설치사진 (2)-1.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/compressed_숨비 시안-01-0.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/compressed_숨비 시안-01-1.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/compressed_숨비 시안-02-0.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/compressed_숨비 시안-02-1.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/숨비 설치사진 (1).jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/숨비 설치사진 (2).jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/숨비 시안-01.jpg",
            "images/wood/2024/wood (60부스) 2024 드론쇼 코리아(벡스코) - 숨비/숨비 시안-02.jpg"
        ]
      },
      { // wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem
        cartegori: "wood",
        eventTitle: "2024 서울국제식품산업대전(킨텍스)",
        discription: "부스 수: 2",
        client: "sonic biochem",
        mainImg: "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/compressed_소닉-01-1.jpg",
        images: [
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/compressed_KakaoTalk_20240611_105101779_15-0.jpg",
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/compressed_KakaoTalk_20240611_105101779_15-1.jpg",
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/compressed_소닉-01-0.jpg",
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/compressed_소닉-01-1.jpg",
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/compressed_소닉-02-0.jpg",
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/compressed_소닉-02-1.jpg",
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/KakaoTalk_20240611_105101779_15.jpg",
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/소닉-01.jpg",
            "images/wood/2024/wood(2부스) 2024 서울국제식품산업대전(킨텍스) - sonic biochem/소닉-02.jpg"
        ]
      },
    ];
  
    const swiperWrapper = document.querySelector('.section04 .swiper-wrapper');
  
    slideData.forEach(data => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
  
      const defaultContent = `
        <div class="default-content">
          <img src="${data.mainImg}" alt="">
          <div class="cartegori">${data.cartegori}</div>
          <div class="itemInfo">
            <span class="eventTitle">${data.eventTitle}</span>
            <span class="discription">${data.discription}</span>
            <span class="client">클라이언트: ${data.client}</span>
          </div>
        </div>
      `;
  
      const extraContentImages = data.images
        .map(
          (image, index) => `
          <a href="#" ${index === 0 ? 'class="active"' : ''}>
            <img src="${image}" alt="">
          </a>`
        )
        .join("");
  
      const extraContent = `
        <div class="extra-content">
          <div class="changeMain">
            <img src="${data.mainImg}" alt="">
          </div>
          <div class="txtNavi">
            <div class="itemInfo">
              <span class="eventTitle">${data.eventTitle}</span>
              <span class="discription">${data.discription}</span>
              <span class="client">클라이언트: ${data.client}</span>
            </div>
            <div class="imgNavi">
              ${extraContentImages}
            </div>
          </div>
        </div>
      `;
  
      slide.innerHTML = defaultContent + extraContent;
      swiperWrapper.appendChild(slide);
    });
  
    // Swiper 업데이트
    portfolioSwiper.update();
  
    // 슬라이드 클릭 이벤트
    $(document).on("click", ".swiper-slide", function (e) {
      
        // .imgNavi 내부 클릭 여부 확인
        if ($(e.target).closest(".imgNavi").length > 0) {
          console.log(".imgNavi 내부 클릭 감지, Swiper 클릭 동작 중단");
          return; // .imgNavi 클릭 시 종료
        }
      
        // Swiper 클릭 동작
        const clickedSlide = this; // 현재 클릭된 슬라이드
        const realIndex = portfolioSwiper.slides.indexOf(clickedSlide);
      
        // 이미 확장된 슬라이드라면 닫기
        if (clickedSlide.classList.contains("expanded")) {
          closeExpandedSlide(realIndex);
          return;
        }
      
        previousIndex = portfolioSwiper.activeIndex;
      
        resetSlides();
      
        const requiredDummySlides = Math.max(0, realIndex - (portfolioSwiper.slides.length - 5));
        updateDummySlides(requiredDummySlides);
      
        clickedSlide.classList.add("expanded");
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

 // 확장된 슬라이드에서 이미지 변경
$(document).on("click", ".imgNavi a", function (e) {
    e.preventDefault(); // a 태그의 기본 동작 제거
    e.stopPropagation(); // 이벤트 전파 차단
  
    // 선택한 이미지로 변경
    const imgSrc = $(this).find("img").attr("src");
    $(this).closest(".swiper-slide").find(".changeMain img").attr("src", imgSrc);
  
    // 활성화 상태 업데이트
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });


  });
  