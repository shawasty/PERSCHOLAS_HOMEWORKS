

const Bath = ({ size }) => {
    return (
        <div className="bath" id={`bath-${size}`}>
            <div><h3>{size} Bath</h3></div>
        </div>
    );
};

export default Bath;