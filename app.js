// Grab Data From File

async function draw()
{   
    // Data
        const dataset = await d3.json('data.json');

        const xAccessor = (d) => d.currently.humidity;
        const yAccessor = (d) => d.currently.apparentTemperature;


    // Dimensions
        let dimensions = {
            width:  800,
            height: 800,
            margin: {
                top:    50,
                bottom: 50,
                left:   50,
                rigth:  50
            }
        }

        dimensions.containerWidth = dimensions.width 
        - dimensions.margin.left - dimensions.margin.rigth;

        dimensions.containerHeight = dimensions.height
        - dimensions.margin.top - dimensions.margin.bottom;


    // Draw Image

        const svg = d3.select('#chart')
            .append('svg')
            .attr('width', dimensions.width)
            .attr('height', dimensions.height)

        const container = svg.append('g')
            .attr('transform', 
            `translate(${dimensions.margin.left},${dimensions.margin.top})`
            )

        /* container.append('circle')
            .attr('r',15)
 */
        // Scales

        const xScale = d3.scaleLinear()
            .domain(d3.extent(dataset, xAccessor))
            .rangeRound([0, dimensions.containerWidth])
            .clamp(true);
        
        const yScale = d3.scaleLinear()
            .domain(d3.extent(dataset, yAccessor))
            .rangeRound([dimensions.containerHeight, 0])
            .nice()
            .clamp(true);
        

        // Draw Circles
        container.selectAll('circle')
            .data(dataset)
            .join('circle')
            .attr('cx',   d => xScale(xAccessor(d)))
            .attr('cy',   d => yScale(yAccessor(d)))
            .attr('r', 5)
            .attr('fill','red')
            .attr('data-temp', yAccessor)

        // Axes
        const xAxis = d3.axisBottom(xScale)
            .ticks(5)
            .tickFormat((d) => d*100 + '%')
            //.tickValues([0.4, 0.5, 0.8])

        const xAxisGroup = container.append('g').call(xAxis)
        .style('transform', `translateY(${dimensions.containerHeight}px)`)    
        .classed('axis', true)

        xAxisGroup.append('text')
            .attr('x', dimensions.containerWidth/2)
            .attr('y', dimensions.margin.bottom - 10)
            .attr('fill', 'black')
            .text('Humidity')

        const yAxis = d3.axisLeft(yScale)

        const yAxisGroup = container.append('g').call(yAxis)
        .classed('axis', true)
            
        yAxisGroup.append('text')
            .attr('x', -dimensions.containerHeight/2)
            .attr('y', -dimensions.margin.left + 15 )
            .attr('fill', 'black')
            .html('Temperature &deg; F')
            .style('transform', 'rotate(270deg)')
            .style('text-anchor', 'middle')

}

draw();
