import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { feature } from 'topojson-client';
import { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';

@Component({
  selector: 'app-map-chart',
  template: `<div #map></div>`,
  standalone: true,
})
export class MapChartComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement!: ElementRef<HTMLDivElement>;

  async ngOnInit() {
    await this.createMap();
  }

  private async createMap() {
    // const width = 960;
    // const height = 500;
    const width = 560;
    const height = 200;

    const svg = d3
      .select(this.mapElement.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const projection = d3.geoMercator().scale(130).translate([width / 2, height / 1.4]);
    const path = d3.geoPath().projection(projection);

    const g = svg.append('g');

    // Fetch the world data
    const world: any = await d3.json('https://unpkg.com/world-atlas@2.0.2/countries-110m.json');

    // Type assertion to ensure TypeScript treats this as a FeatureCollection
    const countries = feature(
      world,
      world.objects.countries
    ) as unknown as FeatureCollection<Geometry, GeoJsonProperties>;

    // Draw the map
    g.selectAll<SVGPathElement, GeoJsonProperties>('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('d', (d) => path(d as any)!) // Explicitly call `path` with the feature
      .attr('class', 'country')
      .style('fill', '#ccc')
      .style('stroke', '#fff')
      .style('stroke-width', '0.5px');
  }
}
