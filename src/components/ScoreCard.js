import React from 'react'
// Uncomment whenwe start passing props:
// import PropTypes from 'prop-types'

const ScoreCard = ({ scores }) => (
    <div className="scorecard-wrapper">
        <div className="scorecard-ranking">
            <h2 className="scorecard-ranking-number">1</h2>
            <p className="scorecard-ranking-name">Wilbur Mexicana</p>
            <p className="scorecard-ranking-subheader">A place for friends, great vibes</p>
        </div>
        <div className="scorecard-content-container">
            <div className="scorecard-content-left">
                <ol>
                    <li>Crispy</li>
                    <li>Crunchy</li>
                    <li>Cheetoes</li>
                </ol>
            </div>
            <div className="scorecard-content-right">
                <p><span className="scorecard-content-score">5</span>/5</p>
            </div>
        </div>
    </div>
)

export default ScoreCard;

