(function() {
	var layer;
	var nums = 0;

	layui.use(['layer'], function() {
		layer = layui.layer;

		$("#no").click(function() {
			if (nums == 0) {
				nums++;
				layer.alert('一起看到电影的结尾', {
					title: " ",
					closeBtn: 0
				});
			} else if (nums == 1) {
				nums++;
				layer.alert('好吗', {
					title: " ",
					closeBtn: 0
				});
			} else if (nums == 2) {
				nums = 0;
				layer.alert('2019.6.27', {
					title: " ",
					closeBtn: 0
				});
			}
		});

		$("#yes").click(function() {
			layer.confirm('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinxing"></use></svg>' +
				'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinxing"></use></svg>' +
				'<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinxing"></use></svg>', 
				{
					btn:['确定'],
					title: " ",
					closeBtn:0
				},function(){
					layer.closeAll(); 
					parent.layer.close(parent.layer.getFrameIndex(window.name));
				}
			);
		});
	})
})();
