import React from "react";
import { Switch } from "@headlessui/react";

const SwitchButton = ({ showMonthly, setShowMonthly }) => {
  return (
    <Switch.Group>
      <div>
        <Switch.Label className="capitalize">annualy</Switch.Label>
        <Switch
          checked={showMonthly}
          onChange={() => setShowMonthly(!showMonthly)}
          className={`${
            showMonthly ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex items-center h-6 rounded-full w-11 transform ease-in-out duration-200 mx-6`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              showMonthly ? "translate-x-6" : "translate-x-1"
            }  w-4 h-4 flex  bg-white rounded-full transform ease-in-out duration-300`}
          />
        </Switch>
        <Switch.Label className="capitalize">monthly</Switch.Label>
      </div>
    </Switch.Group>
  );
};

export default SwitchButton;
