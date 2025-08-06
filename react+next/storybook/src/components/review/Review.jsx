import PropTypes from 'prop-types';
export default function Review({ rating }) {
    if (rating === 0) {
        return <div>No review</div>;
    }

    return (
        <div>{rating} Review</div>
    )
}


Review.propTypes = {
    rating: PropTypes.number
}

