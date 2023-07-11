
import { Cartesian3, Color } from "cesium";
import "./app.css";
import { Viewer, Entity, CameraFlyTo, Primitive } from "resium";

  import {
      EllipseGeometry,
     EllipsoidSurfaceAppearance,
     GeometryInstance,
      Material,
     Math as CesiumMath,
     VertexFormat,
    } from "cesium";

export default function App() {
  const geometry = new GeometryInstance({
      geometry: new EllipseGeometry({
        center: Cartesian3.fromDegrees(-100.0, 20.0),
        semiMinorAxis: 500000.0,
        semiMajorAxis: 1000000.0,
        rotation: CesiumMath.PI_OVER_FOUR,
        vertexFormat: VertexFormat.POSITION_AND_ST,
      }),
      id: "id"
  });
  const appearance = new EllipsoidSurfaceAppearance({
    material: Material.fromType("Checkerboard"),
  });
  return (
    <div>
    <Viewer full>
      <Entity
        name="Tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 10, color: Color.WHITE }}
        description="hoge"
      />
       <CameraFlyTo
        // {...args}
        duration={5}
        destination={Cartesian3.fromDegrees(-100.0, 20.0, 1000)}
        once={true}
      />
       <Entity
        // {...args}
        name="test1"
        position={Cartesian3.fromDegrees(-74, 40, 100)}
        point={{ pixelSize: 15, color: Color.YELLOW }}
        description="Normal Description"
      />
       <Primitive geometryInstances={geometry} appearance={appearance} show={true} />
      
    </Viewer>
    <div className="content">
      <span>1111</span>
    </div>
    </div>
  );
}
