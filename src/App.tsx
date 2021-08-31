import { AppThemeProvider } from "./theme/ThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppShell } from "./app-shell/AppShell";
import { Login } from "./auth/Login";
import { Quotation } from "./quotation/Quotation";
import { LinkedQuotation } from "./linked-quotation/LinkedQuotation";
import { KeyLetter } from "./key-letter/KeyLetter";
import { Coefficient } from "./coefficient/Coefficient";
import { Increase } from "./increase/Increase";

function App() {
  return (
    <Router>
      <AppThemeProvider>
        <Route path="/login">
          <Login />
        </Route>
        <AppShell>
          <Switch>
            <Route path="/increase">
              <Increase />
            </Route>
            <Route path="/coefficient">
              <Coefficient />
            </Route>
            <Route path="/key-letter">
              <KeyLetter />
            </Route>
            <Route path="/linked-act">
              <LinkedQuotation />
            </Route>
            <Route path="/decision">Arbre de decision</Route>
            <Route path="/" exact>
              <Quotation />
            </Route>
          </Switch>
        </AppShell>
      </AppThemeProvider>
    </Router>
  );
}

export default App;
