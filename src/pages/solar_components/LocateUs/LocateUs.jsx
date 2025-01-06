import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const LocateUs = () => {
  useEffect(() => {
    // Create root element
    let root = am5.Root.new("chartdiv");

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
        pinchZoomX: true,
        paddingLeft: 0,
      })
    );

    // Add cursor
    let cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    let colorSet = am5.ColorSet.new(root, {});

    // Data for the chart
    let data = [
      //   { date: "2021-12-31 18:00", value: 0 },
      //   { date: "2021-12-31 19:00", value: 0 },
      //   { date: "2021-12-31 20:00", value: 0 },
      { date: "2021-12-31 21:00", value: 0.3 },
      { date: "2021-12-31 22:00", value: 0.8 },
      { date: "2021-12-31 23:00", value: 1.2 },
      { date: "2022-01-01 00:00", value: 2.2 },
      { date: "2022-01-01 01:00", value: 2.5 },
      { date: "2022-01-01 02:00", value: 2.2 },
    ];

    // Create axes
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minorGridEnabled: true,
      minGridDistance: 70,
    });
    xRenderer.grid.template.set("location", 0.5);
    xRenderer.labels.template.setAll({
      location: 0.5,
      multiLocation: 0.5,
    });

    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "hour", count: 1 },
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yRenderer = am5xy.AxisRendererY.new(root, {});
    yRenderer.grid.template.set("forceHidden", true);
    yRenderer.labels.template.set("minPosition", 0.05);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxPrecision: 0,
        extraMin: 0.1,
        renderer: yRenderer,
      })
    );

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        maskBullets: false,
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "vertical",
          dy: -20,
          labelText: "{valueY}",
        }),
      })
    );

    // Process data
    series.data.processor = am5.DataProcessor.new(root, {
      dateFormat: "yyyy-MM-dd HH:mm",
      dateFields: ["date"],
    });

    series.strokes.template.setAll({ strokeDasharray: [3, 3], strokeWidth: 2 });

    let i = -1;
    series.bullets.push(() => {
      i++;
      if (i > 7) i = 0;

      let container = am5.Container.new(root, {
        centerX: am5.p50,
        centerY: am5.p50,
      });

      container.children.push(
        am5.Circle.new(root, { radius: 20, fill: series.get("fill") })
      );

      container.children.push(
        am5.Picture.new(root, {
          centerX: am5.p50,
          centerY: am5.p50,
          width: 23,
          height: 23,
          src: `https://amcharts.com/wp-content/uploads/assets/timeline/timeline${i}.svg`,
        })
      );

      return am5.Bullet.new(root, { sprite: container });
    });

    series.data.setAll(data);
    series.appear(1000);

    chart.appear(1000, 100);

    return () => {
      root.dispose(); // Clean up chart instance on component unmount
    };
  }, []);

  return (
    <>
      <div className="relative w-88 h-32 md:bg-gradient-to-b from-black to-white mb-10"></div>
      <div
        id="chartdiv"
        className="h-40"
        style={{ width: "100%", height: "500px" }}
      />
    </>
  );
};

export default LocateUs;
