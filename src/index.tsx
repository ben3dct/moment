import React from "react";
import { render } from "react-dom";

import { FocusStyleManager } from "@blueprintjs/core";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "./app.css";

import { Navigation } from "./Navigation";
import { CoreExample } from "./CoreExample";
import { SelectExample } from "./SelectExample";
import { DatetimeExample } from "./DatetimeExample";
import { Popover2Example } from "./Popover2Example";

FocusStyleManager.onlyShowFocusOnTabs();

const App = () => (
  <div>
    <Navigation />
    <CoreExample />
    <SelectExample />
    <DatetimeExample />
    <Popover2Example />
  </div>
);

render(<App />, document.getElementById("root"));
