const LinkHover = ({ children }: { children: React.ReactNode }) => {
  return <a className="hover:text-gray-500">{children}</a>;
};

export default LinkHover;
