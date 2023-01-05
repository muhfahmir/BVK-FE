import Detail from "pages/detail/Detail";
import Home from "pages/Home";

import { Route, Switch } from "react-router-dom";
const router = () => {
  return (
    <Switch>
      <Route path="/search/:q" component={Home} />
      <Route path="/breed/:breedId" component={Detail} />
      <Route path="/" component={Home} exact />
    </Switch>
  );
};

export default router;
