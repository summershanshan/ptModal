/**
 * Created by ptmind on 2016/9/30.
 */
/**
 *    jquery 弹窗插件
 *    调用方法（中括号的为可选参数）：
 *    $(modalSelector).modal(options)
 *  【参数详解】：
 *     Options={
                isShow:"show",   //表示模态框的状态 "show"=>显示  "hide"=>隐藏 默认为"show"
                animationName:"bounceInDown",  //模态框的进入动画 bounceInDown,scaleIn,rotateIn,默认bounceInDown
                animationOutName:"bounceOutUp"  //模态框的消失动画bounceOutUp,scaleOut,rotateOut, 默认bounceOutUp
            }
 */
(function($){
    function modal(options,callback){
        var $modal=$(this),
            isStatic= $modal.attr("data-backdrop") === "static" ? true : false,
            $dismiss=$modal.find("input[data-dismiss='modal']"),
            $modalCon=$modal.find(".modalCon"),
            defaultOptions={
                isShow:"show",
                animationName:"bounceInDown",
                animationOutName:"bounceOutUp"
            };
        options=$.extend({},defaultOptions,options);
        if(options.isShow==="show"){
            createMask();
            modalShow($modal,$modalCon,options);
            $(document).off("click",'.mask');
            $(document).on("click",".mask",function(){
                if(!isStatic){
                    modalHide($modal,$modalCon,options);
                }
            });
        }else if(options.isShow==="hide"){
            modalHide($modal,$modalCon,options);
        }
        if($dismiss.length!==0){
            $dismiss.off('click');
            $dismiss.on("click",function(){
                modalHide($modal,$modalCon,options);
            });
        }
    }
    function createMask(){
        var mask=$("<div class='mask animated'></div>");
        $("body").append(mask);
        $(".mask").addClass("fadeIn");
    }
    function deleteMask(){
        $(".mask").removeClass("fadeIn").addClass("fadeOut");
        setTimeout(function(){
            $(".mask").remove();
        },800);
    }
    function modalHide(modal,modalCon,options){
        modalCon.removeClass(options.animationName).addClass(options.animationOutName);
        setTimeout(function(){
            modal.removeClass("in");
            deleteMask();
        },800);
    }
    function modalShow(modal,modalCon,options){
        modal.addClass('in');
        modalCon.hasClass(options.animationOutName)?modalCon.removeClass(options.animationOutName)
            .addClass(options.animationName):modalCon.addClass(options.animationName);
    }
    $.fn.modal=modal;
})(jQuery);