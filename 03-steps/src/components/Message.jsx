
function Message({ step, children }) {
    return (
      <div className="message">
        <h3>Step {step}</h3>
        {children}
      </div>
    );
  }

export default Message