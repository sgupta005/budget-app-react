function Button({ children, styles = '', onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles} rounded-[4px] px-4 py-1 h-10 text-xl`}
    >
      {children}
    </button>
  );
}

export default Button;
