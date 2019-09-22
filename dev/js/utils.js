const div = $('<div />'),
ul = $('<ul />'),
cl = console.log,
jp = JSON.parse,
js = JSON.stringify,
LS = localStorage,
SS = sessionStorage;

const ls = {
  get: function(i){
    return jp(LS.getItem(i))
  },
  set: function(i, e){
    LS.setItem(i, js(e))
  }
};

const ss = {
  get: function(i){
    return jp(SS.getItem(i))
  },
  set: function(i, e){
    SS.setItem(i, js(e))
  }
}

void function(){
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
}()

function buildData(choice){
  let data = ls.get('xtu-' + choice);
  $('.sd'+ _.capitalize(choice)).empty()
  _.forEach(data, function(i){
    $('.'+ choice +'dl').append(linkTpl({
      "name":_.startCase(i),
      "title":i,
      "dir": choice,
      "src": _.capitalize(choice)
    }))
    $('.sd'+ _.capitalize(choice)).append(
      '<li><a id="sid'+ i +'" class="waves-effect infoLink'+ _.capitalize(choice) +'">'+_.startCase(i)+'</a></li>'
    )
  })
  initData(choice)
}

const init = {
  roleplays: function(data){
    buildData('roleplays')
  },
  questions: function(data){
    buildData('questions')
  },
  techniques: function(data){
    buildData('techniques')
  },
  tests: function(data){
    buildData('tests')
  },
  debates: function(data){
    buildData('debates')
  }
}

function initData(src){

  $('.infoLink'+ _.capitalize(src)).off().on('click', function(event) {
    let ident = $(this).attr('id').slice(3);

    cl('test'+ src)
    location.hash = '/' + src + '/' + ident;
  });
}

function addRecent(recent){
  $('.recentLnk').remove();

  _.forEach(recent, function(i){
    $('#recent').append('<li class="recentLnk collection-item"><div data-attr="/'+ _.join([i.type, i.title],'/') +'"><p>Type: '+ i.type +'</p><p>Title: '+ i.title +'</p></div></li>')
  })

  $('.recentLnk div').off().on('click', function(){
    location.hash = $(this).attr('data-attr');
  })
}

function addStored(stored){
  $('.storedLnk').remove();

  _.forEach(stored, function(i){
    $('#stored').append('<li class="storedLnk collection-item"><div data-attr="/'+ _.join([i.type, i.title],'/') +'"><p>Type: '+ i.type +'</p><p>Title: '+ i.title +'</p></div></li>')
  })

  $('.storedLnk div').off().on('click', function(){
    location.hash = $(this).attr('data-attr');
  })
}

function translate(text, cb) {
  let letters = /^[A-Za-z]+$/;

  if(!ss.get('online')){
    return cb("translator requires internet connection", null);
  }

  if (!_.isString(text)) {
    return cb("invalid text", null);
  }

  if (_.eq(text, '')) {
    return cb("cannot be empty", null);
  }

  if (_.gt(text.split(' ').length, 1)) {
    return cb("one word limit", null);
  }

  if(!text.match(letters)){
    return cb("english letters only", null);
  }

  $.getJSON('./app/data/config/config.json', function(res) {
    const tkey = res.api.yandex.translate.url + atob(res.api.yandex.translate.key),
    turl = tkey + '&lang=en-zh&text=' + encodeURIComponent(_.escape(text.trim()));
    checktransHis(text, function(err, res){
      if(err){

        if(ls.get('transTime') && _.lt(Date.now() - ls.get('transTime'), 30000)){
          let timeTill = Date.now() - ls.get('transTime');
          return cb('one translation limit per 30s', null)
        }

        $.ajax({
          type: "POST",
          url: turl,
          cache: true,
          dataType: 'json',
          success: function(res){

            if(!_.eq(res.code, 200)){
              return cb('translator request error', null)
            }

            let transHis = ls.get('transHis'),
            obj = {
              en: text,
              cn: res.text
            },
            recent = _.reject(transHis, obj);

            recent.unshift(obj);
            if(_.gt(recent.length, 100)){
              recent = _.slice(recent, 0, 100);
            }
            ls.set('transHis', recent);
            ls.set('transTime', Date.now());
            gettransHis();
            return cb(false, res.text);
          },
          error: function(){
            return cb('translator connection error', null)
          }
        });
      } else {
        cb(false, res)
        cl('translation loaded from history')
      }
      return;
    })

  });
}

