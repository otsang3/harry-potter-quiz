import React from 'react';
import PropTypes from 'prop-types'

function Result(props) {

    let image = "";

    switch (props.quizResult) {
        case "Slytherin":
            image = "Slytherin.jpeg";
            break;
        case "Gryffindor":
            image = "Gryffindor.jpg";
            break;
        case "Hufflepuff":
            image = "Hufflepuff.jpg";
            break;
        case "Ravenclaw":
            image = "Ravenclaw.jpg";
            break;
    }

    console.log(image);

    return(
        <div className="result">
            <p>You would be an excellent fit at <strong>{props.quizResult}</strong>!</p>
            <img src={require('../images/' + image)} width="100" height="100"/>
        </div>
    )
}


Result.propTypes = {
    quizResult: PropTypes.string.isRequired
}

export default Result;