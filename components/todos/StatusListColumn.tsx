import { ReactNode, useState } from "react";
import BoxTarget from "./BoxTarget";
import { Paper } from "@mui/material";
import styles from "./StatusListColumn.module.css";
import Image from "next/image";
import CustomModal from "../UI/CustomModal";

interface StatusListColumnProps {
  children: ReactNode;
  statusType: string;
  description: string;
}

const StatusListColumn: React.FC<StatusListColumnProps> = (props) => {
  const { children, statusType, description } = props;

  const [openModal, setOpenModal] = useState(false);

  const addTaskHandler = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <CustomModal open={openModal} onClose={handleClose} action="ADD" />
      <Paper elevation={3} className={styles.paper}>
        {statusType === "todo" ? (
          <button className={styles.addTaskBtn} onClick={addTaskHandler}>
            <Image
              src="/AddTaskIcon.svg"
              alt="addIcon"
              width="100%"
              height="60%"
            />
          </button>
        ) : null}
        <BoxTarget statusType={statusType}>
          <div className={styles.header}>
            <h3>{statusType}</h3>
            <p>{description}</p>
          </div>
          {children}
        </BoxTarget>
      </Paper>
    </>
  );
};

export default StatusListColumn;
