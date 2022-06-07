import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Post from '@/components/post/Post';

const SwiperWrapper = ({data}) => {
    const chunkSize = 3;
    const chunksData = [];

    for (let i = 0; i < data.length; i += chunkSize) {
        chunksData.push(data.slice(i, i + chunkSize));
    }

    return (
        <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
        >
            {chunksData.map((chunkData) => {
                return <SwiperSlide key={Math.random()}>
                    <div>
                        {chunkData.map((item) => {
                            return <Post key={item.id} {...item}/>
                        })}
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    );
};

export default SwiperWrapper;