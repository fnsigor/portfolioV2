import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import styled from 'styled-components';
import React from 'react';
import splidecss from '@splidejs/react-splide/css/skyblue';
import next from '../../assets/nextArrow.svg'
import previous from '../../assets/previousArrow.svg'





const Wrapper = styled.div`
    justify-content: center;
    display: flex;
    gap: 4rem;
`

const Content = styled.div`

    ${splidecss}

    img{
        height:40rem;
        width: 80rem; 
        object-fit: cover;
      
    }

    .splide__arrows img{
      height: 5rem;
      width: 5rem;   
    }

`


export function SectionProjects({ pinnedItems }) {


    return (
        <section>
            <h4 className="subtitle glow">Projetos recentes</h4>
            <Content>
                <Splide style={{ border: '2px solid red' }}
                    hasTrack={false}
                    options={{
                        type: 'loop', //slide, loop, fade
                        // padding: { y: 10 }, //css values
                        gap: '800px', //1 rem default
                        // rewind: true,
                        speed: 500, //transition in milliseconds
                        // fixedWidth: '10vw',
                        // width: '100vw',
                        perPage: 3,
                        start: 3,
                        perMove: 1,
                        autoplay: true,
                        interval: 5000,
                        arrows: true,
                        pagination: false,
                        pauseOnHover: true,
                        wheel: true,
                    }}
                >

                    <SplideTrack>

                        <SplideSlide>
                            <img src="https://source.unsplash.com/featured/800x500" alt="" />
                        </SplideSlide>

                        <SplideSlide>
                            <img src="https://source.unsplash.com/featured/800x501" alt="" />
                        </SplideSlide>

                        <SplideSlide>
                            <img src="https://source.unsplash.com/featured/800x502" alt="" />
                        </SplideSlide>
                    </SplideTrack>

                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">
                            <img src={previous} alt="" />
                        </button>
                        <button className="splide__arrow splide__arrow--next">
                            <img src={next} alt="" />
                        </button>
                    </div>


                </Splide>

            </Content>
        </section>
    )
}