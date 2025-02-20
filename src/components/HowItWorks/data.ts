import { FaComments } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";

import { IconType } from "react-icons/lib";
type DataProps = {
  id: number;
  title: string;
  desc: string;
  icon: IconType;
};

export const howItWorkData: DataProps[] = [
  { id: 1, title: "Step 1", desc: "Answer a few question", icon: FaComments },
  { id: 2, title: "Step 2", desc: "Upload your documents", icon: FaFileUpload },
  {
    id: 3,
    title: "Step 3",
    desc: "Get AI-powered results & expert consultation",
    icon: FaRobot,
  },
];
