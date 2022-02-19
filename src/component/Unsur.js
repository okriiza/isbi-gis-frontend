import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import "../assets/css/style.css";
// import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CardItem from './CardItem';
import axios from "axios";
// import ImageBudaya from '../image/budaya_9.jpg';

export default function Unsur() {
  const params = useParams();
  const [element, setElement] = useState();
  const [area, setArea] = useState();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const GetDetail = async () => {
      try {
        const { data: response } = await axios.get(`${process.env.REACT_APP_URL_API}/getJenisById/${params.id_element}/${params.id_area}`);
        setTypes(response.data);
        setElement(response.data[0].element.name_element);
        setArea(response.data[0].area.name_area);
        // console.log("dataDetail", response.data);
      } catch (error) {
        console.error(error)
      }
    };
    GetDetail();
  }, [params.id_element, params.id_area]);


  return <>
    <Header />
    {/* <div className="imageBudaya"></div> */}
    <div className="cards" style={{ marginTop: 70 }}>
      <div className="text-center">
        <h1 className='text-uppercase fw-bolder'>{element}</h1>
        <p>{area}</p>
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {types &&
              types.map((jenis) => {
                return (
                  <div key={jenis.id}>
                    <CardItem
                      src={jenis.image}
                      text={jenis.name_type}
                      label={jenis.element.name_element}
                      alt={jenis.name_type}
                      path={`/detail/${params.id_element}/${params.id_area}/${jenis.id}`}
                    />
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </>;
}
