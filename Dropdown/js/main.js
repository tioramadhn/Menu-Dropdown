// const btn=document.querySelectorAll('.btn');

// btn.forEach(function(el){
//     el.addEventListener('click', function(e){
//         e.target.nextElementSibling.classList.toggle('hide');
//     })
// });
// $(".btn").each(function(el){
//     el.click(function(e){
//         console.log(e);
//       });
// });
$('.btn').each(function(el){
    $(this).click(function(e){
        e.target.nextElementSibling.classList.toggle('hide');
    })
});
