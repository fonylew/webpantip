<?php include 'head-nav.php';?>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<title>Highcharts Example</title>

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
		<style type="text/css">
${demo.css}
		</style>
		<script type="text/javascript">
    $(document).ready(function() {

        var c = [];
        var d = [];
        var options = {
                chart: {
                    renderTo: 'chart',
                    defaultSeriesType: 'line'
                },
                title: {
                    text: 'reading'
                },
                xAxis: {
                    title: {
                        text: 'Date Measurement'
                    },
                    categories: c
                },
                yAxis: {
                    title: {
                        text: 'reading'
                    }
                },
                series: [{
                    data: d
                }]
        };
        var i = 0;
        var jqxhr = $.get('degree_user_sort.csv', function(data) {
            var lines = data.split('\n');
            $.each(lines, function(lineNo, line) {
                var items = line.split(',');
                c.push(i);
                d.push(parseInt(items[1]));
                i++;
            })
            var chart = new Highcharts.Chart(options);

        });
    });	</script>
	</head>
	<body>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

        <div id="chart" style="width: 800px; height: 400px; margin: 0 auto"></div>
   </body>

</html>
<?php include 'footer.php';?>