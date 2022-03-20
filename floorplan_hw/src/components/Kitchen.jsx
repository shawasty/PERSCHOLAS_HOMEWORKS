import Oven from "./Oven";
import Sink from "./Sink";


const Kitchen = () => {
    return (
        <div className="kitchen">
            <div className="kitchOvenSink">
                <Oven/>
                <Sink/>
            </div>
            <div>
                <h3>kitchen</h3>
            </div>
        </div>
    );
};

export default Kitchen;