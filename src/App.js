import { Switch, Route } from "react-router-dom";

import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { MealContent } from "./components/MealContent";
import { Breakfast } from "./components/Breakfast";
import { Lunch } from "./components/Lunch";
import { Dinner } from "./components/Dinner";
import { MenuItems } from "./components/MenuItems";
import { ItemDetail } from "./components/ItemDetail";

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
          <Logo />
          <Input />
          <MenuItems />
        </Route>
        <Route path="/breakfast/:id">
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
