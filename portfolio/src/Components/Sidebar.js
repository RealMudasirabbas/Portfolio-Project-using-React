import Links from "./Links";
import "./Sidebar";
import ToggleButton from "./ToggleButton";

 function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="bg">
        <Links/>
        </div>
        <ToggleButton/>
    </div>
  )
}
export default Sidebar;