import { IconType } from "react-icons";
import CustomIcon from "./CustomIcon";
import Caption from "./texts/Caption";

interface Props {
    Icon: IconType;
    caption: string;
    className?: string;
  }
  const IconCaption = ({ Icon, caption, className }: Props) => {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <CustomIcon className="" Icon={Icon} />
        <Caption className="">{caption}</Caption>
      </div>
    );
  };

  export default IconCaption