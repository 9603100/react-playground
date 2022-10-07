import useRouter from "./router/useRouter";

function Root() {
  const { push } = useRouter();

  const moveToAbout = () => {
    push("/about");
  };

  return (
    <>
      <h1>root</h1>
      <button onClick={moveToAbout}>about</button>
    </>
  );
}

export default Root;
