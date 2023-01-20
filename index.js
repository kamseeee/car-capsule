$(".cart-btn").click(function (e) {
  if ($(this).text() === "Add to cart") {
    $(this).text("Added to cart!");
    $(this).addClass("in-cart");
    $(".badge").text(Number($(".badge").text()) + 1);
  } else if ($(this).text() === "Added to cart!") {
    $(this).text("Add to cart");
    $(this).removeClass("in-cart");
    $(".badge").text(Number($(".badge").text()) - 1);
  }
  e.preventDefault();
})

$(".like-btn").click(function () {
  console.log($(this).children(".fa-heart").attr("data-prefix"));
  if ($(this).children(".fa-heart").attr("data-prefix") === "far") {
    $(this).children(".fa-heart").attr("data-prefix", "fas");
    $(this).children(".fa-heart").addClass("liked");
  } else if ($(this).children(".fa-heart").attr("data-prefix") === "fas") {
    $(this).children(".fa-heart").attr("data-prefix", "far");
    $(this).children(".fa-heart").removeClass("liked");
  }
})
