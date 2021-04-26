$(document).ready(function (){
	$(function () {
		$("a[href*=#]").click(function () {
			if (
				location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname) {
					let $target = $(this.hash);
					$target = ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
					if ($target.length) {
						let targetOffset = $target.offset().top;
						$("html,body").animate({ scrollTop: targetOffset }, 900);
						return false;
					}
			}
		});
	});
});
