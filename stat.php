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
<!-- top tiles -->
                <div class="row tile_count">
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-comment-o"></i> Total Topics</span>
                            <div class="count">1,113,840</div>
                        </div>
                    </div>
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-group"></i> Total Users</span>
                            <div class="count">264,187</div>
                        </div>
                    </div>
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-cubes"></i> Total Rooms</span>
                            <div class="count">34</div>
                        </div>
                    </div>
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-tag"></i> Total Tags</span>
                            <div class="count">5,378</div>
                        </div>
                    </div>
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-user"></i> Graph Density</span>
                            <div class="count">0.0001784786</div>
                        </div>
                    </div>
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-hdd-o"></i> Disk Usage</span>
                            <div class="count">7.33GB</div>
                        </div>
                    </div>

                </div>
<!-- /top tiles -->

        </div>
        <div class="row">
            <h1>Power-Law Distribution</h1>
            <div class="col-sm-12 col-lg-12">
                <img src="powerlaw.png" style="width:100%;">
            </div>
        </div>
        <!-- top tiles -->
                <div class="row tile_count">
                    <div class="col-md-8 col-sm-4 col-xs-4">
                    </div>
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-circle"></i> Number of Nodes</span>
                            <div class="count">1,383,439</div>
                        </div>
                    </div>
                    <div class="animated flipInY col-md-2 col-sm-4 col-xs-4 tile_stats_count">
                        <div class="left"></div>
                        <div class="right">
                            <span class="count_top"><i class="fa fa-long-arrow-right"></i> Number of Relationships</span>
                            <div class="count"> 15,258,067</div>
                        </div>
                    </div>
                </div>
<!-- /top tiles -->
    </div>
   <?php include 'footer.php';?>
</div>
</body>

</html>
