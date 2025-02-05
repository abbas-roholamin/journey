async function Tasks() {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return <div>Tasks</div>;
}

export default Tasks;
