import useRouter from "./router/useRouter";

function About() {
  const { push } = useRouter();

  const moveToMain = () => {
    push("/");
  };

  return (
    <>
      <h1>about</h1>
      <button onClick={moveToMain}>go main</button>
    </>
  );
}

export default About;
