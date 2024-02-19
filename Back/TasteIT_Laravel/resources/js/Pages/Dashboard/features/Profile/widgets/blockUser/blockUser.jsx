import React from 'react';
import { useForm } from '@inertiajs/react';

function BlockUser({blocked, follower_id, width}) {

  const { data, setData, post, processing, errors, reset, recentlySuccessful} = useForm({
    blocked: blocked,
  });

  const save = (event) => {
    event.preventDefault();
    setData("blocked", !data.blocked);
    post(`/dashboard/users/block/${follower_id}`);
  };


  return (
    <button type="button" className="flex items-center" onClick={save}>
      <img
        src={data.blocked ? "/assets/img/unblock.png" : "/assets/img/block.png"}
        alt="Block/unblock"
        width={width}
      />
    </button>
  );
}

export default BlockUser;
