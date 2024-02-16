import React from "react";
import {
  Typography,
  Switch,
} from "@material-tailwind/react";
import { platformSettingsData } from "../../../data";

export function UserSettings({ auth }) {


  return (
    <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Platform Settings
        </Typography>
        <div className="flex flex-col gap-12">
          {platformSettingsData.map(({ title, options }) => (
            <div key={title}>
              <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                {title}
              </Typography>
              <div className="flex flex-col gap-6">
                {options.map(({ checked, label }) => (
                  <Switch
                    key={label}
                    id={label}
                    label={label}
                    defaultChecked={checked}
                    labelProps={{
                      className: "text-sm font-normal text-blue-gray-500",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