function gettransHis(){
  let transHis = ls.get('transHis');
  if(_.gt(transHis.length, 0)){
    $('#transHis').empty();
    _.forEach(transHis, function(i){
      $('#transHis').append(
        hisCardTpl({en: i.en, cn: i.cn.join(', ')})
      )
    })
  }

}



function checktransHis(i, cb){
  try {
    let transHis = ls.get('transHis');
    if(_.gt(transHis.length, 0)){

      let res = _.find(transHis, {en: i});
      if(_.isUndefined(res)){
        return cb(true, null);
      }
      return cb(false, res.cn);
    }
    return cb(true, null);
  } catch (err) {
    if(err){return cb(true, null);}
  }
}

function initEvents(){
  let starthash = _.split(location.hash, '/')

  _.forEach(['recent', 'stored'], function(i){
    if(!ls.get(i)){
      ls.set(i, [])
    }
  })

  window.addEventListener("hashchange", function(){
    cl('changed')
    let newhash = _.split(location.hash, '/');
    if(_.gt(newhash.length, 1)){

      let toAdd = {type:newhash[1], title: newhash[2]},
      recent = _.reject(ls.get('recent'), toAdd);
      recent.unshift(toAdd);

      getItem(newhash[1], newhash[2])
      $('title').text(_.startCase(newhash[2]))

      $('.breadcrumb').eq(1).text(newhash[1])
      $('.breadcrumb').eq(2).text(newhash[2])
      $('.breadcrumb').not( ":first" ).fadeIn('fast');
      $('#homeLnk').fadeIn('fast');


      if(_.gt(recent.length, 5)){
        recent = _.slice(recent, 0, 5);
      }

      addRecent(recent)

      ls.set('recent', recent);


    } else {
      getHome()
      $('title').text('home')
      $('.breadcrumb').not( ":first" ).fadeOut('fast', function(){
        $(this).empty()
      });
      $('#homeLnk').fadeOut('fast');
    }
  }, false);

  if(_.gt(starthash.length, 1)){
    getItem(starthash[1], starthash[2])
    $('.breadcrumb').eq(1).text(starthash[1])
    $('.breadcrumb').eq(2).text(starthash[2])
    $('.breadcrumb').not( ":first" ).fadeIn('fast');
    $('#homeLnk').fadeIn('fast');
  } else {
    $('.collapsible').collapsible();
    $('#homeLnk').fadeOut('fast');
  }

  scrollTop('#app')
  new WOW().init();
  addRecent(ls.get('recent'))
  addStored(ls.get('stored'))
  endLoader()

  $('#storeItem').off().on('click', function(){
    let newhash = _.split(location.hash, '/');
    if(_.gt(newhash.length, 1)){

      let toAdd = {type:newhash[1], title: newhash[2]},
      stored = _.reject(ls.get('stored'), toAdd);
      stored.unshift(toAdd);
      if(_.gt(stored.length, 5)){
        stored = _.slice(stored, 0, 5);
      }
      addStored(stored)
      ls.set('stored', stored);
      M.toast({html: 'page stored'})
    } else {
      M.toast({html: 'cannot store homepage'})
    }
  })

  $('#homeLnk').off().on('click', function(){
    location.hash = '';
  })

  $('#brightness').off().on('click', function(){
    if(ls.get('brightness')){
      $(this).text('brightness_2')
      ls.set('brightness', false)
      $('head').append($('<link />', {
        id: "dark-mode",
        rel: "stylesheet",
        href: "./app/css/dark.min.css"
      }))
    } else {
      $(this).text('brightness_high');
      ls.set('brightness', true)
      $('#dark-mode').remove();
    }
  })

  if(!ls.get('brightness')){
    $('#brightness').text('brightness_2')
    $('head').append(
      $('<link />', {
        id: "dark-mode",
        rel: "stylesheet",
        href: "./app/css/dark.min.css"
      })
    )
  }

  $('.modal').modal();

  if(!ls.get('transHis')){
    ls.set('transHis', [])
  }

  $('#translateLnk').off().on('click', function(){
    $('#translateMdl').modal('open', {endingTop: '100%'});
  })

  $('#chatroom').off().on('click', function(){
    $('#chatroomMdl').modal('open', {endingTop: '100%'});
  })

  $('#translateBtn').off().on('click', function(){
    const text = _.toLower($('#src-translate').val())
    $('#dest-translate').empty();
    translate(text, function(err,res){
      if(err){
        cl(err)
        M.toast({html: err})
        return $('#translateHelper').text(err)
      }
      cl(res)
      _.forEach(res, function(i,e){
        $('#dest-translate').append(
          (e++) +') ' + i +'\n'
        )
      })
    })

  })

  $('#src-translate').characterCounter();

  gettransHis();

  window.addEventListener('online',  isOnline);
  window.addEventListener('offline', isOffline);

  if(navigator.onLine) {
    isOnline();
    addAnalytics();
  } else {
    isOffline();
  }

}

