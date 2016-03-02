function createEgoGraph(user){
         var g = {
            nodes: [],
            edges: []
        }
        var data ;

       var colors = [
      '#FFA000',//yellow user
      '#009688',//turquoise topic 
      '#00BCD4',//light blue room
      '#FF5252'// red tag
    ];
    var s = new sigma({
      graph: g,
      renderer: {
        container: document.getElementById('graph-container2'),
        type: 'canvas'
      },
        settings: {
          edgeLabelSize: 'proportional'
      }
    }); 

    sigma.neo4j.cypher(
            { url: 'http://localhost:7474', user: 'neo4j', password: 'root' },
            'match (u:User{id:'+user+'})-[v:POSTED]->(p:Topic)<-[r:REPLIED]-(o:User) return u,p,o,v,r;',
           s,//match (u:User)-[:POSTED]->(p:Topic)<-[r:REPLIED]-(),(p:Topic)-[c:CLASSED]->(g:Room{name: "'+room+'"}) return u,p,count(r) as DegreeScore order by DegreeScore desc limit 10;
            function() {

                console.log('Number of nodes2222 :'+ s.graph.nodes().length);
                var i,
                nodes = s.graph.nodes(),
                lenN = nodes.length;
                data = new Array(lenN);
                for (i = 0; i < lenN; i++) {
                    nodes[i].x = Math.random();
                    nodes[i].y = Math.random();                    
                    nodes[i].size = s.graph.degree(nodes[i].id);
                    if(nodes[i].neo4j_labels == "User") {
                      nodes[i].color = colors[0];
                      nodes[i].label = nodes[i].neo4j_data['id'];
                      data[i] = nodes[i].label;
                      console.log(nodes[i].label +" User222222");
                    } 
              
                    if(nodes[i].neo4j_labels == "Topic"){
                     nodes[i].color = colors[1];
                     nodes[i].label = nodes[i].neo4j_data['id'];
                     console.log(nodes[i].label +" Topic22222222");
                      //nodes[i].label = nodes[i].neo4j_data['id'];
                   }
                    if(nodes[i].neo4j_labels == "Room") nodes[i].color = colors[2];
                    if(nodes[i].neo4j_labels == "Tag") nodes[i].color = colors[3];
                    //nodes[i].color = colors[Math.floor(Math.random() * colors.length)];

                }
                console.log('Number of edges222 :'+ s.graph.edges().length);
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
            }
    );



}