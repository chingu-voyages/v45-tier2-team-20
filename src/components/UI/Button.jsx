export const Button = ({ text, ...attrs }) => {
  return (
    <div>
      <button {...attrs}>{text}</button>
    </div>
  );
};
