(function() {
	var _index;

	layui.use(['layer','carousel'], function() {
		layer = layui.layer;
		var carousel = layui.carousel;
		//建造实例
		carousel.render({
			elem: '#test1',
			width: '401px' ,//设置容器宽度
			height:'351px',
			interval:4000,
			arrow: 'none', //始终显示箭头
			anim: 'fade' //切换动画方式
		});

		$("#btn").click(function() {
			layer.open({
				type: 2,
				title: '易烊千玺<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinxing"></use></svg>',
				content: "new_file.html",
				area: ['500px', '330px'],
				cancel: function(index, layero) {
					_index = index;
					layer.alert("我们不见不散");
					return false;
				}
			});
			sessionStorage.setItem("index", _index);
			console.log(layer.index);
		});

	});



})();
