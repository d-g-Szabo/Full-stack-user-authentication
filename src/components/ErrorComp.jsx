function ErrorComp() {
  // the error always throws because we're deliberately causing a problem
  // maybe we didn't get a param and this page will not work without it
  throw new Error("I deliberately broke this page, because I'm a bad person");
  return <div>My page content</div>;
}
