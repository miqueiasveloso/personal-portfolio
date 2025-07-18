export function Button({ children, className, variant = 'default', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
