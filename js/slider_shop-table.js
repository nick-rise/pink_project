var table = document.querySelector('.shop-table');
var tableShiftSize = 282;
var shopControls = document.querySelectorAll('.shop .slider-paginator__control');

// наделяем набор кнопок shopControls свойствами массива (нам нужен forEach)
var shopControlsArray = Array.prototype.slice.call(shopControls);

function onClickShopControl(event) {
     event.preventDefault();

     // перебираем все круглые кнопки и убирем у них класс active
     shopControlsArray.forEach(function(shopControl) {
          shopControl.classList.remove('slider-paginator__control_active');
     });

     // кнопке на которую нажали (click) добавляем класс active
     event.currentTarget.classList.add('slider-paginator__control_active');

     // вычисляем порядковый номер текущей круглой кнопки
     var shopControlIndex = shopControlsArray.indexOf(event.currentTarget);

     // вычисляем сдвиг талицы
     var marginLeft = -tableShiftSize * (shopControlIndex + 1);

     // ставим margin-left у таблицы раный вычисленному значению
     table.style.marginLeft = marginLeft + 'px';
}

// перебираем все круглые кнопки и применяем к каждому ф-ию onShopControlClick
shopControlsArray.forEach(function(shopControl) {
     shopControl.addEventListener('click', onClickShopControl);
});
