import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from './Footer';
import Navbar from './Dashboard/Navbar'
import parse from 'html-react-parser';
import ReactPlayer from 'react-player/lazy'
import AudioPlayer from 'react-h5-audio-player';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import 'react-h5-audio-player/lib/styles.css';
import "../assets/css/style.css";
import { Tab, Tabs } from 'react-bootstrap';

export default function Detail() {
  const params = useParams();
  const [detailElement, setDetailElement] = useState();
  // console.log('des', detailElement)

  useEffect(() => {
    const getDetail = async () => {
      try {
        const { data: response } = await axios.get(`${process.env.REACT_APP_URL_API}/getDetail/${params.id_element}/${params.id_area}/${params.id_type}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_TOKEN_API}`
          }
        });
        setDetailElement(response.data);
        // console.log("DataDetail", response.data);
      } catch (error) {
        console.error(error)
      }

    };
    getDetail();
  }, [params.id_element, params.id_area, params.id_type]);


  return <>
    <Navbar />
    {/* <div className="imageBudaya2"></div> */}
    <div className="container">
      <div className="card shadow-lg border-0 rounded-3 py-3 px-4" style={{ marginTop: 120 }}>
        {detailElement ? <>
          <div className="card-body">
            
            <ul class="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/">{detailElement.area.name_area}</a></li>
                <li><a href={`/unsur/${params.id_element}/${params.id_area}`}> {detailElement.element.name_element}</a></li>
                <li>{detailElement.type.name_type}</li>
            </ul>
            <div className="row d-flex justify-content-center">
              <div className="col-12 text-center mt-3">
                <img src={detailElement.type.image} alt={detailElement.type.name_type} width='600px' height='auto' className='rounded-3' />
              </div>
              <div className="col-12 mt-3">
                <h1 className="fw-bolder text-uppercase mb-3">{detailElement.type.name_type}</h1>
                <p className="fs-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-alt-fill text-primary" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span className='ms-2 fw-bolder'>{detailElement.area.name_area}</span>
                </p>
                <p className="fs-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-geo-fill text-primary" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                  </svg>
                  <span className='ms-2 fw-bolder'>{detailElement.element.name_element}</span>
                </p>
                <p className="fs-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-fill text-primary" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  <span className='ms-2 fw-bolder'>{detailElement.source}</span>
                </p>
              </div>
            </div>

            <div className="mt-2">
              {parse(detailElement.description)}
            </div>

            <h3>Data Media</h3>

            <Tabs
              defaultActiveKey="image"
              id="noanim-tab-example"
              className="mb-3 mt-3"
            >
              <Tab eventKey="image" title="Image">
                <div className="row">
                  {detailElement.detail_images &&
                    detailElement.detail_images.map((image) => {
                      return (
                        <div className="col-md-4 mb-3" key={image.id}>
                          <Zoom>
                            <img
                              alt={detailElement.type.name_type}
                              src={image.path_image}
                              width="100%"
                              height="auto"
                            />
                          </Zoom>
                        </div>
                      );
                    })}
                </div>
              </Tab>
              <Tab eventKey="video" title="Video">
                <div className="row">
                  {detailElement.detail_videos &&
                    detailElement.detail_videos.map((video) => {
                      return (
                        <div className="col-md-6 mb-3" key={video.id}>
                          <ReactPlayer url={video.path_video} width='100%'
                            height='200px' />
                        </div>
                      );
                    })}
                </div>
              </Tab>
              <Tab eventKey="Audio" title="Audio">
                <div className="row">
                  {detailElement.detail_audios &&
                    detailElement.detail_audios.map((audio) => {
                      return (
                        <div className="col-md-4" key={audio.id}>
                          <AudioPlayer
                            src={audio.path_audio}
                            header={audio.name_audio}
                          />
                        </div>
                      );
                    })}
                </div>
              </Tab>
            </Tabs>
          </div>
        </> : <div className="card-body">
          <h1 className="card-title">Data Tidak Ditemukan.</h1>
        </div>}
      </div>
    </div>
    <Footer />
  </>;
}
