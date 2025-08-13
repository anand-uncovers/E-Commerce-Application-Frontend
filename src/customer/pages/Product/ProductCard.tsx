import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import { Button } from '@mui/material'
import { Favorite, ModeComment } from '@mui/icons-material'
import { teal } from '@mui/material/colors'
const images = [
  "https://assets.ajio.com/medias/sys_master/root/20230822/NVw1/64e47f91ddf77915195f874c/-473Wx593H-465997661-pink-MODEL4.jpg",
  "https://assets.ajio.com/medias/sys_master/root/20230822/AALK/64e47f91ddf77915195f87c5/-473Wx593H-465997661-pink-MODEL.jpg",
  "https://assets.ajio.com/medias/sys_master/root/20230822/cIgI/64e47f91ddf77915195f874d/-473Wx593H-465997661-pink-MODEL3.jpg",
  "https://assets.ajio.com/medias/sys_master/root/20230822/zXg4/64e47f91ddf77915195f874b/-473Wx593H-465997661-pink-MODEL2.jpg",


  "https://assets.ajio.com/medias/sys_master/root/20230822/48XY/64e47f91ddf77915195f874e/-473Wx593H-465997661-pink-MODEL6.jpg",

  "https://assets.ajio.com/medias/sys_master/root/20250526/Ccas/683474d855340d4b4f55f456/-473Wx593H-701620806-orange-MODEL2.jpg",
  "https://assets.ajio.com/medias/sys_master/root/20250526/6BOx/683474d855340d4b4f55f44d/-473Wx593H-701620806-orange-MODEL5.jpg"
]
const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {

    let interval: any
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    }
    else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);

  }, [isHovered])

  return (
    <>
      <div className='group px-4 relative'>
        <div className='card'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {images.map((item, index) => <img
            className='card-media object-top'
            src={item} alt=""
            style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
          />)}
          {isHovered &&
            <div className='indicator flex flex-col items-center space-y-2'>

              <div className='flex gap-3'>
                <Button variant='contained' color='secondary'>
                  <Favorite sx={{ color: teal[500] }} />
                </Button>
                <Button variant='contained' color='secondary'>
                  <ModeComment sx={{ color: teal[500] }} />
                </Button>

              </div>

            </div>
          }
        </div>
        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
          <div className='name'>
            <h1>Koskii</h1>
            <p>Pink Saree</p>

          </div>
          <div className='price flex items-center gap-3'>
            <span className="font-sans text-gray-800">
              ₹ 1500
            </span>
            <span className="thin-line-through text-gray-400">
              ₹ 2000
            </span>
            <span className='text-primary-color font-semibold'>
              60%
            </span>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductCard