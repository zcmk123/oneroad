//改变div的高度（silu）
$("#silu").height($(window).height());

$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
        }
    });

	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
			
		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},
		
		helpers : {
			title : { 
				type: 'inside' 
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});
	
});

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

    // Slider Height
    var slideHeight = $(window).height();
    
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });

//Timeline Init
$(document).ready(function () {
    $('.VivaTimeline').vivaTimeline({
    carousel: true,
    carouselTime: 3000
    });
});

//chart
$(function() {
var data = {
    labels : ["2011","2012","2013","2014","2015","2016"],
    datasets : [
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            data : [6,7.85,10.2,13.4,18.3,22.97]
        }
    ]
}


var defaults = {
                //网格线是否在数据线的上面
                scaleOverlay : false,

                //是否用硬编码重写y轴网格线
                scaleOverride : true,

                //** Required if scaleOverride is true **
                //y轴刻度的个数
                scaleSteps : 6,
                //y轴每个刻度的宽度
                scaleStepWidth : 5, 
                //Y轴起始值
                scaleStartValue: 0,
                // Y/X轴的颜色
                scaleLineColor: "rgba(0,0,0,.1)",
                 // X,Y轴的宽度
                scaleLineWidth: 1,
                // 刻度是否显示标签, 即Y轴上是否显示文字
                scaleShowLabels: true,
                // Y轴上的刻度,即文字
                scaleLabel: "<%=value%>亿",
                // 字体
                scaleFontFamily: "'Arial'",
                 // 文字大小
                scaleFontSize: 12,
                // 文字样式
                scaleFontStyle: "normal",
                // 文字颜色 
                scaleFontColor: "#000",
                // 是否显示网格
                scaleShowGridLines: true,
                // 网格颜色
                scaleGridLineColor: "rgba(0,0,0,.05)",
                // 网格宽度
                scaleGridLineWidth: 2,

                //Bar Chart图表特定参数：
                //是否绘制柱状条的边框
                barShowStroke : true,
                //柱状条边框的宽度
                barStrokeWidth : 2,
                //柱状条组之间的间距(过大或过小会出现重叠偏移错位的效果，请控制合理数值)
                barValueSpacing :5,
                //每组柱状条组中柱状条之间的间距
                barDatasetSpacing :4,
                // 是否显示提示
                showTooltips: true, 

                // 是否执行动画
                animation: true,
                // 动画的时间
                animationSteps: 60,
                // 动画的特效
                animationEasing: "easeOutQuart",
                // 动画完成时的执行函数
                onAnimationComplete: null
            }

    window.onload = function(){
        var ctx = document.getElementById("myChart").getContext("2d");
        window.myLine = new Chart(ctx).Bar(data,defaults); 
    }

});