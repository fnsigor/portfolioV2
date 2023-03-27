import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import colors from '../../globalStyle';
import './style.css'
import { BsFillArrowLeftCircleFill as PreviousArrow } from "react-icons/bs";
import { BsFillArrowRightCircleFill as NextArrow } from "react-icons/bs";
import { HiDotsCircleHorizontal as Dots } from "react-icons/hi";



export function Carousel({ pinnedItems }) {



	let carouselArray = useRef([])




	const updateGallery = () => {


		carouselArray.current.forEach(el => {
			// const el = item.current
			el.classList.remove('gallery-item-1')
			el.classList.remove('gallery-item-2')
			el.classList.remove('gallery-item-3')
			el.classList.remove('gallery-item-4')

		})

		carouselArray.current.slice(0, 4).forEach((el, i) => {
			el.classList.add(`gallery-item-${i + 1}`)
		});
	}

	const setCurrentState = (direction) => {

		if (direction === 'previous') {
			carouselArray.current.unshift(carouselArray.current.pop())
		} else {
			carouselArray.current.push(carouselArray.current.shift());
		}

		updateGallery()
	}



	return (
		<ThemeProvider theme={colors}>
			<div className="carouselContainer">

				<div className='gallery-container' >

					{
						pinnedItems.map((item, index) => (


							<div
								className={`gallery-item gallery-item-${index + 1}`}
								ref={(item) => { carouselArray.current.push(item) }}
								key={item.openGraphImageUrl}
							>

								<img

									src={item.openGraphImageUrl}
									alt={item.description}
									className={`gallery-item gallery-item-${index + 1}`}

								/>
								<div className="content">
									<p className="aboutProject">
										{item.description}
									</p>
									<div className="links">
										<a href="">Acessar projeto</a>
										<a href="">Repositório</a>
									</div>
								</div>



							</div>


						))
					}

					<div verMais="verMais"
						className="gallery-item gallery-item-4"
						ref={(item) => { carouselArray.current.push(item) }}
						data-index="4"
					>
						<Link to={'/projects'}>
							<Dots />
							Ver mais
						</Link>
					</div>
				</div>


				<button
					className="gallery-controls-previous"
					onClick={(e) => { setCurrentState('previous') }}>
					<PreviousArrow />
				</button>

				<button
					className="gallery-controls-next"
					onClick={(e) => { setCurrentState('next') }}>
					<NextArrow />
				</button>

			</div>
		</ThemeProvider >

	)

}