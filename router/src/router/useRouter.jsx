const useRouter = () => {
  const push = (url) => {
    history.pushState(null, null, url);
    window.dispatchEvent(new Event("popstate"));
  };

  return { push };
};

export default useRouter;
