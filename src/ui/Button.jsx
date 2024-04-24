function Button({ children, styles = '' }) {
  return (
    <button className={`${styles} rounded-[4px] px-4 py-1 h-10 text-xl`}>
      {children}
    </button>
  );
}

export default Button;
