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
    <div class="container">
        <div class="row">
            <div class="col-sm-2 col-lg-2"></div>
            <div class="col-sm-6 col-lg-6">
                <h3>Data Preprocessing in Python</h3>
            </div>
                <a href="https://github.com/fonylew/json-pantipdata" class="col-sm-2 col-lg-2 btn btn-info"><i class="fa fa-github fa-3x"></i>  Source Code</a>
            <div class="col-sm-2 col-lg-2"></div>
            <div class="col-sm-6 col-lg-6">
                <h3>Data Processing in R with Neo4j and igraph</h3>
            </div>
                <a href="https://github.com/fonylew/rneo4j-centrality" class="col-sm-2 col-lg-2 btn btn-info"><i class="fa fa-github fa-3x"></i>  Source Code</a>
            <div class="col-sm-2 col-lg-2"></div>
            <div class="col-sm-6 col-lg-6">
                <h3>Website for Data Visualization with Sigma.js</h3>
            </div>
                <a href="https://github.com/fonylew/webpantip" class="col-sm-2 col-lg-2 btn btn-info"><i class="fa fa-github fa-3x"></i>  Source Code</a>
        </div>
    </div>
</div>
   <?php include 'footer.php';?>
</body>

</html>
