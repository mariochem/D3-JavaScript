        // Step 1
        var dataset1 = [ [150, 475.8 ], [155, 543.1 ], [160, 617.8],  [165, 700.5], [ 170, 791.7], [175, 892], [180, 1002.1],
                       [185, 1122.7], [190, 1254.4], [ 195, 1397.8], [200, 1553.8], [205, 1723 ], [210, 1906.2], [215, 2104 ], [220, 2318],
                       [225, 2548], [230, 2795], [235, 3060], [240, 3344], [245, 3648 ], [250, 3973 ], [255, 4319], [260, 4688],
                       [265, 5081], [270, 5499], [275, 5942], [280, 6412], [285, 6909], [290, 7436], [295, 7993], [300, 8581],
                       [305, 9202 ], [310, 9856], [315, 10547], [320, 11274], [325, 12059.5], [330, 12845], [335, 13715.5], [340, 14586], 
                       [345, 15549.5], [345, 15549.5], [350, 16513], [355, 17582], [360, 18651], [365, 19840.5], [370, 21030 ], [374.14, 22090]  ];
    

        // Step 3
        var svg = d3.select("svg"),
            margin = 200,
            width = svg.attr("width") - margin, //300
            height = svg.attr("height") - margin //200

        // Step 4 
        var xScale = d3.scaleLinear().domain([150.0, 380]).range([0, width]),
            yScale = d3.scaleLinear().domain([0.0, 30000]).range([height, 0]);
            
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
        .text('Pressão de vapor da água de 150ºC a 374.14ºC');
        
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
        .attr('transform', 'translate(50,' + 300 + ')rotate(-90)')
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
