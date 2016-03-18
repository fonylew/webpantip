function createEgoGraph(user,type){
    console.log("createEgo already !!")
         var g = {
            nodes: [],
            edges: []
        }
        var data ;

       var colors = [
      '#FFA000',//yellow user
      '#009688',//turquoise topic 
      '#00BCD4',//light blue room
      '#FF5252',// red tag
      //room
      '#8437A4',//art green light
      '#B03B7D',//bangrak blue light
      '#3C78B4',//beauty purple
      '#323A95',//blueplanet orange light
      '#337E99',//camera pink rad rad
      '#D19C75',//cartoon brown pink
      '#824B2B',//chalermkrung blue light
      '#6B822B',//chalermthai turquoise
      '#C15644',//family light puple
      '#90DA95',//food blue dark
      '#3DB841',//gallery yellow light
      '#3792A4',//greenzone orange light light
      '#672B82',//home green dark dark
      '#9AD47D',//horoscope pink
      '#6A98CD',//jatujak blue
      '#291132',//klaibann orange dark
      '#93B83D',//library pink dark
      '#66CCAD',//lumpini purple dark
      '#866ACD',//mbk pink purple dark
      '#C4884F',//pantip blue sky
      '#BB3E41',//rajdumnern blue
      '#6E3126',//ratchada blue light but dark
      '#9CDED2',//region meat
      '#2B7B7D',//religious brown meat
      '#858FD5',//siam green hourse shit
      '#241F5B',//siliconvalley pink nude
      '#D0C976',//silom turquoise light
      '#CCA26B',//sinthorn green light nude
      '#1F4417',//social blue light nude
      '#CF7285',//supachalasai purple blue dark
      '#316190',//tvshow green very light light
      '#B3603D',//wahkor blue nude light
      '#862D2E'//writer purple blue very dark
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
            { url: 'http://104.197.210.78:7474', user: 'neo4j', password: 'root' },
            'match (u:User{id:'+user+'})-[v:POSTED]->(p:Topic)<-[r:REPLIED]-(o:User) return u,p,o,v,r limit 3000;',
           s,//match (u:User)-[:POSTED]->(p:Topic)<-[r:REPLIED]-(),(p:Topic)-[c:CLASSED]->(g:Room{name: "'+room+'"}) return u,p,count(r) as DegreeScore order by DegreeScore desc limit 10;
            function() {

                console.log('Number of nodes:'+ s.graph.nodes().length);
                var i,
                nodes = s.graph.nodes(),
                lenN = nodes.length;
                data = new Array(lenN);
                for (i = 0; i < lenN; i++) {
                    nodes[i].x = Math.random();
                    nodes[i].y = Math.random();                    
                    if(nodes[i].neo4j_labels[0] == "User") {
                      nodes[i].color = colors[0];
                      nodes[i].label = nodes[i].neo4j_data['id'];
                      data[i] = nodes[i].label;
                      nodes[i].size = nodes[i].neo4j_data['degree'];
                      nodes[i].borderColor = '#000000';
                      nodes[i].borderWidth = 4;
                      //console.log(nodes[i].label +" User222222");
                    } 
              
                  if(nodes[i].neo4j_labels[0] == "Topic"){
                    //nodes[i].color = colors[1];
                    var room_data = nodes[i].neo4j_data['room'];
                    console.log(nodes[i].neo4j_data);
                    nodes[i].size = s.graph.degree(nodes[i].id);
                    var dot = room_data.search(".");
                    if(dot != -1){
                      var room_array = room_data.split(".");
                      var room = room_array[0];
                    }else{
                      var room = room_data;
                    }
                    console.log("room:"+room);
                    if(room =="art") nodes[i].color = colors[4];
                    if(room =="bangrak") nodes[i].color = colors[5];
                    if(room =="beauty") nodes[i].color = colors[6];
                    if(room =="blueplanet") nodes[i].color = colors[7];
                    if(room =="camera") nodes[i].color = colors[8];
                    if(room =="cartoon") nodes[i].color = colors[9];
                    if(room =="chalermkrung") nodes[i].color = colors[10];
                    if(room =="chalermthai") nodes[i].color = colors[11];
                    if(room =="family") nodes[i].color = colors[12];
                    if(room =="food") nodes[i].color = colors[13];
                    if(room =="gallery") nodes[i].color = colors[14];
                    if(room =="greenzone") nodes[i].color = colors[15];
                    if(room =="home") nodes[i].color = colors[16];
                    if(room =="horoscope") nodes[i].color = colors[17];
                    if(room =="jatujak") nodes[i].color = colors[18]; 
                    if(room =="klaibann") nodes[i].color = colors[19];
                    if(room =="library") nodes[i].color = colors[20];
                    if(room =="lumpini") nodes[i].color = colors[21];
                    if(room =="mbk") nodes[i].color = colors[22];
                    if(room =="pantip") nodes[i].color = colors[23];
                    if(room =="rajdumnern") nodes[i].color = colors[24];
                    if(room =="ratchada") nodes[i].color = colors[25];
                    if(room =="region") nodes[i].color = colors[26];
                    if(room =="religious") nodes[i].color = colors[27];
                    if(room =="siam") nodes[i].color = colors[28];
                    if(room =="siliconvalley") nodes[i].color = colors[29];
                    if(room =="silom") nodes[i].color = colors[30];
                    if(room =="sinthorn") nodes[i].color = colors[31];
                    if(room =="social") nodes[i].color = colors[32];
                    if(room =="supachalasai") nodes[i].color = colors[33];
                    if(room =="tvshow") nodes[i].color = colors[34];
                    if(room =="wahkor") nodes[i].color = colors[35];
                    if(room =="writer") nodes[i].color = colors[36];

                    nodes[i].borderColor = '#000000';
                    nodes[i].borderWidth = 3;
                    // nodes[i].label = nodes[i].neo4j_data['id'];
                     //console.log(nodes[i].label +" Topic22222222");
                   }
                    if(nodes[i].neo4j_labels == "Room") nodes[i].color = colors[2];
                    if(nodes[i].neo4j_labels == "Tag") nodes[i].color = colors[3];
                    //nodes[i].color = colors[Math.floor(Math.random() * colors.length)];

                }
                console.log('Number of edges:'+ s.graph.edges().length);
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
                console.log("egograph finish!!");
                s.startForceAtlas2(fa2config);
                window.setTimeout(function () {
                    s.stopForceAtlas2();
                }, (s.graph.edges().length)*24); //887node 1246edge 17000 sec
              /*  setTimeout(function () {
                s.killForceAtlas2();
                      }, 1800);*/
            }
    );

              // Initialize the dragNodes plugin:
              var dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);

              dragListener.bind('startdrag', function(event) {
                console.log(event);
              });
              dragListener.bind('drag', function(event) {
                console.log(event);
              });
              dragListener.bind('drop', function(event) {
                console.log(event);
              });
              dragListener.bind('dragend', function(event) {
                console.log(event);
              });

              //show node whent hover
              s.bind('overNode clickNode doubleClickNode rightClickNode', function(e) {
                console.log(e.type, e.data.node.label, e.data.node.neo4j_labels[0]);
                $("#box").show();
                if(e.data.node.neo4j_labels[0] == "User"){
                $('#box').append('id : '+e.data.node.neo4j_data['id']+'<br>\
                  closeness :  '+e.data.node.neo4j_data['closeness_centrality']+'<br>\
                  degree : '+e.data.node.neo4j_data['degree']+'<br>\
                  betweenness : '+e.data.node.neo4j_data['betweenness_centrality']+'\
                  ');
                }
                if(e.data.node.neo4j_labels[0] == "Topic"){
                  $('#box').append('id :  '+e.data.node.neo4j_data['id']+'<br>\
                  emo : '+e.data.node.neo4j_data['emo']+'<br>\
                  like : '+e.data.node.neo4j_data['like']+'<br>\
                  room : '+e.data.node.neo4j_data['room']+'<br>\
                  timestamp : '+e.data.node.neo4j_data['timestamp']+'\
                  ');
                }
              });
              s.bind('outNode', function(e) {
                console.log("hello");
                $("#box").hide();
                $('#box').empty(); 
              });

}