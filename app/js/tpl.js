_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

var navTpl = _.template('<nav><div class="nav-wrapper mlr30 center"><ul class="left navL"></ul><span class="navLogo">{{title}}</span><ul class="right navR"></ul></div></nav>')

var navSTpl = _.template('<li class="waves-effect waves-light"><a href="#" data-target="slide-out" class="sidenav-trigger material-icons">menu</a></li>')

var navLinkTpl = _.template('<li class="waves-effect waves-light"><a href="{{href}}"  class="material-icons nlIcn">{{icn}}</a></li>')

var linkTpl = _.template('<li class="wow fadeInUp collection-item"><div class="collapsible-header waves-effect waves-dark"><i class="material-icons">chevron_right</i>{{name}}</div><div class="collapsible-body"><ul class="lnkGroup"><li class="lnkRow"><a id="lnk{{title}}" class="infoLink{{src}}"><span class="lnkText">view online</span><i class="material-icons lnkIcn">visibility</i></a></li><li class="lnkRow"><a href="./app/downloads/{{dir}}/{{title}}.docx" download><span class="lnkText">download word document</span><i class="material-icons lnkIcn">file_download</i></a></li><li class="lnkRow"><a href="./app/downloads/{{dir}}/{{title}}.pdf" download><span class="lnkText">download pdf document</span><i class="material-icons lnkIcn">file_download</i></a></li></ul></div></li>');

var toTopTpl = _.template('<div id="toTop" class="material-icons waves-effect waves-dark">expand_less</div>');
var footerTpl = _.template('<footer class="page-footer"><div class="footer-copyright"><div class="container">{{info}}</div></div></footer>');
var downloadTpl= _.template('<ul class="collapsible {{i}}dl"><li class="collection-header dHeader"><h4 class="ml10">{{e}}<i class="material-icons dIcnLnk">chevron_right</i></h4></li></ul>')
var sbHeadTpl = _.template('<div class="user-view"><h2>{{title}}</h2><h6>{{sub}}</h6><small>{{date}}</small></div>')
var sbLinkTpl = _.template('<li><div class="divider"></div></li><li class="ddLnk"><h4 class="ml10">{{i}}<i class="material-icons lnkIcn">chevron_right</i></h4></li><div class="sd{{i}}"></div>')
