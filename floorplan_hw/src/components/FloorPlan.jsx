import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import '../styles/FloorPlan.css'


const FloorPlan = () => {
    return (
        
        <div className="main">
            <div className="floorPlan">
                <div className="bed1-bath">
                    <Bedroom bedNum={1} />
                    <Bath size={'Full'} />
                </div>

                
                <div className="floor-livkit">
                    <LivingRoom/>
                    <Kitchen/>
                </div>

                    <Bedroom bedNum={2} />
            
                <div className="floor2-bed3bathhalf">
                    <Bath size={'Half'} />
                    <Bedroom bedNum={3} />
                </div>
            </div>
        </div>
    );
};

export default FloorPlan;