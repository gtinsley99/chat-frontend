import "./ChatRoom.css";
import AllUsers from "./allUsers/AllUsers";
import Searchbar from "./search/Search";

const ChatRoom = () => {
    return(
        <div className="chatRoom">
            <div className="left">
                <Searchbar />
                <AllUsers />
            </div>
            <div className="right"> <h2>chat room here</h2></div>
        </div>
    );
};

export default ChatRoom;