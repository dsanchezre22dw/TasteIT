import React from 'react';
import { useForm } from '@inertiajs/react';

function FollowUser({followingIds, following_id, width}) {

  const { data, setData, post, processing, errors, reset, recentlySuccessful} = useForm({
    following: followingIds.includes(following_id),
  });

  const save = (event) => {
    event.preventDefault();
    setData("following", !data.following);
    post(`/dashboard/users/follow/${following_id}`);
  };


  return (
    <button type="button" className="flex items-center" onClick={save}>
      <img
        src={data.following ? "/assets/img/unfollow.png" : "/assets/img/users.png"}
        alt="Follow/unfollow"
        width={width}
      />
    </button>
  );
}

export default FollowUser;
