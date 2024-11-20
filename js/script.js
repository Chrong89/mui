$(document).ready(function () {
  let currentSection = 0;
  const header = $("#header");
  const headerLogo = $("#header .logo");
  const sections = $(".section");
  const footer = $("footer");
  const totalSections = sections.length + 1; // Including the footer
  let isAnimating = false; // 플래그 변수
  let isScrollingByWheel = false; // wheel 이벤트 중인지 확인하는 플래그

  // header 메뉴이동
  header.find("a").on("click", function (e) {
    e.preventDefault();
    var menu = $(this);
    var menuIndex = menu.parent().index();
    header.find("a").removeClass("active");
    menu.addClass("active");
    $("html, body").animate(
      {
        scrollTop: $(sections[menuIndex + 1]).offset().top,
      },
      800,
      function () {
        currentSection = menuIndex + 1;
        console.log(currentSection, menuIndex);
        isAnimating = false;
      }
    );
  });

  // wheel 이벤트 처리
  window.addEventListener(
    "wheel",
    function (event) {
      if (isAnimating) return; // 애니메이션 중이면 이벤트를 차단

      isAnimating = true; // 애니메이션 시작
      isScrollingByWheel = true; // wheel 이벤트로 스크롤 중임을 표시

      if (event.deltaY > 0) {
        // Scroll down
        if (currentSection < totalSections - 1) {
          currentSection++;
          $("html, body").animate(
            {
              scrollTop:
                currentSection === totalSections - 1
                  ? footer.offset().top
                  : $(sections[currentSection]).offset().top,
            },
            800,
            function () {
              isAnimating = false; // 애니메이션이 끝난 후 플래그 해제
              isScrollingByWheel = false; // wheel 이벤트 종료
            }
          );
        } else {
          currentSection = 0;
          isAnimating = false; // 더 이상 스크롤할 수 없을 때 플래그 해제
          isScrollingByWheel = false; // wheel 이벤트 종료
        }
      } else {
        // Scroll up
        if (currentSection > 0) {
          currentSection--;
          $("html, body").animate(
            {
              scrollTop: $(sections[currentSection]).offset().top,
            },
            800,
            function () {
              isAnimating = false; // 애니메이션이 끝난 후 플래그 해제
              isScrollingByWheel = false; // wheel 이벤트 종료
            }
          );
        } else {
          isAnimating = false; // 더 이상 스크롤할 수 없을 때 플래그 해제
          isScrollingByWheel = false; // wheel 이벤트 종료
        }
      }

      // 헤더 로고 조정
      if (currentSection >= 1) {
        header.stop(true, true).animate({ top: "-70px" }, 300);
        headerLogo.stop(true, true).animate({ width: "190px" }, 300);
      } else {
        header.stop(true, true).animate({ top: "0px" }, 300);
        headerLogo.stop(true, true).animate({ width: "60px" }, 300);
      }

      // menu active
      console.log(currentSection);

      header.find("li a").removeClass("active");
      if (currentSection > 0) {
        header
          .find("li")
          .eq(currentSection - 1)
          .find("a")
          .addClass("active");
      }
      event.preventDefault(); // Prevent default scrolling
    },
    { passive: false }
  );

  // scroll 이벤트 처리
  // $(window).on(
  //   "scroll",
  //   _.throttle(function () {
  //     if (isScrollingByWheel) return; // wheel 이벤트 중이면 scroll 이벤트 실행 안 함

  //     const pageScrollTop = $(window).scrollTop();
  //     const windowHeight = $(window).height();

  //     // currentSection을 각 섹션의 50% 지점을 기준으로 업데이트
  //     sections.each(function (index) {
  //       const sectionTop = $(this).offset().top;
  //       const sectionHeight = $(this).outerHeight();
  //       const sectionMidPoint = sectionTop + sectionHeight / 2;

  //       if (pageScrollTop >= sectionMidPoint - windowHeight / 2) {
  //         currentSection = index;
  //       }
  //     });

  //     // Footer로 스크롤 시 currentSection 업데이트
  //     if (pageScrollTop >= footer.offset().top) {
  //       currentSection = totalSections - 1;
  //     }

  //     // 헤더 로고 크기 조절
  //     if (pageScrollTop > 500) {
  //       headerLogo.stop(true, true).animate(
  //         {
  //           width: "190px",
  //         },
  //         300
  //       );
  //     } else {
  //       headerLogo.stop(true, true).animate(
  //         {
  //           width: "60px",
  //         },
  //         300
  //       );
  //     }
  //   }, 300)
  // );

  // 마우스 위치에 따른 header 효과
  let isHeaderVisible = false; // 헤더 상태를 추적

  $(document).mousemove(function (event) {
    if (event.clientY <= 70 && currentSection >= 1) {
      if (!isHeaderVisible) {
        header.addClass("on");
        header.stop(true, true).animate({ top: "0px" }, 300);
        isHeaderVisible = true; // 헤더가 표시되었음을 추적
      }
    } else {
      if (isHeaderVisible) {
        header.stop(true, true).animate({ top: "-70px" }, 300, function () {
          header.removeClass("on");
        });
        isHeaderVisible = false; // 헤더가 숨겨졌음을 추적
      }
    }
  });

  // section04 popup Data
  const popupData = [
    {
      cartegori: "wood",
      eventTitle: "2024 대한민국교육박람회",
      discription: "discription01",
      client: "client",
      mainImg: "portfolio/wood/2024/ebs_site_02.jpg",
      images: [
        "portfolio/wood/2024/ebs_site_02.jpg",
        "portfolio/wood/2024/ebs_site_01.jpg",
        "portfolio/wood/2024/ebs_site_03.jpg",
        "portfolio/wood/2024/ebs_site_04.jpg",
        "portfolio/wood/2024/ebs_render_01.jpg",
        "portfolio/wood/2024/ebs_render_02.jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "2024 대한민국교육박람회",
      discription: "discription02",
      client: "client",
      mainImg: "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/KakaoTalk_20221020_164640929_14.jpg",
      images: [
        "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/한국산업인력공단-01.jpg",
        "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/한국산업인력공단-02.jpg",
        "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/KakaoTalk_20221020_164640929_14.jpg",
        "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/KakaoTalk_20221103_161050032.jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "title03",
      discription: "discription03",
      client: "client",
      mainImg:"portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/KakaoTalk_20230113_095401466_06.jpg",
      images: [
        "portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/KakaoTalk_20230113_095401466_06.jpg",
        "portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/KakaoTalk_20230113_095401466_09.jpg",
        "portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/꾸그&티처스 1228 1.jpg",
        "portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/꾸그&티처스 1228 6.jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "title04",
      discription: "discription04",
      client: "client",
      mainImg: "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/KakaoTalk_20221102_144109703_01.jpg",
      images: [
        "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/경기TP-1.jpg",
        "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/경기TP-3.jpg",
        "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/KakaoTalk_20221102_144109703_01.jpg",
        "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/KakaoTalk_20221102_144109703_03.jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "title05",
      discription: "discription05",
      client: "client",
      mainImg: "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/KakaoTalk_20221020_105439076_05.jpg",
      images: [
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/로보테크 0929 1.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/로보테크 0929 4.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/KakaoTalk_20221020_105439076_05.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/KakaoTalk_20221020_105439076_09.jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "title06",
      discription: "discription06",
      client: "client",
      mainImg: "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/코리아런드리 _View04.jpg",
      images: [
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/코리아런드리 _View04.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/코리아런드리 _View05.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/KakaoTalk_20221020_105439076_18.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/KakaoTalk_20221020_105439076.jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "title07",
      discription: "discription07",
      client: "client",
      mainImg:  "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사 (2).jpg",
      images: [
        "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사 (2).jpg",
        "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사 (3).jpg",
        "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사-01.jpg",
        "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사-02.jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "title08",
      discription: "discription08",
      client: "client",
      mainImg:  "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS (3).jpg",
      images: [
        "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS (3).jpg",
        "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS (5).jpg",
        "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS(1).jpg",
        "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS(3).jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "title09",
      discription: "discription09",
      client: "client",
      mainImg: "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (1).jpg",
      images: [
        "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (1).jpg",
        "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (2).jpg",
        "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (3).jpg",
        "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (4).jpg",
      ],
    },
    {
      cartegori: "wood",
      eventTitle: "title10",
      discription: "discription10",
      client: "client",
      mainImg: "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 설치사진 (1).jpg",
      images: [
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 설치사진 (1).jpg",
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 설치사진 (2).jpg",
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 시안-01.jpg",
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 시안-02.jpg",
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 시안-02.jpg",
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 시안-02.jpg",
      ],
    },
  ];


// 포트폴리오 리스트 동적 생성
const portfolioListWrap = $(".portfolioListWrap");

// 데이터 기반으로 리스트 생성
popupData.forEach((item, index) => {
  const portfolioHTML = `
    <div class="portfolioItem item${index + 1}">
      <a href="#">
        <img src="${item.mainImg}" alt="${item.eventTitle}">
        <div class="cartegori">${item.cartegori}</div>
        <div class="itemInfo">
          <span class="eventTitle">${item.eventTitle}</span>
          <span class="discription">${item.discription}</span>
          <span class="client">클라이언트: ${item.client}</span>
        </div>
      </a>
    </div>
  `;
  portfolioListWrap.append(portfolioHTML); // 리스트 추가
});

  // section04 팝업 열기
  var listItem = $(".portfolioItem");
  var popup = $(".section04 .popup");
  var popupClose = $(".section04 .popup .closeBtn");
  var popupNaviBtn = $(".section04 .popup .imgNavi");
  var popupMainImg = $(".section04 .popup .mainImg");
  // popup item
  var popupTitle = $(".section04 .popup .title");
  var popupDic = $(".section04 .popup .discription");

  listItem.on("click", function (e) {
    e.preventDefault();
    popup.addClass("on");
    // popupdata 변경
    var index = $(this).index();
    var tgData = popupData[index];
    popupTitle.text(tgData.eventTitle);
    popupDic.text(tgData.discription);
    // 이전 데이터를 비움
    popupNaviBtn.empty(); 
    // 메인 이미지 지정
    popupMainImg.css("background-image", "url('" + tgData.images[0] + "')");
    // 새로운 네비게이션 버튼 생성
    tgData.images.forEach((img, i) => {
      popupNaviBtn.append(
            `<a href="#" class="${i === 0 ? "active" : ""}">
                <img src="${img}" alt="Thumbnail ${i + 1}" />
            </a>`
        );
    });
    popupNaviBtn.find("a").removeClass("active");
    popupNaviBtn.find("a").eq(0).addClass("active");
  });
  // 팝업 닫기
  popupClose.on("click", function (e) {
    console.log("click");
    popup.removeClass("on");
  });

  // 팝업 내 이미지 변경 - 이벤트 위임
  popupNaviBtn.on("click", "a", function (e) {
    e.preventDefault();

    // 선택한 이미지의 URL 가져오기
    var tgImg = $(this).find("img").attr("src");
    popupMainImg.css("background-image", "url('" + tgImg + "')"); // 메인 이미지 변경

    // 활성화 상태 변경
    popupNaviBtn.find("a").removeClass("active");
    $(this).addClass("active");
  });

});
