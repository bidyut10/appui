export const Box = ({ children }) => {
  return (
    <div
      className="h-[450px] flex flex-1 justify-center items-center border border-neutral-100"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #f5f5f5 0, #f5f5f5 1px, transparent 0, transparent 50%)",
        backgroundSize: "12px 12px",
      }}
    >
      {children}
    </div>
  );
};