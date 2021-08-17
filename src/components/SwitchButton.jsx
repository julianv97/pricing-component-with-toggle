import React from "react";
import { Switch } from "@headlessui/react";

const SwitchButton = ({ showMonthly, setShowMonthly }) => {
  return (
    <Switch.Group>
      <div className="text-gray-500 font-semibold text-sm pb-4">
        <Switch.Label className="capitalize">annualy</Switch.Label>
        <Switch
          checked={showMonthly}
          onChange={() => setShowMonthly(!showMonthly)}
          className={`${
            !showMonthly
              ? "bg-gradient-to-r from-gradient-1 to-gradient-2"
              : "bg-gradient-to-r from-light-grayish-blue to-gray-300"
          } relative inline-flex items-center h-6 rounded-full w-11 transform ease-in-out duration-200 mx-6 `}
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
