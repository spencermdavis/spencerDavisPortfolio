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

portfolio.init = () => {
  portfolio.popoutSummon();
};

$(function () {
  portfolio.init();
});
