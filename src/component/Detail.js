import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from './Footer';
import Header from './Header';
import parse from 'html-react-parser';
import ReactPlayer from 'react-player/lazy'
import "../assets/css/style.css";

export default function Detail() {
  const params = useParams();
  const [detailElement, setDetailElement] = useState();
  console.log('des', detailElement)

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data: response } = await axios.get(`${process.env.REACT_APP_URL_API}/getDetail/${params.id_element}/${params.id_area}/${params.id_type}`);
        setDetailElement(response.data);
        console.log("DataDetail", response.data);
      } catch (error) {
        console.error(error)
      }
    };
    getDetail();
  }, [params.id_element, params.id_area, params.id_type]);


  return <>
    <Header />
    <div className="imageBudaya2"></div>
    <div className="container-fluid my-4">
      <div className="card shadow border-0 rounded">
        {detailElement ? <>
          <div className="card-body">
            <Link className="btn btn-sm btn-warning" to={`/unsur/${params.id_element}/${params.id_area}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>{' '}
              Kembali
            </Link>
            <h1 className="fw-bolder">{detailElement.type.name_type}</h1>
            <p className="h6">Lokasi: {detailElement.area.name_area}</p>
            <p className="h6">Unsur: {detailElement.element.name_element}</p>
            <p className="h6">By: {detailElement.source}</p>
            <div className="mt-5">
              {parse(detailElement.description)}
            </div>
            <div className="d-flex justify-content-center my-5 ">
              <img src={detailElement.image} alt="detail" />
            </div>
            <div className="d-flex justify-content-center my-5">
              <ReactPlayer url={detailElement.video} />
            </div>
          </div>
        </> : <div className="card-body">
          <h1 className="card-title">Loading...</h1>
        </div>}
      </div>
    </div>
    <Footer />
  </>;
}
