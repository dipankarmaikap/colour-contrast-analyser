const handelStaticProps = (sucess = true, props = {}, revalidate = 100) => {
  if (sucess) {
    return {
      props,
      revalidate,
    };
  }
  return {
    props,
    revalidate,
    notFound: true,
  };
};
export default handelStaticProps;
