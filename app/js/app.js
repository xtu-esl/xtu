
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

var linkTpl = _.template('<li><div class="collapsible-header"><i class="material-icons">chevron_right</i>{{title}}</div><div class="collapsible-body"><ul class="lnkGroup"><li class="lnkRow"><a id="lnk{{title}}" class="infoLink"><span class="lnkText">view online</span><i class="material-icons lnkIcn">visibility</i></a></li><li class="lnkRow"><a href="./app/downloads/{{title}}.docx" download><span class="lnkText">download word document</span><i class="material-icons lnkIcn">file_download</i></a></li><li class="lnkRow"><a href="./app/downloads/{{title}}.pdf" download><span class="lnkText">download pdf document</span><i class="material-icons lnkIcn">file_download</i></a></li></ul></div></li>');

var toTopTpl = _.template('<div id="toTop" class="material-icons">expand_less</div>');
$(document).ready(function(){



  scrollTop('#app')

$.getJSON( "./app/data/items.json", function(data) {
  //console.log(JSON.stringify(data))


  }).done(function(data) {
    console.log( "json success" );



_.forIn(data,function(i,e){
  $('.collapsible').append(linkTpl({"title":e}))
  $('#slide-out').append('<li><a id="sid'+e+'" class="waves-effect infoLink" href="#!">'+_.startCase(e)+'</a></li>')
})

$('.infoLink').click(function(event) {
  console.log($(this).attr('id').slice(3))
$('#app').empty().html(data[$(this).attr('id').slice(3)])
});

})
.fail(function() {
console.log( "error" );
})
.always(function() {
console.log( "complete" );
});


   $('.sidenav').sidenav();
    $('.collapsible').collapsible();
  });


function scrollTop(i) {
  $(i).after(toTopTpl())
  $(window).scroll(function() {
    100 < $(this).scrollTop() ? $("#toTop").fadeIn() : $("#toTop").fadeOut()
  }), $("#toTop").click(function() {
    return $("html, body").animate({
      scrollTop: 0
    }, 1e3), !1
  })
}
