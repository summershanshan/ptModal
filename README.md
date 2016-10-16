Modal
======
ptModal简介
-----
1. 模态框一般用于给用户提示性的信息，以弹框的形式显示更加突出
2. 本插件是依赖jquery写的，引用前需先引入jquery文件
3. 插件目前还算简陋 有待改进 欢迎各位大牛不吝指导

modal样式：
---------
![Image](https://github.com/summershanshan/ptModal/raw/master/img/modal.png)
modal HTML部分代码结构：
---------------------
```
        <div class="modal" id="pt-header-bounce-modal" data-backdrop="static">
            <div class="modalCon animated">
                <div class="modal-title">
                    <h3>这里是标题部分...Bounce</h3>
                </div>
                <div class="modal-body">
                    <p class="pt-mb10">这里是内容部分,输入想说的话...</p>
                    <input type="text" class="modal-inp" placeholder="请输入...">
                </div>
                <div class="modal-footer">
                    <input type="button" class="btn btn-default" value="确认" data-dismiss="modal">
                    <input type="button" class="btn btn-cancle" value="取消" data-dismiss="modal">
                </div>
            </div>
        </div>
```
1. 其中data-backdrop自定义属性设置为"static"时，点击mask遮罩层时就不会触发消失
2. 给button 按钮添加data-dismiss自定义属性为"modal"值时，点击button时就会触发模态框消失

调用方法：
-------
<pre>
    <code>
        $("#pt-header-scale-modal").modal({
             isShow:"show",
             animationName:"rotateIn",
             animationOutName:"rotateOut"
        });
    </code>
</pre>
参数详解：
--------
1. isShow: 控制模态框是需要显示还是隐藏 可能的值有："show","hide"默认"show"
2. animationName: 模态框显示时的动画 可能的值有：bounceInDown,scaleIn,rotateIn,默认bounceInDown
3. animationOutName: 模态框隐藏时的动画 可能的值有：bounceOutUp,scaleOut,rotateOut, 默认bounceOutUp