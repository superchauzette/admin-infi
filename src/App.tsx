import { AppThemeProvider } from "./theme/ThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppShell } from "./app-shell/AppShell";
import { Login } from "./auth/Login";
import { Acts } from "./acts/Acts";
import { LinkedAct } from "./linked-act/LinkedAct";

function App() {
  return (
    <Router>
      <AppThemeProvider>
        <Route path="/login">
          <Login />
        </Route>
        <AppShell>
          <Switch>
            <Route path="/linked-act">
              <LinkedAct />
            </Route>
            <Route path="/decision">Arbre de decision</Route>
            <Route path="/" exact>
              <Acts />
            </Route>
          </Switch>
        </AppShell>
      </AppThemeProvider>
    </Router>
  );
}

export default App;
