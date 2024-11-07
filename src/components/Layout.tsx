interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-flow-row place-items-center h-full flex-1">
      <section className="landscape:hidden landscape:lg:block mb-12 text-center text-3xl md:text-5xl">
        <h1>Tic Tac Toe</h1>
      </section>
      {children}
    </div>
  );
};
