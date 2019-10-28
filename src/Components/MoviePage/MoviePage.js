import React from 'react';
import './MoviePage.css'

const MoviePage = ({}) => {


    return (
        <div className="moviePage__div">
            {/* image - movie background */}
            <div className="movie--poster--details__div">
                {/* image - movie pster */}
                <div className="movie__details">
                    <div className="movie--title--year">
                        <h3 className="movie--title">Movie Title</h3>
                        <p className="movie--year">Movie Year</p>
                    </div>
                    
                </div>
            </div>
        </div>
    ) 
}