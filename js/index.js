(function() {



	layui.use(['layer'], function() {
		layer = layui.layer;

		$("#btn").click(function() {
			layer.open({
				type: 2,
				title: '易烊千玺<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinxing"></use></svg>',
				content: "new_file.html",
				area: ['500px', '320px'],
				cancel: function(index, layero) {
					layer.alert("我们不见不散");
					
					return false;
				}
			})
		});

	});



})();
