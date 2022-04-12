import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Header from "../../components/UI/Header";
import TodoDetails from "../../components/todos/TodoDetails";
import Layout from "../../components/UI/Layout";
const TaskDetails: NextPage = () => {
  return (
    <>
      <Head>
        <title>Detail Page</title>
        <meta name="keywords" content="todo-list-app-next.js-home-page" />
      </Head>
      <Layout>
        <TodoDetails />
      </Layout>
    </>
  );
};

export default TaskDetails;
