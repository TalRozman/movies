import React, { useEffect, useState } from 'react'
import '../movies.css'
import { data } from '../data'
const ListMovies = () => {
        const [editedArray, seteditedArray] = useState<any[]>([])

        const editArray = (arr: any) => {
            const tempArr = Array.from({ length: Math.ceil(arr.length / 3) }, (_, i) =>
                arr.slice(i * 3, i * 3 + 3));
            seteditedArray(tempArr);
        }

    useEffect(() => {
    //     // dispatch(getMoviesAsync()).then(() =>
            editArray(data.results)
        // )
    //     // eslint-disable-next-line
    }, [])


    const carouselItems = document.querySelectorAll('.carousel .carousel-item');

    carouselItems.forEach((carouselItem) => {
        const minPerSlide = 4;
        let next = carouselItem.nextElementSibling;

        if (!next) {
            next = carouselItem?.parentNode!.firstElementChild;
        }

        carouselItem.appendChild(next!.firstElementChild!.cloneNode(true));

        for (let i = 0; i < minPerSlide; i++) {
            next = next!.nextElementSibling;

            if (!next) {
                next = carouselItem!.parentNode!.firstElementChild;
            }

            carouselItem.appendChild(next!.firstElementChild!.cloneNode(true));
        }
    });


    return (
        <div id="myCarousel" className="carousel slide container" data-bs-ride="carousel">
            <div className="carousel-inner w-100">
                {data.results?.map((movie, index:number) => (
                    <div className={`carousel-item ${index === +0 ? 'active' : ''}`} key={index}>
                        <div className="col-md-3">
                            <div className="card card-body">
                            {movie.primaryImage ? <img src={movie.primaryImage?.url} className="card-img-top" alt={movie.primaryImage?.caption.plainText} /> : <h2 className="card-img-top">No Image</h2>}
                            <br/>
                            <h5 className="card-title">{movie.titleText.text}</h5>
                            <p className="card-text">{movie.releaseDate ? movie.releaseDate.year : "No year info"}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default ListMovies