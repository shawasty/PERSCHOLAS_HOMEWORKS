

const Bedroom = ({ bedNum }) => {
    return (
        <div className="bedroom" id={`bed-${bedNum}`}>
            <div><h3>Bedroom {bedNum}</h3></div>
        </div>
    );
};

export default Bedroom;