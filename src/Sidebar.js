import {
  FaAddressBook,
  FaAngry,
  FaFacebook,
  FaFire,
  FaPoo,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SidebarIcon icon={<FaFire size="28" />} />
      <SidebarIcon icon={<FaPoo size="25" />} />
      <SidebarIcon icon={<FaFacebook size="32" />} />
      <SidebarIcon icon={<FaAddressBook size="28" />} />
      <SidebarIcon icon={<FaAngry size="28" />} />
    </div>
  );
};

const SidebarIcon = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Sidebar;
