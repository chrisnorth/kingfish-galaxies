function hubblefork(){

    return this;

}

hubblefork.prototype.scaleimg = function(){

    var w=$(window).width();
    var h=$(window).height() - 20;
    var el=$(".bgimg .fork");
    var scalex=w/el.outerWidth();
    var scaley=h/el.outerHeight();
    var scale = (scalex < scaley ? scalex : scaley);
    //console.log(w,h,scale);

    /*el.css({
	"width":parseInt(parseInt(el.css("width"))*scale)+"px",
	"height":"auto"
    })*/

    bgw=Math.round(parseFloat($(".bgimg").css("width"))*scale);
    bgh=Math.round(parseFloat($(".bgimg").css("height"))*scale);
    this.bgw=bgw
    this.bgh=bgh
    this.scale=scale
    this.ml=(w - this.bgw)/2
    $(".bgimg").css({
	"width":bgw+"px",
	"height":bgh+"px",
    })
    
    $(".gals").css({
	"left":this.ml+"px",
	"width":bgw+"px",
	"height":bgh+"px"
    })

    $(".title").css({
	"font-size":parseFloat($(".title").css("font-size"))*scale+"px",
    })

    $(".logo").css({
	"width":Math.round(parseFloat($(".logo").css("width"))*scale)+"px",
	"top":Math.round(parseFloat($(".logo").css("top"))*scale)+"px"
    })

    $(".herlogo").css({
	"width":Math.round(parseFloat($(".herlogo").css("width"))*scale)+"px",
	"left":Math.round(parseFloat($(".herlogo").css("left"))*scale)+"px",
	"top":Math.round(parseFloat($(".herlogo").css("top"))*scale)+"px"
    })
    
    if ($(".title").css("display") != "none"){
	//console.log(title.css("display"));
	$(".logo").css({
	    "top":parseFloat($(".title").css("font-size"))*scale+16+"px"
	})
    }


    $(".fork").css({
	"display":"none",
    })
    //console.log(bgw,bgh);

    var _obj=this
    
    //do stuff on mouseover image
    //console.log($(".galimg"));
    $(".galimg").each(function(i){
	//console.log($(this),$(this).css("left"),$(this).css("top"));
	$(this).css({
	    "left":(parseFloat($(this).css("left"))*scale)+"px",
	    "top":(parseFloat($(this).css("top"))*scale)+"px",
	    //"z-index":20,
	    //"border":"1px red solid"
	})

	$(this).find(".fancybox").css({
	    "width":(parseFloat($(this).css("width"))*scale)+"px",
	    "height":(parseFloat($(this).css("height"))*scale)+"px"
	    //"height":"auto"
	})

	/*$(this).find(".lab-below").css({
	    //"top":((parseFloat($(this).find(".lab-below").css("top"))*scale)+bw)+"px",
	    //"top":(parseFloat($(this).find(".fancybox").css("height")))+"px",
	    "bottom":-2+"px"
	})*/

	$(this).find(".lab-above").css({
	    //"bottom":(parseFloat($(this).find(".lab-above").css("bottom"))*scale)-1+"px",
	    //"width":(parseFloat($(this).find(".fancybox").css("width"))*1.0)+"px",
	})

	//console.log($(this).find(".fancybox").css("width"))
	$(this).find(".lab-left").css({
	    //"left":(parseFloat($(this).find(".lab-left").css("left"))*scale)+1+"px",
	    "left":((parseFloat($(this).find(".fancybox").css("width")))+1.0)+"px",
	})
	
	$(this).find(".lab-right").css({
	    //"right":(parseFloat($(this).find(".lab-right").css("right"))*scale)-1+"px",
	    "right":((parseFloat($(this).find(".fancybox").css("width")))-1.0)+"px",
	})
	    

	$(this).on("mouseover",function(e){
	    //console.log($(this).find(".galname").html());
	    //$(this).find(".galname").css("display","block");
	    $(this).addClass("galon");
	}).on("mouseout",function(e){
	    //$(this).find(".galname").css("display","none");
	    $(this).removeClass("galon");
	})

	var imgw
	var imgh

	imgw=parseFloat($(this).find(".fancybox").css("width"))
	imgh=parseFloat($(this).find(".fancybox").css("height"))
	rel=imgh/imgw

	var imwidth=parseFloat($(this).find("div.infoimg").css("width"))*scale;
	var imheight=imwidth*(1+rel) + 2*parseFloat($(this).find(".imglabel").css("font-size"));
	//var titheight=parseFloat($(this).find("h1").css("font-size"))+parseFloat($(this).find("h1").css("margin-top"))+parseFloat($(this).find("h1").css("margin-bottom"))+parseFloat($(this).fin d("h1").css("padding-top"))
	//var txtheight = imwidth*rel + imwidth + 32
	infow=(parseFloat($(this).find(".fbinfo").css("width"))-50)*scale + 50
	infoh=rel*infow/2.
	$(this).find(".fbinfo").css({
	    "width":infow+"px",
	})
	
	//console.log(titheight)
	$(this).find("div.infoimg").css({
	    "width":(parseFloat($(this).find("div.infoimg").css("width"))*scale)+"px",
	    "left":parseFloat($(this).find("div.infoimg").css("left"))*scale+"px"
	})

	$(this).find("div.infotxt").css({
	    "width":parseFloat($(this).find("div.infotxt").css("width"))*scale+"px",
	    "left":parseFloat($(this).find("div.infotxt").css("left"))*scale+"px",
	    "min-height":(imheight)+"px"
	    //"padding-left":parseFloat($(this).find("div.infotxt").css("padding-left"))*scale+"px"
	})

	$(this).find(".fancybox").fancybox({
	    'transitionIn': 'fade',
       	    'transitionOut': 'fade',
       	    'type': 'inline',
	    'autoDimensions': 'true'
	});
	
	$(this).find(".fboxname").fancybox({
	    'transitionIn': 'fade',
       	    'transitionOut': 'fade',
       	    'type': 'inline',
	    'autoDimensions': 'true'
	});

	$(this).mousedown(function(){
	    if (!$(this).find("img.wsimg").hasClass("loaded")){
		ra=parseFloat($(this).find(".ra").html())
		dec=parseFloat($(this).find(".dec").html())
		ang=parseFloat($(this).find(".ang").html())
		galid=$(this).find(".galid").html()
		imgsrc='http://server7.sky-map.org/imgcut?survey=DSS2&w=128&h=128&ra='+(ra/15)+'&de='+(dec)+'&angle='+(ang)+'&output=PNG'
		//console.log($(this).find("img.wsimg"))
		//console.log("ws_"+galid)
		//console.log(document.getElementById("ws_"+galid))
		document.getElementById("ws_"+galid).src=imgsrc
		document.getElementById("ws_"+galid).alt="DSS2/WikiSky image"
		//$(this).find("img.wsimg").setAttribute('src',imgsrc)
		$(this).find("img.wsimg").addClass("loaded")
		$(this).find("img.wsimg").removeClass("imgload")
		//console.log(document.getElementById("ws_"+galid))
		//console.log($(this).find("img.wsimg").getAttribute('src'))
	    }  
	})



    });

    $("div.fbhelp").each(function(){
	helpw=(parseFloat($(this).css("width"))-50)*scale + 50
	helph=rel*infow/2.
	$(this).css({
	    "width":helpw+"px",
	})

	$(this).find("div.helpimg").css({
	    "width":parseFloat($(this).find("div.helpimg").css("width"))*scale+"px",
	    "left":parseFloat($(this).find("div.helpimg").css("left"))*scale+"px"
	})

	$(this).find("div.helptxt").css({
	    "width":parseFloat($(this).find("div.helptxt").css("width"))*scale+"px",
	    "left":parseFloat($(this).find("div.helptxt").css("left"))*scale+"px",
	})
    })


    //make fancybox
    /*console.log(fork.bgw,fork.bgh,fork.scale)
    $("a.fancybox").each(function(){
	
	var fork=_obj
	rel=parseFloat($(this).css("height"))/parseFloat($(this).css("width"))
	if (rel < 1.4) rel=1.4
	winw=fork.bgw
	winh=fork.bgh
	w0=(winw/2.)
	h0=w0/2.*rel
	console.log(w0,h0)
	$(this).fancybox({
	    //'autoscale':false,
	    //'width':w0,
	    //'height':h0,
	    'autoscale':true,
	    'transitionIn': 'fade',
       	    'transitionOut': 'fade',
       	    'type': 'inline',
	    //'autoDimensions': 'true'
	});

	$(".fbinfo").each(function(){
	    $(this).css({"width":parseFloat($(this).find("fbinfo").css("width"))*scale+"px"})
	})
    })*/
}

