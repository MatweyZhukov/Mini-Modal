const Button = ({ onClick, className, title, type, width, height }) => {
  return (
    <button
      style={{ width, height }}
      type={type}
      className={className}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
