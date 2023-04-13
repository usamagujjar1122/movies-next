import Dashboard from "./Dashboard";
import Wallet from "./Wallet";
import Profile from "./Profile";
import Team from "./Team";
import Membership from "./Membership";
import Support from "./Support";

const EarnMain = ({selected,setselected}) => {
    return ( 
        <>
            {selected === 1 && <Dashboard setselected={setselected}/>}
            {selected === 2 && <Team setselected={setselected} />}
            {selected === 3 && <Wallet setselected={setselected} />}
            {selected === 4 && <Membership setselected={setselected} />}
            {selected === 5 && <Support setselected={setselected} />}
            {selected === 6 && <Profile setselected={setselected} />}

        </>
     );
}
 
export default EarnMain;