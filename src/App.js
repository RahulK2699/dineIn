import { Switch, Route, Link } from "react-router-dom";

import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { MealContent } from "./components/MealContent";
import { Breakfast } from "./components/Breakfast";
import { Lunch } from "./components/Lunch";
import { Dinner } from "./components/Dinner";
import { MenuItems } from "./components/MenuItems";
import { ItemDetail } from "./components/ItemDetail";
import { BackMenu } from "./components/BackMenu";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Logo />
          <Input />
          <MealContent />
          <Breakfast />
          <Lunch />
          <Dinner />
        </Route>
        <Route exact path="/breakfast">
          <div className="w-full">
            <div className="w-96 mx-auto ">
              <Link to="/">
                <BackMenu />
              </Link>
              <Logo />
            </div>
          </div>
          <Input />
          <MenuItems />
        </Route>
        <Route path="/breakfast/:id">
          <div className="w-full">
            <div className="w-96 mx-auto">
              <Link to="/breakfast">
                <BackMenu />
              </Link>
            </div>
          </div>
          <ItemDetail />
        </Route>
        <Route path="/lunch">
          <Logo />
          <Input />
          <MenuItems />
        </Route>
        <Route path="/dinner">
          <Logo />
          <Input />
          <MenuItems />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
}

export default App;
