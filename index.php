<?php include 'head-nav.php';?>

<script>
    $(document).ready(function(){
        $("#room").show();
        $("#showRoom").click(function(){
            $("#room").toggle();
        });
        // $("#room").show();
        // $("#showRoom").click(function(){
        //     $("#room").show();
        // });
        // $("#hideroom").click(function(){
        //     $("#room").hide();
        // });
        // $("#showTag").click(function(){
        //     $("#tag").show();
        // });
        // $("#hidetag").click(function(){
        //     $("#tag").hide();
        // });
    });
    </script>
</head>



            <!-- page content -->

            <!-- draw graph -->
            <div class="right_col" role="main">
            <div>   
            <button type="button" id="showRoom" class="btn btn-success btn-lg">Room</button>
            <div id="room"></div>

            </div>


            <div  style="text-align:center">
            <button type="button" value="1" onclick="showType(1)" class="btn btn-warning btn-md">Degree of centrality</button>
            <button type="button" value="2" onclick="showType(2)" class="btn btn-warning btn-md">Betweenness of centrality</button>
            <button type="button" value="3" onclick="showType(3)" class="btn btn-warning btn-md">Closesness of centrality</button>
            <button type="button" value="3" onclick="refresh()" class="btn btn-warning btn-sm">refresh</button>            
            </div>   

                <div id="container">
                <style>
                #graph-container {
                max-width: 100%;
                height: 400px;
                margin: auto;
                display: none;
                }
                #graph{
                max-width: 100%;
                height: 600px;
                border-style: solid;
                border-width: 1px;
                position: relative;
                }
                #graph-container2 {
                /*height: 600px;
                width: 1245px;*/
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: #eeeeee;
                z-index: 1;
                }

                #box{
                width: 250px;
                height: 200px;
                z-index: 10;
                margin-top: 10px;
                margin-right: 10px;
                padding: 10px;
                background-color: #ffffff;
                position: relative;
                float: right;
                opacity: 0.5;
                border-style: dotted;
                border-width: 1px;
                }

                 </style>
                <div class="row">
                <div id="graph">  
                <div id="graph-container2"></div>
                <div id="box">Please select room then click view graph!!</div>
                </div>
                </div>
                <br>
                  <table class="table">
                    <thead>
                      <tr>
                <th>User Profile</th><th>View graph</th><th>Degree of centrality</th><th>Betweenness of centrality</th><th>Closeness of centrality</th>
                      </tr>
                    </thead>
                    <tbody>
                                <tr id="user_list0"></tr>
                                <tr id="user_list1"></tr>
                                <tr id="user_list2"></tr>
                                <tr id="user_list3"></tr>
                                <tr id="user_list4"></tr>
                                <tr id="user_list5"></tr>
                                <tr id="user_list6"></tr>
                                <tr id="user_list7"></tr>
                                <tr id="user_list8"></tr>
                                <tr id="user_list9"></tr>            

                    </tbody>
                  </table>                    
                <div id="room_type"></div>

                <div class="row"> 
                <div id="graph-container"></div>
                </div>
                


            </div>


                <!-- footer content -->

                <footer>
                    <div class="">
                        <p class="pull-right">Gentelella Alela! a Bootstrap 3 template by <a>Kimlabs</a>. |
                            <span class="lead"> <i class="fa fa-paw"></i> Hello !</span>
                        </p>
                    </div>
                    <div class="clearfix"></div>
                </footer>
                <!-- /footer content -->
            </div>
            <!-- /page content -->

        </div>

    </div>

    <div id="custom_notifications" class="custom-notifications dsp_none">
        <ul class="list-unstyled notifications clearfix" data-tabbed_notifications="notif-group">
        </ul>
        <div class="clearfix"></div>
        <div id="notif-group" class="tabbed_notifications"></div>
    </div>
    <?php include 'footer.php';?>
    <!--import room and tag-->
    <script type="text/javascript" src="room_tag.js"></script>
  <!--  <script type="text/javascript" src="showtag.js"></script>-->
  <script>
    //var type = document.getElementById("centrality").value;
    var room;
    var type;
   // console.log(type);
    function showTagFromRoom(roomr){
        room = roomr;
       // $('#tag').append("<button type='button' id='bangrak' class='btn btn-primary btn-sm'>"+room+"</button>");
    }
    function showType(typet){
        type = typet  
        if(type==1) getCentrality(room,type);
        if(type==2) getBetweenness(room,type);
        if(type==3) getClosesness(room,type);
       // $('#tag').append("<button type='button' id='bangrak' class='btn btn-primary btn-sm'>"+room+"</button>");
    }
    function refresh(){
        location.reload();
    }
    function sendUser(user){
        var userId = document.getElementById("huser_list"+user).value;
        $('#graph-container').remove(); 
        $('#graph').html('<div id="graph-container2"></div><div id="box">Please select room then click view graph!!</div>'); 
        createEgoGraph(userId);
    }


  </script>


    <!--draw graph !! -->
    <script type="text/javascript" src="order_centrality.js"></script>
    <script type="text/javascript" src="order_betweenness.js"></script>
    <script type="text/javascript" src="order_closesness.js"></script>
    <script type="text/javascript" src="egograph.js"></script>
    <!--<script type="text/javascript" src="drawgraph.js"></script>-->

   
</body>

</html>
