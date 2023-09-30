import { useContext, useEffect } from 'react'
import walgenContext from "../../context/walgenContext"
import { NavLink } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const YourWallpapers = () => {
    const { wallpapers, fetchAllWallpapers } = useContext(walgenContext)
    
    const saveBlob = (function(url, filename) {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        return function saveData(blob, fileName) {
            a.href = url;
            a.download = true;
            a.click();
        };
    }());

    useEffect(() => {
      if (localStorage.getItem('login')=== 'true'){ 
          fetchAllWallpapers(localStorage.getItem('id'))
      } 
    }, [])
    return(
        <>
            <div className="flex-between ">
                <h2 className="text-center my-2">
                    Your Creations
                </h2>
            </div>
            <div className="grid place-content-center h-full p-5">
            { wallpapers.length !== 0 ?  
            <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        loop={true}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="h w-[80%] " >
                    {
                        wallpapers.map(wallpaper => {
                            return (
                                <SwiperSlide key={wallpaper.id} >
                                    <NavLink to={wallpaper.image_64} target="_blank">
                                        <img src={wallpaper.image_64} alt="slider image" />
                                    </NavLink>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            : 
                <div className="shadow-xl text-4xl font-semibold text-gray-400 p-10 rounded-xl italic cursor-none">
                        Oops, no wallpapers created!
                </div>
            }
            </div>
        </>
    )
}

export default YourWallpapers;
