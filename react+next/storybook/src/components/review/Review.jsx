import PropTypes from 'prop-types';
export default function Review({ rating }) {
    if (rating === 0) {
        return <div className='  bg-sky-600  border rounded px-3 py-1.5'>No review</div>;
    }

    return (
        <div className='  bg-sky-600  border rounded px-3 py-1.5'>{rating} Review</div>
    )
}


Review.propTypes = {
    rating: PropTypes.number
}

