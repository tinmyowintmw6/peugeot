/**************form js*****************/
$(document).ready(function () {
  $("#formButton1").click(function () {
    $("#form1").toggle();
  });
});

$(document).ready(function () {
  $("#formButton2").click(function () {
    $("#form2").toggle();
  });
});


/**************Click Expand booking form*****************/
$(document).ready(function () {
  $(function () {
    $('.plus-minus-toggle').on('click', function () {
      $(this).toggleClass('collapsed');
    });
  });
});

$(document).ready(function () {

  const btn = document.getElementById('formButton1');
  const para = document.querySelectorAll('.change_form_2');

  btn.addEventListener('click', () => {
    para.forEach(el => {
      el.classList.toggle('make_change_disabled');
    })
  })

});


$(document).ready(function () {

  const btn = document.getElementById('formButton2');
  const para = document.querySelectorAll('.change_form_1');

  btn.addEventListener('click', () => {
    para.forEach(el => {
      el.classList.toggle('make_change_disabled');
    })
  })

});






