var $sliderControlRight = $('.slider__control_right');
var $sliderControlLeft = $('.slider__control_left');
var $sliderPaginatorControl = $('.slider-paginator__control');


$sliderControlRight.on('click', function(event) {
    event.preventDefault();

    var $review = $('.reviews-item');
    var $reviewsList = $('.reviews__wrapper');

    $review.first().appendTo($reviewsList);
});

$sliderControlLeft.on('click', function(event) {
    event.preventDefault();

    var $review = $('.reviews-item');
    var $reviewsList = $('.reviews__wrapper');

    $review.last().prependTo($reviewsList);
});

$sliderPaginatorControl.on('click', function() {
    var $this = $(this);

    $this
        .addClass('slider-paginator__control_active')
        .siblings()
        .removeClass('slider-paginator__control_active');

    var $reviewNumber = $this.attr('data-review');
    var $reviewsList = $('.reviews__wrapper');

    $reviewsList.find('[data-review=' + $reviewNumber + ']').prependTo($reviewsList);
});