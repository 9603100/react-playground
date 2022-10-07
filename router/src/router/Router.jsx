import { useState } from "react";

function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const updatePath = () => {
    setCurrentPath(window.location.pathname);
  };

  window.addEventListener("popstate", updatePath);

  return (
    <div>{children.filter((child) => currentPath === child.props.path)}</div>
  );
}

export default Router;
