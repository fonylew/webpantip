<?php include 'head-nav.php';?>
<div class="right_col" role="main">
<script >
    $(document).ready(function() {    
        $(".fancybox").fancybox({
            type: "iframe",
            afterLoad: function() {
                this.title = '<a target="_blank" href="' + this.href + '">open in new tab</a> ';
            },
            helpers : {
                title: {
                    type: 'inside'
                }
            }
        });
    });
    console.log('fancy already');
</script>
<div id="aa"></div>
<button class="but">hi</button>
</div>
<script>
	$('.but').click(function(){
		$('#aa').append('<a class="fancybox" data-fancybox-type="iframe" data-fancybox-href="http://pantip.com/profile/327698" href="javascript:;">fancy </a>');
	});
</script>
<?php include 'footer.php';?>
</body>
</html>