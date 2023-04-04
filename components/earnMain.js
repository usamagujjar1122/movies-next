import Dashboard from "./Dashboard";
import Team from "./Team";

const EarnMain = ({selected}) => {
    return ( 
        <>
            {selected === 1 && <Dashboard />}
            {selected === 2 && <Team />}
        </>
     );
}
 
export default EarnMain;