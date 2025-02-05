async function Review() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>Review</div>;
}

export default Review;
