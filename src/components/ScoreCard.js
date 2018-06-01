import React from 'react'
// Uncomment whenwe start passing props:
// import PropTypes from 'prop-types'

const ScoreCard = ({data}) => (
    <div className="scorecard-wrapper">
        <div>
            <h1>Name:</h1>
            <p>Score:</p>
        </div>
        <div>
            <h1>bamf burrito</h1>
            <p>wowzers</p>
        </div>
    </div>
)

export default ScoreCard;