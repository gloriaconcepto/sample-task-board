import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import SignalCellularAltTwoToneIcon from "@mui/icons-material/SignalCellularAltTwoTone";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import AlarmTwoToneIcon from "@mui/icons-material/AlarmTwoTone";
import RestoreTwoToneIcon from "@mui/icons-material/RestoreTwoTone";
import BrightnessHighTwoToneIcon from "@mui/icons-material/BrightnessHighTwoTone";
export const sidebarMenus = [
    { id: 1, name: "Dashboard", icon: <DashboardTwoToneIcon sx={{ fontSize: 20 }} /> },
    {
        id: 2,
        name: "Analytics",
        icon: <SignalCellularAltTwoToneIcon sx={{ fontSize: 20 }} />,
    },
    { id: 3, name: "Projects", icon: <EmailTwoToneIcon sx={{ fontSize: 20 }} /> },
    { id: 4, name: "Tracking", icon: <AlarmTwoToneIcon sx={{ fontSize: 20 }} /> },
    { id: 5, name: "History", icon: <RestoreTwoToneIcon sx={{ fontSize: 20 }} /> },
    { id: 6, name: "Settings", icon: <BrightnessHighTwoToneIcon sx={{ fontSize: 20 }} /> },
];
