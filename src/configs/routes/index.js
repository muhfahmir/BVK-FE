import Breed from "pages/Breed";
import Home from "pages/Home";

import { Route, Switch } from "react-router-dom";
const router = () => {
  return (
    <Switch>
      {/* <Route path="/search/:keyword" component={Home} /> */}
      {/* <Route path="/:category/:id" component={Detail} /> */}
      <Route path="/breeds" component={Breed} />
      <Route path="/" component={Home} exact />
    </Switch>
  );
};

export default router;
