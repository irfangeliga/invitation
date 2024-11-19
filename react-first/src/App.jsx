// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeadTitle from './SubTitle.jsx'
// import './App.css'

export default function App() {
  const num = 3;
  return (
    <>
    {Carousel()}
    <HeadTitle title="Service" align="center" size="1" />
    {Container()}
    </>
  );
}

function Carousel(){
  return(
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {CarouselImage("mobil-hitam","active")}
        {CarouselImage("mobil-silver")}
        {CarouselImage("mobil-mainan")}
      </div>
    </div>
  )
}

function CarouselImage(name,active=""){
  return(
    <div className={"carousel-item "+active}>
      <div style={{ top:'30vh', left:'5vw', position:'absolute',color:'white' }}>
        <h1 style={{ fontSize:'80px' }}>ELEKTRONIC CAR</h1>
        <p style={{ color:'orange',fontSize:'30px' }}>Wherever you are, whenever you need</p>
      </div>
      <img src={"./src/assets/img/"+name+".jpg"} style={{ width:'auto',height:'100vh'}} className="d-block w-100" alt="..."/>
    </div>
  )
}

function Card(title,text="",link="",link_text="",img=""){
  return(
    <div className="card bg-success text-white shadow border" style={{width: '18rem',height:'100%'}}>
      {(img != "") && img}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {(text != "")}<p className="card-text">{text}</p>
        {(link != "" && link_text != "") &&  <a href={link} className='btn btn-primary'>{link_text}</a> }
      </div>
    </div>
  )
}

function Container(){
  
  const card =[
    {
      title : 'kecepatan',
      desk  : 'kami melayani dengan sistem yang terintegrasi sehingga pengerjaan restorasi dapat dilakukan dengan cepat'
    },
    {
       title : 'terjangkau',
       desk  : 'kami memberi harga yang dapat mengehmat jkantong anda'
    },
    {
      title : 'hasil mulus',
      desk  : 'kami memberikan hasil yang mulus pada mobil anda'
    },
    {
      title : 'bertanggung jawab',
      desk  : 'jika terdapat dari pengerjaan kami, jangan sungkan untuk melakukan komplain'
    }
  ];
  return(
    <div className='container'>
      <div className='row'>
        {
          card.map((item, index) => {
            return(
              <div className='col-md-3 mb-3' key={index}>
                {Card(item.title,item.desk)}    
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

