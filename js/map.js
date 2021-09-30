// GLOBAL

const boundary = "data/lac_boundary.geojson"
const tracts = "data/lac_tracts.geojson"
const missing_tracts = "data/lac_tracts_missing.geojson"
const points ="data/points.geojson"
const csv = "data/la_tracts_majority_reduced.csv"

let width = 600;
let height = 650;

let projection = d3.geoMercator()
                .scale(1)
                .translate([0, 0]);

let path = d3.geoPath()
            .projection(projection);

let map_svg = d3.select("#choropleth")
                .append("svg")
                .attr("width",width)
                .attr("height",height);

d3.csv(csv).then((data) => {
    console.log(data)
});

d3.json(tracts).then((data) => {
    console.log(data.features);
    projection.fitSize([width,height],data); // adjust the projection to the features
    map_svg.append("path").attr("d", path(data));
});

