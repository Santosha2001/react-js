function Random() {
  let random = Math.random() * 100;

  return (
    <h2 style={{ "background-color": "red" }}>
      The random number: {Math.round(random)}{" "}
    </h2>
  );
}
export default Random;
