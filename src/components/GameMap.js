import ReactMapboxGl, { Layer, Feature, MapContext, Marker } from "react-mapbox-gl";
import React from 'react';
import '../styles/mapbox-gl.css';
import '../bootstrap.css';

export default (props) => {
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1Ijoicm9taXRrYXJtYWthciIsImEiOiJjandnZDB3OGwxczV4NDBtZ2l0YTJ5aGVsIn0.w0b86s6XC_CFVG726Zwjrw"
    });
    return <div className="card">
        <Map
            style='mapbox://styles/mapbox/light-v10'
            containerStyle={{
                height: "60vh",
            }}
            center={[-67.13734351262877, 45.137451890638886]}
            zoom={[0]}>
          {/*<Marker coordinates={[-67.13734351262877, 45.137451890638886]}>
          <h2>{props.positions[0]}</h2>
          </Marker>*/}
            <MapContext.Consumer>
                {(map) => {
                    map.addLayer({
                        'id': 'maine',
                        'type': 'fill',
                        'source': {
                        'type': 'geojson',
                        'data': {
                        'type': 'Feature',
                        'geometry': {
                        'type': 'Polygon',
                        'coordinates': [props.positions]
                        }
                        }
                        },
                        'layout': {},
                        'paint': {
                        'fill-color': '#088',
                        'fill-opacity': 0.8
                        }
                        });
                      }}
            </MapContext.Consumer>
        </Map>
    </div>
}
