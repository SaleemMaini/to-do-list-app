import Modal from "@mui/material/Modal";
import styles from "./CustomModal.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Button } from "@mui/material";

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  action: string;
}

const CustomModal: React.FC<CustomModalProps> = (props) => {
  return (
    <Modal open={props.open} onClose={props.onClose} className={styles.modal}>
      <div className={styles.modalCard}>
        <h3>
          {props.action === "ADD"
            ? "Add a New Task"
            : props.action === "EDIT"
            ? "Edit Task"
            : null}
        </h3>
        <OutlinedInput placeholder="Title" />
        <OutlinedInput placeholder="Subject" multiline rows={4} />
        <Button variant="contained">Add</Button>
      </div>
    </Modal>
  );
};

export default CustomModal;
