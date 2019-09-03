import React from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(animated);

class MapContainer extends React.Component {
  componentDidMount() {
    this.map = am4core.create('chartdiv', am4maps.MapChart);
    import('@amcharts/amcharts4-geodata/usaLow').then(data => {
      this.map.maxZoomLevel = 1;
      this.map.seriesContainer.draggable = false;
      this.map.seriesContainer.resizable = false;

      this.map.geodata = data.default;
      this.map.projection = new am4maps.projections.Miller();

      let worldSeries = this.map.series.push(new am4maps.MapPolygonSeries());
      worldSeries.exclude = ['US-AK', 'US-HI'];
      worldSeries.useGeodata = true;

      let template = worldSeries.mapPolygons.template;
      template.tooltipText = "{name}";
      template.fill = this.map.colors.getIndex(0);
      template.nonScalingStroke = true;

      let hover = template.states.create("hover");
      hover.properties.fill = am4core.color("#367B25");
    });
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{
        width: '100%',
        height: '500px'
      }}></div>
    );
  }
}

export default MapContainer;
