import { useState } from "react";
import { useDrag } from "react-dnd";
import styles from "./TodoItem.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Modal, Popper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CustomModal from "../UI/CustomModal";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Link from "next/link";

export interface TodoItemProps {
  _id: string;
  title: string;
  status: string;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { _id, title, status } = props;
  const [actionsIsVisible, setActionsIsVisible] = useState(false);
  const [{ isDragging }, todoDraggableRef] = useDrag({
    type: "card",
    item: () => {
      return { _id, title, status };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const [openModal, setOpenModal] = useState(false);

  const editTaskHandler = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <ClickAwayListener onClickAway={() => setActionsIsVisible(false)}>
      <div className={styles.taskItem} ref={todoDraggableRef}>
        <Link href="/todos/[todoId]" as={"/todos/" + _id} passHref>
          <p>{"Something I have to do but I don't have time to do."}</p>
        </Link>
        <button
          onClick={() =>
            setActionsIsVisible((actionsIsVisible) => !actionsIsVisible)
          }
        >
          <MoreVertIcon />
        </button>

        <Popper
          open={actionsIsVisible}
          className={styles.popper}
          disablePortal={true}
        >
          <div className={styles.actions}>
            <Button variant="text" endIcon={<DeleteIcon />}>
              Delete
            </Button>

            <Button
              onClick={editTaskHandler}
              variant="text"
              endIcon={<ModeEditIcon />}
            >
              Edit
            </Button>
            <CustomModal open={openModal} onClose={handleClose} action="EDIT" />
          </div>
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

export default TodoItem;
