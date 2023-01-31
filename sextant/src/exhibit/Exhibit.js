import "./Exhibit.css";

const Exhibit = () => {
    return (
        <div>
            <div className="exhibit">
                <h4>The user's ipv4 address is:</h4>
                <ul>
                    <li>192.168.1.1</li>
                </ul>
            </div>
            <div className="exhibit">
                <h4>The user's ipv6 address is:</h4>
                <ul>
                <li>00-01-00-01-27-42-05-94-DC-1B-A1-FA-A3-ED</li>
                </ul>
            </div>
        </div>
    );
};

export default Exhibit;

