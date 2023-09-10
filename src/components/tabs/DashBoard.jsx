

import React, { useLayoutEffect, useRef, useState } from "react";
import am5geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
//import { am5core } from "@amcharts/amcharts5";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
//import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
//import * as am5percent from "@amcharts/amcharts5/percent";
//import am5themes_Kelly from "@amcharts/amcharts5/themes/Dark";
import * as am5map from"@amcharts/amcharts5/map";
export default function DashBoard(props) {
  // This code will only run one time


  useLayoutEffect(() => {
    //am5.addLicense("AM5C4849375FDGJ")
    am5.addLicense("AM5M4354354357");
    let root = am5.Root.new("chartdiv");

    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
   
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    let chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "translateY",
      projection: am5map.geoMercator(),
      homeGeoPoint: { latitude: 2, longitude: 2 }
    }));
    
    let cont = chart.children.push(am5.Container.new(root, {
      layout: root.horizontalLayout,
      x: 20,
      y: 40
    }));
    
    // Add labels and controls
    // cont.children.push(am5.Label.new(root, {
    //   centerY: am5.p50,
    //   text: "Map"
    // }));
            chart.set("projection", am5map.geoOrthographic());
            let subheading = am5.Label.new(root, {
              text: `“Unleash your potential with our diverse range of projects! Each one is a unique opportunity to learn, grow, and make a difference. Don’t just dream it, do it! Join us now and let’s build a better future together.`,
              fontSize: 5,
              centerX: am5.p0,
              x: am5.p50,
              y: am5.p50,
          });
          
          // Add the subheading label to the chart
          chart.children.push(subheading);
      
      // Add the heading label to the chart
      
    // let switchButton = cont.children.push(am5.Button.new(root, {
    //   themeTags: ["switch"],
    //   centerY: am5.p50,
    //   icon: am5.Circle.new(root, {
    //     themeTags: ["icon"]
    //   })
    // }));
    
    // switchButton.on("active", function() {
    //   if (!switchButton.get("active")) {
    //     chart.set("projection", am5map.geoMercator());
    //     chart.set("panY", "translateY");
    //     chart.set("rotationY", 0);
    //     backgroundSeries.mapPolygons.template.set("fillOpacity", 0);
    //   } else {
    //     chart.set("projection", am5map.geoOrthographic());
    //     chart.set("panY", "rotateY")
    
    //     backgroundSeries.mapPolygons.template.set("fillOpacity", 0.1);
    //   }
    // });
    
    // cont.children.push(
    //   am5.Label.new(root, {
    //     centerY: am5.p50,
    //     text: "Globe"
    //   })
    // );
    
    // Create series for background fill
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    let backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0,
      strokeOpacity: 0
    });
    
    // Add background polygon
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180)
    });
    
    // Create main polygon series for countries
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow
    }));
    
    // Create line series for trajectory lines
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-line-series/
    let lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.3
    });
    
    // Create point series for markers
    // https://www.amcharts.com/docs/v5/charts/map-chart/map-point-series/
    let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    //pointSerie.set("fill", am5.color(0xff0000));
    pointSeries.bullets.push(function() {
      let circle = am5.Circle.new(root, {
        radius: 7,
        tooltipText: "Drag me!",
        cursorOverStyle: "pointer",
        tooltipY: 0,
        //fill: am5.color(0xffffff),
        fill: am5.color(0xffba00),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
        draggable: true
      });
    
      circle.events.on("dragged", function(event) {
        let dataItem = event.target.dataItem;
        let projection = chart.get("projection");
        let geoPoint = chart.invert({ x: circle.x(), y: circle.y() });
    
        dataItem.setAll({
          longitude: geoPoint.longitude,
          latitude: geoPoint.latitude
        });
      });
    
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });
    
    let paris = addCity({ latitude: 48.8567, longitude: 2.351 }, "Paris");
    let toronto = addCity({ latitude: 43.8163, longitude: -79.4287 }, "Toronto");
    let la = addCity({ latitude: 34.3, longitude: -118.15 }, "Los Angeles");
    let havana = addCity({ latitude: 23, longitude: -82 }, "Havana");
    let india=addCity({latitude:20.5937,longitude: 78.9629})
    let lineDataItem = lineSeries.pushDataItem({
      pointsToConnect: [india,paris, toronto, la, havana]
    });
    
    let planeSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    
    let plane = am5.Graphics.new(root, {
      svgPath:
        "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47",
      scale: 0.06,
      centerY: am5.p50,
      centerX: am5.p50,
      fill: am5.color(0x000000)
    });
    
    planeSeries.bullets.push(function() {
      let container = am5.Container.new(root, {});
      container.children.push(plane);
      return am5.Bullet.new(root, { sprite: container });
    });
    
    
    let planeDataItem = planeSeries.pushDataItem({
      lineDataItem: lineDataItem,
      positionOnLine: 0,
      autoRotate: true
    });
    planeDataItem.dataContext = {};
    
    planeDataItem.animate({
      key: "positionOnLine",
      to: 1,
      duration: 10000,
      loops: Infinity,
      easing: am5.ease.yoyo(am5.ease.linear)
    });
    
    planeDataItem.on("positionOnLine", (value) => {
      if (planeDataItem.dataContext.prevPosition < value) {
        plane.set("rotation", 0);
      }
    
      if (planeDataItem.dataContext.prevPosition > value) {
        plane.set("rotation", -180);
      }
      planeDataItem.dataContext.prevPosition = value;
    });
    
    function addCity(coords, title) {
      return pointSeries.pushDataItem({
        latitude: coords.latitude,
        longitude: coords.longitude
      });
    }
    chart.animate({
      key: "rotationX",
      from: 0,
      to: 360,
      duration: 30000,
      loops: Infinity
    });
    // Make stuff animate on load
    chart.appear(1000, 100);
    

 
    
   

    return () => {
      root.dispose();
    };
  }, []);


  return (
    <>

      <div
        id="chartdiv"
        style={{
          width: "100%",
          height: "80%",
          marginTop: "20px",
          }}
      ></div>
    </>
  );
}
