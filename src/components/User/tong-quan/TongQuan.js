import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './TongQuan.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TongQuan () {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    fetch('https://hhq.somee.com/api/Home')
    .then(res => res.json())
    .then((data) => {
      getSlide(data)
    })
  }, [])

  function getSlide(data) {
    setSlide(data.data.slides.map((sl, index) => {
      return (
        <div key={index} className={classes.slider}>
          <img src={sl.imageUrl} alt={sl.name} />
        </div>
      )
    }))
  }

  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false}>
        {slide}
      </Carousel>
    </div>
  )
}

export default TongQuan