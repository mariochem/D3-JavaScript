// Step 1
        var dataset1 = [ [5.0, 0.8721], [10.0, 1.227], [15.0, 1.7051],
            [20.0, 2.3339],[25.0, 3.169], [30.0, 4.246],
            [35.0, 5.628], [40.0, 7.384], [45.0, 9.593], [50.0, 12.349], [55.0, 15.758], [60.0, 19.940], [65.0, 25.030], [70.0, 31.19],
            [75.0, 38.58], [80.0, 47.39],  [85.0, 57.83], [90.0, 70.140],[95.0, 84.550], [100.0, 101.35],[105, 120.82], [ 110, 143.27 ], 
            [115, 169.06], [ 120, 198.53], [125, 232.1], [130, 270.1], [ 135, 313], [140, 361.3], [145, 415.4], [150, 475.8 ]        ];
    

        // Step 3
        
        // set the dimensions and margins of the graph
        var margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 1000 - margin.left - margin.right,
        height = 700 - margin.top - margin.bottom;
        
           
        var svg = d3.select("svg"),
            margin = 200,
            width = svg.attr("width") - margin, //300
            height = svg.attr("height") - margin //200

        // Step 4 
        var xScale = d3.scaleLinear().domain([0.0, 160]).range([0, width]),
            yScale = d3.scaleLinear().domain([0.0, 550]).range([height, 0]);
            
        var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

        // Step 5
        // Title
        svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', 30)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('Pressão de vapor da água de 5ºC a 150ºC');
        
        // X label
        svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Temperatura ºC');
        
        // Y label
        svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + 300 + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 12)
        .text('Pressão(kpa)');

        // Step 6
        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale));
        
        g.append("g")
         .call(d3.axisLeft(yScale));
        
        // Step 7
        svg.append('g')
        .selectAll("dot")
        .data(dataset1)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } )
        .attr("cy", function (d) { return yScale(d[1]); } )
        .attr("r", 3)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#CC0000");

        // Step 8        
        var line = d3.line()
        .x(function(d) { return xScale(d[0]); }) 
        .y(function(d) { return yScale(d[1]); }) 
        .curve(d3.curveMonotoneX)
        
        svg.append("path")
        .datum(dataset1) 
        .attr("class", "line") 
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#CC0000")
        .style("stroke-width", "2");
          
function myVolta() {window.location.href='https://mariochem.github.io/D3-JavaScript';}
    
