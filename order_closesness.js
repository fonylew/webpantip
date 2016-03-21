    function getClosesness(room,type){
    alert(room+" "+type);
         var g = {
            nodes: [],
            edges: []
        }
        var data = new Array(10);
        for (var i = 0; i < 10; i++) {
          data[i] = new Array(4);
        }

       var colors = [
      '#FFA000',//yellow 
      '#009688',//turquoise
      '#00BCD4',//light blue
      '#FF5252'// red
    ];
    var s = new sigma({
      graph: g,
      renderer: {
        container: document.getElementById('graph-container'),
        type: 'canvas'
      },
        settings: {
          edgeLabelSize: 'proportional'
      }
    }); 

    sigma.neo4j.cypher(
            { url: 'http://104.197.136.113:7474', user: 'neo4j', password: 'root' },
            'MATCH (n:User)-[p:POSTED]->(t:Topic)-[c:CLASSED]->(g:Room{name: "'+room+'"}) 
RETURN n.id,g.name,count(*) as sum order by sum desc  LIMIT 100;',
            //MATCH (n:User)-[:POSTED]->()-[c:CLASSED]->(g:Room{name: "'+room+'"}) WITH count(*) as idCount,n.id as nid,n.closeness_centrality as ndeg,n as user RETURN nid,idCount,ndeg,user order by ndeg desc LIMIT 10;',
           s,//match (u:User)-[:POSTED]->(p:Topic)<-[r:REPLIED]-(),(p:Topic)-[c:CLASSED]->(g:Room{name: "'+room+'"}) return u,p,count(r) as DegreeScore order by DegreeScore desc limit 10;
            function() {

                console.log('Number of nodes :'+ s.graph.nodes().length);
                var i,
                nodes = s.graph.nodes(),
                lenN = nodes.length;


                for (i = 0; i < lenN; i++) {
                    
                    nodes[i].x = Math.random();
                    nodes[i].y = Math.random();                    
                    nodes[i].size = nodes[i].neo4j_data['degree'];
                    //console.log(nodes[i].neo4j_labels);
                    if(nodes[i].neo4j_labels == "User") {
                      nodes[i].color = colors[0];
                      nodes[i].label = nodes[i].neo4j_data['id'];

                      data[i][0] = nodes[i].label;
                      data[i][1] = nodes[i].neo4j_data['degree'];
                      data[i][2] = nodes[i].neo4j_data['betweenness_centrality'];
                      data[i][3] = nodes[i].neo4j_data['closeness_centrality'];
                     // console.log(d_close[i]);
                    // console.log("User "+data[i][0]);
                    //  console.log("User centraility "+data[i][1]);


                    } 

                    if(nodes[i].neo4j_labels == "Topic"){
                     nodes[i].color = colors[1];
                     nodes[i].label = nodes[i].neo4j_data['id'];
                     console.log(nodes[i].label +" Topic");

                      //nodes[i].label = nodes[i].neo4j_data['id'];
                   }
                    if(nodes[i].neo4j_labels == "Room") nodes[i].color = colors[2];
                    if(nodes[i].neo4j_labels == "Tag") nodes[i].color = colors[3];
                    //nodes[i].color = colors[Math.floor(Math.random() * colors.length)];

                }
                console.log('Number of edges :'+ s.graph.edges().length);
                var j,
                edges = s.graph.edges(),
                lenE = edges.length;
                for (j = 0; j < lenE; j++) {        
                 //  if(edges[j].source == "User") edges[j].color = '#333';
                  // if(edges[j].source == "Topic") edges[j].color = '#666';
                 //  if(edges[j].source == "Room") edges[j].color = '#000';
                   edges[j].color = "#ccc";
                   edges[j].size =  0.01;
                   edges[j].type = 'curvedArrow';
                }   
                s.refresh();
                fa2config = {
                linLogMode: false,
                outboundAttractionDistribution: false,
                adjustSizes: false,
                edgeWeightInfluence: 0,
                scalingRatio: 1,
                strongGravityMode: false,
                gravity: 1,
                slowDown: 1,
                barnesHutOptimize: true,
                barnesHutTheta: 0.5,
                startingIterations: 1,
                iterationsPerRender: 1
                };

                s.startForceAtlas2(fa2config);
                window.setTimeout(function () {
                    s.stopForceAtlas2();
                }, 5000);
              /*  setTimeout(function () {
                s.killForceAtlas2();
                      }, 1800);*/
              
              data.sort(function(a,b,c,d) {
                        return b[3]-a[3]
                      });
              sentdataToArrayClosesness(data);
              console.log(data);
              console.log("senthataToArrayCentrality");
            }
    );



    // Calling neo4j to get all its relationship type
    sigma.neo4j.getTypes(
            { url: 'http://104.197.136.113:7474', user:'neo4j', password:'root' },
            function(types) {
                console.log("Relationship types " + types);
            }
    );

    // Calling neo4j to get all its node label
    sigma.neo4j.getLabels(
            { url: 'http://104.197.136.113:7474', user:'neo4j', password:'root' },
            function(labels) {
                console.log("Node labels " + labels);
            }
    );

    /*
    for(var i = 0 ; i < 10 ;i++) {
    $('#user_list'+i+'').append(data[i]);
    }*/
    $('#room_type').append(room+" "+type);

}
function sentdataToArrayClosesness(data){
     for(var i = 0 ; i < 10 ;i++) {
    $('#user_list'+i+'').append('<th><a class="fancybox" data-fancybox-type="iframe" data-fancybox-href="http://pantip.com/profile/'+data[i][0]+'" href="javascript:;">'+data[i][0]+'</a></th>\
    <th><input id="huser_list'+i+'" type="hidden" value ="'+data[i][0]+'"></input><button  onclick=\"sendUser('+i+','+1+')\"> view graph </button></th>\
    <th>'+data[i][1]+'</th>\
    <th>'+data[i][2]+'</th>\
    <th style="background-color:#fff59e">'+data[i][3]+'</th>\
    ');
  }
}
