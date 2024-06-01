
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "http://localhost:4000/authors",
    "title": "Authors",
    "body": "                                                                                                                                                              Harry:         방송노동자, 역시 무엇이든 시작하고 보는 맛                                                                                                                                                                              Juan:         노래부르기를 좋아아하는 대안학교 고등학생                "
    }, {
    "id": 3,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to HMJ Lab. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                                                               6월 첫날 주말 아침                         1 2 3 4 5                      :       우리집 청년용 아침 #치즈오믈렛 #베이컨 세 줄 #토마토오이샐러드 약간 타버린 #식빵:                                                                               Harry                 01 Jun 2024                                                                                                                           망원동 사우어 Sour                         1 2 3 4 5                      :       점심먹다 후배님의 선방문 및 감상 요청에 아내와 저녁 산책길에 들러본 #망원동 #망리단길 #사우어 #sour:                                                                               Harry                 31 May 2024                                                                                                                           Reviewing the best Oscar movies of all time                         1 2 3 4 5                      :       Review products, books, movies, restaurant and anything you like on your Jekyll blog with Memoirs! JSON-LD ready for review property. :                                                                               Juan                 01 Jan 2020                                                                                                                           Education must also train one for quick, resolute and effective thinking.               :       Memoirs theme has Prism highlighter integrated. I will show you in this post a few examples of how it looks if you are a developer planning to add pieces of. . . :                                                                               Harry                 12 Jun 2018                                "
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/6%EC%9B%94-%EC%B2%AB%EC%A3%BC-%EC%A7%91%EC%97%90%EC%84%9C-%EB%B8%8C%EB%A0%8C%EC%B9%98/",
    "title": "6월 첫날 주말 아침",
    "body": "2024/06/01 - 우리집 청년용 아침 #치즈오믈렛 #베이컨 세 줄 #토마토오이샐러드 약간 타버린 #식빵 접시에는 아이가 어릴 적 한국도자기에 가서 그려넣은 괴상한 무늬가 새겨짐 🙀 "
    }, {
    "id": 8,
    "url": "http://localhost:4000/%EB%A7%9D%EC%9B%90%EB%8F%99-%EC%82%AC%EC%9A%B0%EC%96%B4-sour/",
    "title": "망원동 사우어 Sour",
    "body": "2024/05/31 - 점심먹다 후배님의 선방문 및 감상 요청에 아내와 저녁 산책길에 들러본 #망원동 #망리단길 #사우어 #sour 실험적 메뉴, 가격은 비교적 합리적. 식감에 목숨 건집인듯. #고사리소바 들깨가 고명으로 올라가 식감은 살았지만 들기름과 서로 겹치는 느낌. #가지튀김 칠리소스로 중화식으로 냈는데 전분이 뭉친 부분이 조금 딱딱. 나이 탓이겠지만 부드러운 #양고기츠쿠네 #스지무국 👍 15명 손님 중 #나만남자 "
    }, {
    "id": 9,
    "url": "http://localhost:4000/review-oscar/",
    "title": "Reviewing the best Oscar movies of all time",
    "body": "2020/01/01 - Review products, books, movies, restaurant and anything you like on your Jekyll blog with Memoirs! JSON-LD ready for review property. How to use?: It’s actually really simple! Add the rating in your YAML front matter. It also supports halfs: ---layout: posttitle:  Inception Movie author: johncategories: [ Lifestyle ]tags: [red, yellow]image: assets/images/11. jpgdescription:  My review of Inception movie. Actors, directing and more.  rating: 4. 5---"
    }, {
    "id": 10,
    "url": "http://localhost:4000/education/",
    "title": "Education must also train one for quick, resolute and effective thinking.",
    "body": "2018/06/12 - Memoirs theme has Prism highlighter integrated. I will show you in this post a few examples of how it looks if you are a developer planning to add pieces of code on your website. HTML: &lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: . highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: // alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: print( Hello World )Ruby: require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: printf( Hello World );"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});