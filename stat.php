<?php include 'head-nav.php';?>

<script>
    var lightbox = lity();
    $(document).on('click', '[data-lightbox]', lightbox);
    // $(document).on('click', '[data-lightbox]', function(e){
        //e.preventDefault();
        // console.log('click');
        // lightbox;
        //console.log("click");
        //var link = this.attr("nohref");
        //lightbox(link);
    // });

    // $('.ality').click(function(){
    //     console.log("click");
    //     var link = this.attr("nohref");
    //     lightbox(link);
    // });

    </script>
<div class="right_col" role="main">
    <div id="container">
        <h1>Power-Law Distribution</h1>
        <img src="powerlaw.png">
    </div>
</div>
   <?php include 'footer.php';?>
</body>

</html>