import { Fragment } from "react";

import ComponentWithFunction from './ComponentWithFunction';
import ComponentWithClass from './ComponentWithClass';
// import Like from "./Like";

const App = () => {
	return (
    <Fragment>
      <ComponentWithFunction name="나예" favoriteColor="초록색">달곰이</ComponentWithFunction>
      <br />
      <ComponentWithClass name="하린" favoriteColor="초록색">포미</ComponentWithClass>
      {/* <Like /> */}
    </Fragment>
  );
};

export default App;