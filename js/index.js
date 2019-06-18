(function() {



	layui.use(['layer'], function() {
		layer = layui.layer;

		$("#btn").click(function() {
			layer.open({
				type: 2,
				title: " ",
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
