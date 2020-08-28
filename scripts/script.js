const portfolio = {};

// listen for user click on menu button
portfolio.popoutSummon = () => {
  $(".menuButton").on("click", function () {
    // reveal sidebar
    $(".sideList").toggleClass("sideListOpen");
    $(".menuButton").toggleClass("menuButtonOpen");
    $(".navList").toggleClass("divHider");
  });
};

portfolio.discoverScroller = () => {
  $(".discoverMore").on("click", function () {
    // scroll to main content
    document.querySelector("#mainContent").scrollIntoView({
      behavior: "smooth",
    });
  });
};

portfolio.init = () => {
  portfolio.popoutSummon();
  portfolio.discoverScroller();
};

$(function () {
  portfolio.init();
});
