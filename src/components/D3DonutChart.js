import React, { useEffect } from "react";
import * as d3 from "d3";
import { getBudgetData } from "../api/budgetService";

const D3DonutChart = () => {
  useEffect(() => {
    getBudgetData().then((data) => drawChart(data));
  }, []);

  const drawChart = (data) => {
    d3.select("#d3DonutChart").selectAll("*").remove();

    const width = 400, height = 400, radius = Math.min(width, height) / 2;
    const svg = d3.select("#d3DonutChart").append("svg").attr("width", width).attr("height", height).append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const pie = d3.pie().value((d) => d.budget);
    const arc = d3.arc().innerRadius(100).outerRadius(radius);

    svg.selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.title))
      .style("stroke", "#fff");

    svg.selectAll("text")
      .data(pie(data))
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .style("fill", "#fff")
      .text((d) => d.data.title);
  };

  return <div id="d3DonutChart"></div>;
};

export default D3DonutChart;