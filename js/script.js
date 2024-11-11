$(document).ready(function () {
  let currentSection = 0;
  const header = $("#header");
  const headerLogo = $("#header .logo");
  const sections = $(".section");
  const footer = $("footer");
  const totalSections = sections.length + 1; // Including the footer
  let isAnimating = false; // 플래그 변수
  let isScrollingByWheel = false; // wheel 이벤트 중인지 확인하는 플래그

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
        console.log("헤더 내려와");
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
      title: "title01",
      discription: "discription01",
      images: [
        "portfolio_rename/(10부스) 2024 대한민국교육박람회 - NHN에듀/NHN (1).jpg",
        "portfolio_rename/(10부스) 2024 대한민국교육박람회 - NHN에듀/NHN (2).jpg",
        "portfolio_rename/(10부스) 2024 대한민국교육박람회 - NHN에듀/NHN에듀 (5).jpg",
        "portfolio_rename/(10부스) 2024 대한민국교육박람회 - NHN에듀/NHN에듀 (6).jpg",
      ],
    },
    {
      title: "title02",
      discription: "discription02",
      images: [
        "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/한국산업인력공단-01.jpg",
        "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/한국산업인력공단-02.jpg",
        "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/KakaoTalk_20221020_164640929_14.jpg",
        "portfolio_rename/(10부스) 국제기능올림픽 특별대회 - 한국산업인력공단/KakaoTalk_20221103_161050032.jpg",
      ],
    },
    {
      title: "title03",
      discription: "discription03",
      images: [
        "portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/꾸그&티처스 1228 1.jpg",
        "portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/꾸그&티처스 1228 6.jpg",
        "portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/KakaoTalk_20230113_095401466_06.jpg",
        "portfolio_rename/(10부스) 대한민국 교육박람회 - 빅드림/KakaoTalk_20230113_095401466_09.jpg",
      ],
    },
    {
      title: "title04",
      discription: "discription04",
      images: [
        "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/경기TP-1.jpg",
        "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/경기TP-3.jpg",
        "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/KakaoTalk_20221102_144109703_01.jpg",
        "portfolio_rename/(12부스) 2022탄소중립 EXPO - 경기테크노파크/KakaoTalk_20221102_144109703_03.jpg",
      ],
    },
    {
      title: "title05",
      discription: "discription05",
      images: [
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/로보테크 0929 1.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/로보테크 0929 4.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/KakaoTalk_20221020_105439076_05.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 로보테크/KakaoTalk_20221020_105439076_09.jpg",
      ],
    },
    {
      title: "title06",
      discription: "discription06",
      images: [
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/코리아런드리 _View04.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/코리아런드리 _View05.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/KakaoTalk_20221020_105439076_18.jpg",
        "portfolio_rename/(15부스) 2022 IFS프랜차이즈 - 코리아런드리/KakaoTalk_20221020_105439076.jpg",
      ],
    },
    {
      title: "title07",
      discription: "discription07",
      images: [
        "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사 (2).jpg",
        "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사 (3).jpg",
        "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사-01.jpg",
        "portfolio_rename/(20부스) 2024 경기국제보트쇼 - 경기바다/평택항만공사-02.jpg",
      ],
    },
    {
      title: "title08",
      discription: "discription08",
      images: [
        "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS (3).jpg",
        "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS (5).jpg",
        "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS(1).jpg",
        "portfolio_rename/(20부스) 2024 대한민국교육박람회 - EBS/EBS(3).jpg",
      ],
    },
    {
      title: "title09",
      discription: "discription09",
      images: [
        "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (1).jpg",
        "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (2).jpg",
        "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (3).jpg",
        "portfolio_rename/(20부스) AGF 2023 - Bushiroad/부쉬로드 (4).jpg",
      ],
    },
    {
      title: "title10",
      discription: "discription10",
      images: [
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 설치사진 (1).jpg",
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 설치사진 (2).jpg",
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 시안-01.jpg",
        "portfolio_rename/(60부스) 2024 드론쇼 코리아 - 숨비/숨비 시안-02.jpg",
      ],
    },
  ];
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
    popupTitle.text(tgData.title);
    popupDic.text(tgData.discription);
    popupMainImg.css("background-image", "url('" + tgData.images[0] + "')");
    popupNaviBtn.find("a").eq(0).find("img").attr("src", tgData.images[0]);
    popupNaviBtn.find("a").eq(1).find("img").attr("src", tgData.images[1]);
    popupNaviBtn.find("a").eq(2).find("img").attr("src", tgData.images[2]);
    popupNaviBtn.find("a").eq(3).find("img").attr("src", tgData.images[3]);
    popupNaviBtn.find("a").removeClass("active");
    popupNaviBtn.find("a").eq(0).addClass("active");
  });

  popupClose.on("click", function (e) {
    console.log("click");
    popup.removeClass("on");
  });

  // 팝업 내 이미지 변경
  popupNaviBtn.find("a").on("click", function (e) {
    e.preventDefault();
    var tgImg = $(this).find("img").attr("src");
    var currentImg = popupMainImg.attr("src");
    popupMainImg.css("background-image", "url('" + tgImg + "')");
    popupNaviBtn.find("a").removeClass("active");
    $(this).addClass("active");
  });
});
