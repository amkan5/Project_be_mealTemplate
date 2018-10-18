function naviUI (){
	return '<nav class="navbar fixed-top navbar-expand-lg navbar-light lighten-5 scrolling-navbar">'
    +'<a class="navbar-brand" href="#" id="logo"><strong>Be meal</strong></a>'
    +'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"'
      +'aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'
      +'<span class="navbar-toggler-icon"></span>'
    +'</button>'
    +'<div class="collapse navbar-collapse" id="navbarSupportedContent">'
      +'<ul class="navbar-nav mr-auto">'
      	/*버튼 누르면 해당 li에 active class 주기*/
        +'<li class="nav-item">'
        	+'<a class="nav-link" href="#" id="menu">MENU</a>'
        +'</li>'
        +'<li class="nav-item">'
        +'<a class="nav-link" href="#" id="join">JOIN</a>'
	    +'</li>'
	    +'<li class="nav-item">'
	        +'<a class="nav-link" href="#" id="taste">MY TASTE</a>'
	    +'</li>'
	    +'<li class="nav-item">'
	      	+'<a class="nav-link" href="#" id="evaluate">평가하기</a>'
	    +'</li>'
	    +'<li class="nav-item">'
	      	+'<a class="nav-link" href="#" id="sam">SAM</a>'
        +'</li>'
      +'</ul>'
      +'<form class="form-inline">'
	      +'<input class="form-control mr-sm-2" type="text" aria-label="Search">'
	      +'<button style="color:black!important;" class="btn btn-outline-white btn-sm my-0" type="button" id="testSearch">Search</button>'
	  +'</form>'
		+'<li class="nav-item dropdown">'
		    +'<a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> '
		        +'</a>'
		    +'<div class="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">'
		        +'<a class="dropdown-item" href="#" id="login">로그인</a>'
		    +'</div>'
		+'</li>'
    +'</div>'
  +'</nav>'
};