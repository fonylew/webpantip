
/**
 * Here is just a basic example on how to properly display a graph
 * exported from Gephi as a JSON file, with the JSON Exporter plugin from
 * the Oxford Internet Institute:
 *
 *  > https://marketplace.gephi.org/plugin/json-exporter/
 *
 * The plugin sigma.parsers.json can load and parse the JSON graph file,
 * and instantiate sigma when the graph is received.
 *
 * The object given as the second parameter is the base of the instance
 * configuration object. The plugin will just add the "graph" key to it
 * before the instanciation.
 */

var nodeData;
var edgeData;
//var data = JSON.parse('data/arctic.json');
var data = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "data/betweenness_limit100.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();
    var lenE = Object.keys(data["edges"]).length;
    var lenN = Object.keys(data["nodes"]).length;
  //  console.log(lenE);
  //  console.log(lenN);
    nodeData = new Array(lenN);
    edgeData = new Array(lenE);

            for (var i = 0; i < lenN; i++) {
              nodeData[i] = new Array(6);
              nodeData[i][0] = data["nodes"][i]["id"];
              nodeData[i][1] = data["nodes"][i]["label"];
              nodeData[i][2] = Math.random();
              nodeData[i][3] = Math.random();
              nodeData[i][4] = data["nodes"][i]["value"];//size
              nodeData[i][5] = '#666';
            }
 
            
             for(var i = 0 ; i < lenE; i++){
                edgeData[i] = new Array(6);
                edgeData[i][0] = data["edges"][i]["source"];
                edgeData[i][1] = data["edges"][i]["target"];

             }        

            createGraph(nodeData,edgeData,lenN,lenE);

function createGraph(nodeData , edgeData ,lenN , lenE){
var i,
    s,
    N = lenN,
    E = lenE,
    g = {
      nodes: [],
      edges: []
    };

// Generate a random graph:
for (i = 0; i < N; i++)
  g.nodes.push({
    id: 'n' + nodeData[i][0] ,
    label: 'Node ' + nodeData[i][1] ,
    x: nodeData[i][2],
    y: nodeData[i][3],
    size: nodeData[i][4],
    color: nodeData[i][5]
  });

for (i = 0; i < E; i++){
  g.edges.push({
    id: 'e' + i,
    label: 'Edge ' + i,
    source: 'n' + (edgeData[i][0]),
    target: 'n' + (edgeData[i][1]),
    size: Math.random(),
    color: '#ccc',
    type: ['line', 'curve', 'arrow', 'curvedArrow'][Math.random() * 4 | 0]
  });
  //console.log(g2.edges[i].source);
}

s = new sigma({
  graph: g,
  renderer: {
    container: document.getElementById('graph-container'),
    type: 'canvas'
  },
    settings: {
      edgeLabelSize: 'proportional'
  }
}); 
         
}

