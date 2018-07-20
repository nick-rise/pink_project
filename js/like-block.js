var $likeBlock = $('.like-block');

$likeBlock.on('click', '.like-block__btn', function() {
    var $thisNextLikeNumber = $(this).prev('.like-block__like-number');
    var $count = parseInt($thisNextLikeNumber.text());

    if ($thisNextLikeNumber.hasClass('like-it')) {
        $thisNextLikeNumber.removeClass('like-it').text($count - 1);
    } else {
        $thisNextLikeNumber.addClass('like-it').text($count + 1);
    }
});
