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
    </div>
)

export default ScoreCard;

