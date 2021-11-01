import React from 'react';

const Reviews = () => {
    return (
        <div>
            <h2>Our Customer Reviews</h2>
            <div className="row mx-5 g-5">
                <div className="col-md-4">
                    <div class="card">
                        <img className="card-img-top" src="https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Best travel website I have used so far! -Joana </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img className="card-img-top" src="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">I would highly recommed. -Marie</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img className="card-img-top" src="https://st2.depositphotos.com/4157265/8580/i/600/depositphotos_85800420-stock-photo-everything-is-awesome.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">I have used this service for many years and am very satisfied with it. -Greta </p>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
    );
};

export default Reviews;