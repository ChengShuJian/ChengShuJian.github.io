(function() {
	var _layer;
	var nums = 0;
	var numss

	layui.use(['layer'], function() {
		_layer = layui.layer;

		$("#no").click(function() {
			if (nums == 0) {
				numss = 0;
				nums++;
				layer.alert('一起看到电影的结尾', {
					title: " ",
					closeBtn:0
				});
			} else if (nums == 1) {
				nums++;
				layer.alert('好吗', {
					title: " ",
					closeBtn:0
				});
			} else if (nums == 2) {
				nums = 0;
				numss = 2;
				layer.alert('2019.6.27', {
					title: " ",
					closeBtn:0
				});
			}
		});

		$("#yes").click(function() {
			// if(numss == 2){
				layer.alert('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinxing"></use></svg>' +
					'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinxing"></use></svg>' +
					'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinxing"></use></svg>', {
						title: " "
					});
// 			}else{
// 				layer.alert('剧情不是这样的！！！', {
// 					title: " ",
// 					closeBtn:0
// 				});
// 			}
		});
	})
})();
