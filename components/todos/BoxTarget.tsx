import { ReactNode, useContext } from "react";
import { useDrop } from "react-dnd";
import { CardContext } from "../../pages";

export interface BoxTargetProps {
  children: ReactNode;
  statusType: string;
}

interface ITEM {
  type: string;
  _id: string;
}

const BoxTarget: React.FC<BoxTargetProps> = (props) => {
  const { children, statusType } = props;
  const { changeTaskStatusHandler } = useContext(CardContext);
  const [{ isOver }, dropTarget] = useDrop({
    accept: "card",
    drop: (item: ITEM, monitor) =>
      changeTaskStatusHandler(item._id, statusType),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={dropTarget} style={{}}>
      {children}
    </div>
  );
};

export default BoxTarget;
