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
      if(currentSection >= 1){
        header.stop(true, true).animate({top: "-70px",},300);

        headerLogo.stop(true, true).animate({width: "190px",},300);
      }else{
        header.stop(true, true).animate({top: "0px",},300);
        headerLogo.stop(true, true).animate({width: "60px",},300);

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

  // section04 팝업 열기
  var listItem = $(".portfolioItem a")
  var popup = $(".section04 .popup")
  var popupClose = $(".section04 .popup .closeBtn")
  var popupNaviBtn = $(".section04 .popup .imgNavi a")
  var popupMainImg = $(".section04 .popup .mainImg img")

  listItem.on("click", function(e){
    e.preventDefault()
    console.log("click");
    popup.addClass("on")
  })
  popupClose.on("click", function(e){

    console.log("click");
    popup.removeClass("on")
  })

  // 팝업 내 이미지 변경
  popupNaviBtn.on("click", function(e){
    e.preventDefault()
    console.log(this);
    var tgImg = $(this).find('img').attr("src")
    var currentImg = popupMainImg.attr("src")
    popupMainImg.attr("src", tgImg)
    popupNaviBtn.removeClass("active")
    $(this).addClass("active")
  })

});
