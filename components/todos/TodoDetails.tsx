import styles from "./TodoDetails.module.css";
import Link from "next/link";
interface TodoDetailsProps {}

const TodoDetails: React.FC<TodoDetailsProps> = () => {
  return (
    <div className={styles.container}>
      <h2>Task Details</h2>
      <div className={styles.taskDetailsBox}>
        <h5>Name</h5>
        <p>ssss</p>
        <h5>Subject</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          quaerat ipsa repudiandae doloremque nostrum similique vero, culpa ea
          ipsum temporibus, voluptate expedita placeat aperiam maiores alias
          vitae adipisci hic id?
        </p>
        <h5>Status</h5>
        <span></span>
        <p>Todo</p>
      </div>
      <Link href="/">back</Link>
    </div>
  );
};

export default TodoDetails;
