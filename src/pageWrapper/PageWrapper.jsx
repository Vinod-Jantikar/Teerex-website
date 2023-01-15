import Header from "../components/header/Header";

const PageWrapper = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageWrapper;
