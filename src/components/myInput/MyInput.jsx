function MyInput({ name, type, placeholder, label }) {
  return (
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{placeholder}</p>
      <p>{label}</p>
    </div>
  );
}
export default MyInput;
