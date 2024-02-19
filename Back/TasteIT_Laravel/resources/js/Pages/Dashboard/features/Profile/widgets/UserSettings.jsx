import React, {useEffect} from "react";
import { useForm } from '@inertiajs/react';

import { Typography, Switch } from "@material-tailwind/react";
import { platformSettingsData } from "../../../data";

export function UserSettings({ actualUser }) {

  const { data, setData, post, processing, errors, reset, recentlySuccessful} = useForm({
    configuration: null,
    type: null,
  });

  useEffect(() => {
    if (data.configuration !== null) {
      postConfiguration();
    }
  }, [data.configuration]);
  
  useEffect(() => {
    if (data.type !== null) {
      postConfiguration();
    }
  }, [data.type]);

  
  function handleSwitchChange(checked, type){
    setData(prevData => ({
      ...prevData,
      configuration: checked,
      type: type
    }));
  }

  function postConfiguration(){
    post('/dashboard/users/configuration');
  }

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
                {options.map(({ label, type }) => (
                  <Switch
                    key={`${type}-${label}`}
                    id={label}
                    label={label}
                    defaultChecked={type === 'follow' ? actualUser.configuration.follow : type === 'valorate' ? actualUser.configuration.valorate : type === 'post' ? actualUser.configuration.post : false}
                    onChange={(e) => {
                      handleSwitchChange(e.target.checked, type);
                    }}
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
