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
    $(document).ready(function(){
        console.log('ready');
        var geturl='http://104.197.210.78:8000/top';
          $.get(geturl, function(data){
            console.log(data);
            for(var i = 0 ; i < 30 ;i++) {
              $('.tablebody').append('<tr><th><a class="ality" href="http://pantip.com/topic/'+data[i]['tid']+'" data-lity>'+data[i]['tid']+' </a></th>\
              <th>'+data[i]['deg_topic']+'</th>\
              <th>'+data[i]['tlike']+'</th>\
              <th>'+data[i]['temo']+'</th>\
              <th>'+data[i]['time']+'</th>\
              <th>'+data[i]['troom']+'</th>\
              </tr>');
            }
          });
    });
    </script>
<div class="right_col" role="main">
    <div class="container">
    <div class='row'>
    <h1>Popular Topic</h1><h2>sort by largest comments number</h2>
        <br><br>
        <table class="table">
                    <thead>
                      <tr>
                <th>Topic ID</th><th>Number of Replied User</th><th>Like</th><th>Emotion</th><th>TimestampISO</th><th>Rooms</th>
                      </tr>
                    </thead>
                    <tbody class='tablebody'>
         
                    </tbody>
        </table>                    
    </div>
    </div>
       <?php include 'footer.php';?>
</div>
</body>

</html>
