import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import axios from 'axios';
import budaya from '../image/budaya.jpg';

export default function Map() {
  const [dataDaerah, setDataDaerah] = useState([]);
  const [dataUnsur, setDataUnsur] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    const GetDaerah = async () => {
      try {
        const { data: response } = await axios.get(`${process.env.REACT_APP_URL_API}/getDaerah`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN_API}`
          }
        });
        setDataDaerah(response.data);
        // console.log("dataDaerah", response.data);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    const GetUnsur = async () => {
      try {
        const { data: response } = await axios.get(`${process.env.REACT_APP_URL_API}/getUnsur`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN_API}`
          }
        });
        setDataUnsur(response.data);
        // console.log("dataUnsur", response.data);

      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    GetDaerah();
    GetUnsur();
  }, []);
  return <>
    {loading && <div>Loading...</div>}
    {!loading && (
      <MapContainer center={[-6.914744, 107.609810]} zoom={9} scrollWheelZoom={false} className="markercluster-map" style={{ marginTop: 90 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {dataDaerah.map((daerah) => (
            <Marker key={daerah.id} position={[daerah.latitude, daerah.longitude]}>
              <Popup>
                <h4 className="text-center">8 Unsur Budaya</h4>
                <img src={budaya} alt="Unsur Budaya" width="100%" height="100%" className="mb-2 rounded" />
                <h6 className="text-center fw-bolder text-underline">{daerah.name_area}</h6>
                {dataUnsur.map((unsur) => (
                  <div key={unsur.id}>
                    {unsur.id}. <Link to={`/unsur/${unsur.id}/${daerah.id}`}>{unsur.name_element}</Link>
                  </div>
                ))}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>;
      </MapContainer>
    )
    }
  </>;
}
