import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import TodoItem from "../components/todos/TodoItem";
import { createContext, useState } from "react";
import BoxTarget from "../components/todos/BoxTarget";
import StatusListColumn from "../components/todos/StatusListColumn";

export const CardContext = createContext({
  changeTaskStatusHandler: (id: string, targetStatus: string) => {},
});

const Home: NextPage = () => {
  const [tasksList, setTasksList] = useState([
    {
      id: "0",
      status: "todo",
      title: "Buy",
    },
    {
      id: "1",
      status: "todo",
      title: "Buy",
    },
    {
      id: "2",
      status: "done",
      title: "Buy",
    },
  ]);

  const changeTaskStatusHandler = (id: string, targetStatus: string) => {
    const draggedTask = tasksList.filter((task, i) => task.id === id)[0];
    draggedTask.status = targetStatus;
    setTasksList(
      tasksList.filter((task) => task.id !== id).concat(draggedTask)
    );
  };

  return (
      <CardContext.Provider value={{ changeTaskStatusHandler }}>
        <div className={styles.container}>
          <Head>
            <title>Home Page</title>
            <meta name="keywords" content="todo-list-app-next.js-home-page" />
          </Head>
          <Header />
          <div className={styles.listsContainer}>
            {/* To Do List */}
            <StatusListColumn
              statusType="todo"
              description="Things that need to be done."
            >
              {tasksList
                .filter((task) => task.status === "todo")
                .map((task) => (
                  <TodoItem
                    key={task.id}
                    _id={task.id}
                    status={task.status}
                    title={task.title}
                  />
                ))}
            </StatusListColumn>
            {/* Doing List */}
            <StatusListColumn
              statusType="doing"
              description="What you're doing."
            >
              {tasksList
                .filter((task) => task.status === "doing")
                .map((task) => (
                  <TodoItem
                    key={task.id}
                    _id={task.id}
                    status={task.status}
                    title={task.title}
                  />
                ))}
            </StatusListColumn>
            {/* Done List */}
            <StatusListColumn statusType="done" description="Already done.">
              {tasksList
                .filter((task) => task.status === "done")
                .map((task) => (
                  <TodoItem
                    key={task.id}
                    _id={task.id}
                    status={task.status}
                    title={task.title}
                  />
                ))}
            </StatusListColumn>
            {/* Archive List */}
            <StatusListColumn
              statusType="archive"
              description="Not important but need to write down."
            >
              {tasksList
                .filter((task) => task.status === "archive")
                .map((task) => (
                  <TodoItem
                    key={task.id}
                    _id={task.id}
                    status={task.status}
                    title={task.title}
                  />
                ))}
            </StatusListColumn>
          </div>
        </div>
      </CardContext.Provider>
  );
};

export default Home;