hubblefork.prototype.setup = function(){

    this.scaleimg()

    // draw initial paper
    //bgw=parseInt($(".bgimg").css("width"));
    //bgh=parseInt($(".bgimg").css("height"));
    bgw=this.bgw
    bgh=this.bgh
    this.drawlines();

}

hubblefork.prototype.drawlines = function(){

    paper=Raphael(this.ml,0,this.bgw,this.bgh);
    this.paper=paper
    this.Irregular = {lines:[],box:[],text:[],labb:[],labt:[]}
    this.Elliptical = {lines:[],box:[],text:[],labb:[],labt:[]}
    this.Spiral = {lines:[],box:[],text:[],labb:[],labt:[]}
    this.Barred = {lines:[],box:[],text:[],labb:[],labt:[]}
    this.Intermediate = {lines:[],box:[],text:[],labb:[],labt:[]}

    //bgw=parseInt($(".bgimg").css("width"));
    //bgh=parseInt($(".bgimg").css("height"));
    bgw=this.bgw
    bgh=this.bgh

    //make line through ellipticals
    var ell=paper.path("M"+0.01*bgw+","+0.51*bgh+"L"+0.26*bgw+","+0.51*bgh);
    this.Elliptical.lines=[ell]
 
    //make line through spirals
    var spl=paper.path("M"+0.26*bgw+","+0.51*bgh+"C"+0.5*bgw+","+0.3*bgh+" "+0.6*bgw+","+0.27*bgh+" "+0.99*bgw+','+0.27*bgh);
    this.Spiral.lines=[spl]


    //make line through barred spirals
    var sbl=paper.path("M"+0.26*bgw+","+0.51*bgh+"C"+0.5*bgw+","+0.73*bgh+" "+0.6*bgw+","+0.75*bgh+" "+0.99*bgw+','+0.75*bgh);
    this.Barred.lines=[sbl]

    //make box around irregulars
    irl=paper.path("M"+0.01*bgw+","+0.57*bgh+"L"+0.01*bgw+","+0.99*bgh+" "+0.5*bgw+","+0.99*bgh+" "+0.2*bgw+","+0.57*bgh+" "+0.01*bgw+","+0.57*bgh+"Z");
    irl.attr({
	"fill":"black",
	"fill-opacity":0.1
    })
    this.Irregular.lines=[irl]

    //label major lines
    paper.setStart()
    var bell=paper.rect(0.01*bgw,(0.51-0.02)*bgh,0.1*bgw,0.04*bgh,r=0.01*bgh);
    var tell=paper.text(0.06*bgw,0.51*bgh,"Elliptical");
    this.Elliptical.box=[bell]
    this.Elliptical.text=[tell]
    this.style("Elliptical",bgh)
    var setell=paper.setFinish()
    bell.click(function(){
	alert('setell clicked')
    })

    paper.setStart()
    var bspl=paper.rect(0.6*bgw,(0.29-0.02)*bgh,0.08*bgw,0.04*bgh,r=0.01*bgh);
    var tspl=paper.text(0.64*bgw,0.29*bgh,"Spirals");
    bspl.rotate(-10);
    tspl.rotate(-10);
    this.Spiral.box=[bspl]
    this.Spiral.text=[tspl]
    this.style("Spiral",bgh)
    setsp=paper.setFinish()

    paper.setStart()
    var binl=paper.rect(0.65*bgw,(0.55-0.02)*bgh,0.22*bgw,0.04*bgh,r=0.01*bgh);
    var tinl=paper.text(0.76*bgw,0.55*bgh,"Intermediate Spirals");
    this.Intermediate.box=[binl]
    this.Intermediate.text=[tinl]
    this.style("Intermediate",bgh)
    setin=paper.setFinish()

    paper.setStart()
    var bsbl=paper.rect(0.56*bgw,(0.73-0.02)*bgh,0.16*bgw,0.04*bgh,r=0.01*bgh);
    var tsbl=paper.text(0.64*bgw,0.73*bgh,"Barred Spirals");
    bsbl.rotate(8);
    tsbl.rotate(8);
    this.Barred.box=[bsbl]
    this.Barred.text=[tsbl]
    this.style("Barred",bgh)
    setsb=paper.setFinish()    

    paper.setStart()
    birr=paper.rect(0.02*bgw,(0.96-0.02)*bgh,0.1*bgw,0.04*bgh,0.01*bgh);
    tirr=paper.text(0.07*bgw,0.96*bgh,"Irregular");
    this.Irregular.box = [birr]
    this.Irregular.text = [tirr]
    this.style("Irregular",bgh)
    setirr=paper.setFinish()

    var stirr=paper.set();
    stirr.push(this.Irregular.lines[0],this.Irregular.text[0],this.Irregular.box[0]);
    

    //make minor labels (hidden at start)
    var bs0=paper.rect(0.24*bgw,(0.51-0.02)*bgh,0.04*bgw,0.04*bgh,r=0.01*bgh);
    var ts0=paper.text(0.26*bgw,0.51*bgh,"S0");

    var bsa=paper.rect(0.34*bgw,(0.42-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsa=paper.text(0.37*bgw,0.42*bgh,"SAa");
    bsa.rotate(-30)
    tsa.rotate(-30)

    var bsb=paper.rect(0.5*bgw,(0.325-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsb=paper.text(0.53*bgw,0.325*bgh,"SAb");
    tsb.rotate(-15)
    bsb.rotate(-15)

    var bsc=paper.rect(0.69*bgw,(0.28-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsc=paper.text(0.72*bgw,0.28*bgh,"SAc");
    bsc.rotate(-5)
    tsc.rotate(-5)

    var bsd=paper.rect(0.90*bgw,(0.27-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsd=paper.text(0.93*bgw,0.27*bgh,"SAd");
    this.Spiral.labb=[bs0,bsa,bsb,bsc,bsd]
    this.Spiral.labt=[ts0,tsa,tsb,tsc,tsd]
    this.style("Spiral",bgh)

    var bsb0=paper.rect(0.23*bgw,(0.51-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsb0=paper.text(0.26*bgw,0.51*bgh,"SB0");

    var bsba=paper.rect(0.34*bgw,(0.605-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsba=paper.text(0.37*bgw,0.605*bgh,"SBa");
    bsba.rotate(30)
    tsba.rotate(30)

    var bsbb=paper.rect(0.49*bgw,(0.695-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsbb=paper.text(0.52*bgw,0.695*bgh,"SBb");
    bsbb.rotate(15)
    tsbb.rotate(15)

    var bsbc=paper.rect(0.73*bgw,(0.745-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsbc=paper.text(0.76*bgw,0.745*bgh,"SBc");
    bsbc.rotate(3)
    tsbc.rotate(3)

    var bsbd=paper.rect(0.90*bgw,(0.75-0.02)*bgh,0.06*bgw,0.04*bgh,r=0.01*bgh);
    var tsbd=paper.text(0.93*bgw,0.75*bgh,"SBd");

    this.Barred.labb=[bsb0,bsba,bsbb,bsbc,bsbd]
    this.Barred.labt=[tsb0,tsba,tsbb,tsbc,tsbd]
    this.style("Barred",bgh)

    //make thick lines

    var ellbig=paper.path("M"+0.01*bgw+","+0.51*bgh+"L"+0.26*bgw+","+0.51*bgh);
    ellbig.attr({
	"stroke-width":0.1*bgh,
 	"stroke-opacity":0
    })
    setell.toFront()
 
    var spbig=paper.path("M"+0.26*bgw+","+0.51*bgh+"C"+0.5*bgw+","+0.3*bgh+" "+0.6*bgw+","+0.27*bgh+" "+0.99*bgw+','+0.27*bgh);
    spbig.attr({
	"stroke-width":0.1*bgh,
	"stroke-opacity":0
    })
    setsp.toFront()

    var sbbig=paper.path("M"+0.26*bgw+","+0.51*bgh+"C"+0.5*bgw+","+0.73*bgh+" "+0.6*bgw+","+0.75*bgh+" "+0.99*bgw+','+0.75*bgh);
    sbbig.attr({
	"stroke-width":0.1*bgh,
	"stroke-opacity":0
    })
    setsb.toFront()
    var _obj = this

    this.dur=250

    setell.mouseover(function(){
	_obj.toggle("Elliptical",true)
	_obj.toggle("Irregular",false)
    }).click(function(){
	document.getElementById('helplink-ell').click()
	//console.log('elliptical clicked')
    })

    setsp.mouseover(function(){
	_obj.toggle("Spiral",true)
	_obj.toggle("Irregular",false)
    }).click(function(){
	document.getElementById('helplink-spiral').click()
	//console.log('spiral clicked')
    })

    setsb.mouseover(function(){
	_obj.toggle("Barred",true)
	_obj.toggle("Irregular",false)
    }).click(function(){
	document.getElementById('helplink-barred').click()
	//console.log('barred clicked')
    })

    setin.mouseover(function(){
	_obj.toggle("Intermediate",true)
	_obj.toggle("Irregular",false)
    }).mouseout(function(){
	_obj.toggle("Intermediate",false)
    }).click(function(){
	document.getElementById('helplink-inter').click()
	//console.log('intermediate clicked')
    })

    setirr.click(function(){
	document.getElementById('helplink-irr').click()
	//console.log('irregular clicked')
    })

    sbbig.mouseover(function(){
	_obj.toggle("Barred",true)
	_obj.toggle("Irregular",false)
    }).mouseout(function(){
	_obj.toggle("Barred",false)
    })

    spbig.mouseover(function(){
	_obj.toggle("Spiral",true)
	_obj.toggle("Irregular",false)
    }).mouseout(function(){
	_obj.toggle("Spiral",false)
    })

    ellbig.mouseover(function(){
	_obj.toggle("Elliptical",true)
	_obj.toggle("Irregular",false)
    }).mouseout(function(){
	_obj.toggle("Elliptical",false)
    })

    stirr.mouseover(function(){
	_obj.toggle("Irregular",true)
    }).mouseout(function(){
	_obj.toggle("Irregular",false)
    })    
  
}

hubblefork.prototype.style = function(galtype,bgh){

    linecol="#969696";
    tcol="#fff";
    linewid=0.005*bgh;
    linewid < 3 ? linewid=3 : linewid=linewid;

    //console.log(bgh,tcol)
    for (var i=0;i<this[galtype].box.length;i++) {
	//console.log(galtype,this[galtype],this[galtype].box[i])
	this[galtype].box[i].attr({
	    "fill":"#000000",
	    "fill-opacity":1,
	    "stroke":"#fff"
	})
    }

    for (var i=0;i<this[galtype].text.length;i++) {
	//console.log(this[galtype].text[i])
	this[galtype].text[i].attr({
	    "fill":tcol,
	    "font-size":0.03*bgh,
	    "font-weight":"bold"
	})
    }

    for (var i=0;i<this[galtype].labb.length;i++) {
	//console.log(this[galtype].labb[i])
	this[galtype].labb[i].attr({
	    "fill":"#000",
	    "stroke":"#fff",
	    "stroke-width":2,
	    "opacity":0,
	})
    }

    for (var i=0;i<this[galtype].labt.length;i++) {
	//console.log(this[galtype].labt[i])
	this[galtype].labt[i].attr({
	    "fill":"#fff",
	    "font-size":0.03*bgh,
	    "opacity":0
	})
    }

    for (var i=0;i<this[galtype].lines.length;i++) {
	//console.log(this[galtype].labt[i])
	this[galtype].lines[i].attr({
	    "stroke":linecol,
	    "stroke-width":linewid,
 	    "stroke-dasharray":"- "
	})
    }
	    

}

$(document).ready(function(){

    //var irl;
    //var tirr;
    //var birr;

    fork = new hubblefork()
    fork.setup()

    $(window).on("resize",{me:fork},function(e){
	//console.log("resize");
	e.data.me.scaleimg();
	e.data.me.paper.clear() //clear paper
	e.data.me.drawlines(e.data.me.paper) //redraw paper
    })

    $(".Irregular").on("mouseover",{me:fork},function(e){
	//console.log('irr toggle',e.data.line,e.data.text,e.data.box)
	e.data.me.toggle("Irregular",true)
    })

    $(".logo").on("mouseover",{me:fork},function(e){
	//console.log('bubble');
	e.data.me.makebubble()
    })

    $('.fbhelp').each(function(){
	//console.log($(this))
	$(this).fancybox({
	    'transitionIn': 'fade',
       	    'transitionOut': 'fade',
       	    'type': 'inline',
	    'autoDimensions': 'true'
	})
    });

    $('a.guidebox').each(function(){
	$(this).fancybox({
	    'transitionIn': 'fade',
       	    'transitionOut': 'fade',
       	    'type': 'inline',
	    'autoDimensions': 'true'
	})
    });

    var isInIframe = (window.location != window.parent.location) ? true : false;
    //console.log(isInIframe);
    if (!isInIframe){
	$('div.fullscreenbox').css({'display':'none'});
	//console.log('not in iframe')
    }else{
	$('div.backbox').css({'display':'none'});
	//console.log('in iframe')
    };

    $('div.backbox').click(function(){
	window.history.back()
	//console.log('goback');
    });

});


hubblefork.prototype.toggle = function(galtype,highlight){

    /*if (galtype == "Irregular"){
	line = this.irregular.lines
	text = this.irregular.text
	box = this.irregular.box
    } else if (galtype == "Spiral"){
	line = [this.irl]
	text = [this.tirr]
	box = [this.birr]
    }*/
    line = this[galtype].lines
    text = this[galtype].text
    box = this[galtype].box
    labb = this[galtype].labb
    labt = this[galtype].labt

    if (highlight){
	//console.log(galtype,line,this.irl,this.tirr,this.birr)
	if (typeof line !== "undefined" && line.length>0) for (var i = 0;i<line.length;i++) line[i].animate({"stroke":"#ffffff"},this.dur);
	if (typeof text !== "undefined" && text.length>0) for (var i = 0;i<text.length;i++) text[i].animate({"fill":"#000"},this.dur);
	if (typeof box !== "undefined" && box.length>0) for (var i = 0;i<box.length;i++) box[i].animate({"fill":"#fff"},this.dur);
	if (typeof labb !== "undefined" && labb.length>0) for (var i = 0;i<labb.length;i++) labb[i].animate({"opacity":1},this.dur);
	if (typeof labt !== "undefined" && labt.length>0) for (var i = 0;i<labt.length;i++) labt[i].animate({"opacity":1},this.dur);
	$("."+galtype).addClass("active")
    }else{
	if (typeof line !== "undefined" && line.length>0) for (var i = 0;i<line.length;i++) line[i].animate({"stroke":linecol},this.dur);
	if (typeof text !== "undefined" && text.length>0) for (var i = 0;i<text.length;i++) text[i].animate({"fill":tcol},this.dur);
	if (typeof box !== "undefined" && box.length>0) for (var i = 0;i<box.length;i++) box[i].animate({"fill":"#000"},this.dur);
	if (typeof labb !== "undefined" && labb.length>0) for (var i = 0;i<labb.length;i++) labb[i].animate({"opacity":0},this.dur);
	if (typeof labt !== "undefined" && labt.length>0) for (var i = 0;i<labt.length;i++) labt[i].animate({"opacity":0},this.dur);
	$("."+galtype).removeClass("active")
    }
}

hubblefork.prototype.makebubble = function(paper){
    var bgw=parseInt($(".bgimg").css("width"));
    var bubx0 = parseFloat($(".logo").css("left"))+0.1*parseFloat($(".logo").css("width"))
    var fishh=parseFloat($(".logo").css("width"))*0.57
    var buby0 = parseFloat($(".logo").css("top"))+0.5*fishh

    this.paper.setStart()

    this.paper.circle(bubx0,buby0,0.005*bgw)

    var bub=this.paper.setFinish()
    bub.attr({
	"stroke":"#ffffff",
	"fill-opacity":0,
    })

    var animhide = Raphael.animation({"stroke-opacity":0},100)
    bub.animate({
	"cy":buby0-0.7*fishh,
	"r":0.01*bgw,
	"stroke":"#8eb4e3",
	"stroke-width":2,
    },1000)
    bub.animate(animhide.delay(1000))
    //console.log("bubble",bubx0,buby0,buby0-0.5*fishh)

}
