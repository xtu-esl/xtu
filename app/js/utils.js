//automobiles

var div = $('<div />');
var ul = $('<ul />');

function initLoader(){
  $('body').append(
    div.clone().addClass('loader-mask').append(
      div.clone().addClass('loader-wrapper').append(
        div.clone().addClass('loader').append(
          div.clone().addClass('roller'),
          div.clone().addClass('roller')
        ),
        div.clone().addClass('loader loader2').append(
          div.clone().addClass('roller'),
          div.clone().addClass('roller')
        ),
        div.clone().addClass('loader loader3').append(
          div.clone().addClass('roller'),
          div.clone().addClass('roller')
        )
      )
    )
  )
}

initLoader()

function initQuestions(data){
  _.forIn(data,function(i,e){
    $('.questionsdl').append(linkTpl({"name":_.startCase(e),"title":e,"dir":"questions","src":"Questions"}))
    $('.sdQuestions').append('<li><a id="sid'+e+'" class="waves-effect infoLinkQuestions" href="#!">'+_.startCase(e)+'</a></li>')
  })
  initData("Questions",data)
}

function initDebates(data){
  _.forIn(data,function(i,e){
    $('.debatesdl').append(linkTpl({"name":_.startCase(e),"title":e,"dir":"debates","src":"Debates"}))
    $('.sdDebates').append('<li><a id="sid'+e+'" class="waves-effect infoLinkDebates" href="#!">'+_.startCase(e)+'</a></li>')
  })
  initData("Debates",data)
}

function initRoleplays(data){
  _.forIn(data,function(i,e){
    $('.roleplaysdl').append(linkTpl({"name":_.startCase(e),"title":e,"dir":"roleplays","src":"Roleplays"}))
    $('.sdRoleplays').append('<li><a id="sid'+e+'" class="waves-effect infoLinkRoleplays" href="#!">'+_.startCase(e)+'</a></li>')
  })
  initData("Roleplays",data)
}

function initData(src,data){
  $('.infoLink'+src).click(function(event) {
    var ident = $(this).attr('id').slice(3);
    $('#app').empty().html(data[ident])
    M.toast({html: ident})
    $("html, body").animate({
      scrollTop: 0
    }, 1e3)
  });
}

function initEvents(){
  $('.collapsible').collapsible();
  scrollTop('#app')
  new WOW().init();
  endLoader()
}

function endLoader(){
  $('.loader-mask').fadeOut('slow', function() {
    $(this).remove();
  });
}

function sbAction(){
  $('.ddLnk').on('click', function(event) {
    let src = $(this).find($( "i.lnkIcn" ))
    $(this).next().toggle('slow', function(){
        $(src).text($(src).text() == 'chevron_right' ? 'expand_more' : 'chevron_right');
      });
  });
  $('.dHeader').on('click', function(event) {
    let src = $(this).find($( "i.dIcnLnk" ))
    $(this).siblings('li').toggle('slow', function(){
        $(src).text($(src).text() == 'chevron_right' ? 'expand_more' : 'chevron_right');
      });
  });


}

function initBody(){

$('body').append(
  div.clone().attr({
    id:"topNav",
    class:"navbar-fixed"
  }).append(navTpl({
      "title":"XTU"
    })
  ),
  ul.clone().attr({
    id:"slide-out",
    class:"sidenav"
  }).append(
    sbHeadTpl({
      "title":"XTU",
      "sub":"xingtai university",
      "date":"2018"
    })
  ),
  div.clone().attr({
    id:"app",
    class:"container"
  }),
  footerTpl({"info":"© 2018 Ben eaves"})
)

  $('.navL').append(navSTpl())
  $('.navR').append(navLinkTpl({"href":"./","icn":"home"}))

  _.forEach(['roleplays','debates','questions'],function(i){
    $('#app').append(downloadTpl({"i":i,"e":_.capitalize(i)}))
    $('#slide-out').append(sbLinkTpl({"i":_.capitalize(i)}))
  })
  $('.sidenav').sidenav();
  sbAction()
}

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

function dataChoice(i,data){
  if (i === 'questions') {
    initQuestions(data)
  } else if (i === 'debates') {
    initDebates(data)
  } else if (i === 'roleplays') {
    initRoleplays(data)
  }
}

function getData(){
  _.forEach(['debates','questions','roleplays'],function(i){
    if(localStorage.getItem('xtu-' + i) && localStorage.getItem("xtu-" + i) != ''){
            let data = JSON.parse(localStorage.getItem('xtu-' + i));
            dataChoice(i,data)
    } else {
      $.getJSON( './app/data/' + i +'.json', function(data) {
        localStorage.setItem('xtu-' + i,JSON.stringify(data))
      }).done(function(data, res) {
          console.log(res);
          dataChoice(i,data)
      })
      .fail(function() {
      console.log("error");
      })
      .always(function() {
      console.log("complete");
      });
    }
  })
}
