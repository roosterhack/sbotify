export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="flex items-center space-x-2 hover:text-white">
      {children}
    </button>
  );
};