function isOnline(){
  M.toast({html: 'offline'})
  ss.set('online', true)
}

function isOffline(){
  M.toast({html: 'online'})
  ss.set('online', false)
}


function getHome(){
  $('#app').empty()

  _.forEach(['roleplays','debates','questions', 'techniques', 'tests'],function(i){
    $('#app').append(downloadTpl({"i":i,"e":_.capitalize(i)}))
  })
  sbAction();
  getData();
  $('.collapsible').collapsible();
}

function getItem(src, item){
  $.getJSON(_.join(['./app/data', src, item], '/')+ '.json', function(res) {
    $('#app').empty().html(res.data)
  }).done(function(data, res) {
    M.toast({html: item})
    $("html, body").animate({
      scrollTop: 0
    }, 1e3)
  })
  .fail(function() {
    cl("error");
  })
}

function endLoader(){
  $('.loader-mask').fadeOut('slow', function() {
    $(this).remove();
  });
}

function sbAction(){

  $('.ddLnk').off().on('click', function(event) {
    let src = $(this).find($( "i.lnkIcn" ))
    $(this).next().toggle('slow', function(){
        $(src).text($(src).text() == 'chevron_right' ? 'expand_more' : 'chevron_right');
      });
  }),
  $('.dHeader').off().on('click', function(event) {
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
        "date":"2019"
      })
    ),
    div.clone().attr({
      class:"row"
    }).append(
      div.clone().attr({
        id:"app",
        class:"col m9 s12"
      }),
      div.clone().attr({
        id:"infoBar",
        class:"col m3 s12"
      }).append(
        recentTpl({id: 'recent', title: 'Recent'}),
        recentTpl({id: 'stored', title: 'Stored'})
      )
    ),
    footerTpl({"info":"© 2019"}),
    bcTpl(),
    floatTpl(),
    translateTpl(),
    chatboxTpl({name: 'student'})
  ),
  $('.navL').append(navSTpl()),
  $('.navR').append(
    navLinkTpl({"id":"brightness","icn":"brightness_high", "title": "light"}),
    navLinkTpl({"id":"homeLnk","icn":"home", "title": "home"})
  );


  const lnks = [{
    id: 'chatroom',
    icn: 'chat',
    color: 'orange',
    title: 'chatroom'
  },{
    id: 'storeItem',
    icn: 'save',
    color: 'green',
    title: 'Store'
  },{
    id: 'translateLnk',
    icn: 'translate',
    color: 'blue',
    title: 'Translator'
  },{
    id: 'toTop',
    icn: 'keyboard_arrow_up',
    color: 'red',
    title: 'To top'
  }]

  _.forEach(lnks, function(i){
    $('.float-lnk').append(
      lnkTpl({id: i.id, icn: i.icn, color: i.color, title: i.title})
    )
  })


  _.forEach(['roleplays','debates','questions', 'techniques', 'tests'],function(i){
    $('#app').append(downloadTpl({"i":i,"e":_.capitalize(i)}))
    $('#slide-out').append(sbLinkTpl({"i":_.capitalize(i)}))
  })

  $('.sidenav').sidenav();
  sbAction();
  $('.fixed-action-btn').floatingActionButton({
      direction: 'left',
      hoverEnabled: false
    });

}

function scrollTop(i) {
  $("#toTop").click(function() {
    return $("html, body").animate({
      scrollTop: 0
    }, 1e3), !1
  })
}

function getData(){
  $.getJSON( './app/data/index.json')
  .done(function(data) {

    _.forIn(data,function(i, e){
      ls.set('xtu-' + e, i)
      init[e]()
    })
  })
  .fail(function() {
    cl("error");
  })
}

function initChat(){
  $.ajax({
    url: './app/js/chat.js',
    dataType: "script",
    cache: true,
    success: function(i){
      cl('starting chat service...');
    },
    error: function(){
      cl('chat service error.')
    }
  });
}

function addAnalytics(){

  $(document).on('yacounterXXXXXXinited', function () {
    console.log('yaCounterXXXXXX tag is ready to use');
  });

  ym(55060708, "init", {
    clickmap: true,
    defer: true,
    trackLinks: true,
    accurateTrackBounce: true
  });

  ym(55060708, 'hit', location.href);

}
