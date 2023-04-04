import Dashboard from "./Dashboard";
import Wallet from "./Wallet";
import Profile from "./Profile";
import Team from "./Team";

const EarnMain = ({selected}) => {
    return ( 
        <>
            {selected === 1 && <Dashboard />}
            {selected === 2 && <Team />}
            {selected === 3 && <Profile />}
            {selected === 4 && <Wallet />}
        </>
     );
}
 
export default EarnMain;