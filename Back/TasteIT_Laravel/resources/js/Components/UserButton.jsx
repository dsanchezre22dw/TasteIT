import Dropdown from '@/Components/Dropdown';
import {
    UserCircleIcon,

  } from "@heroicons/react/24/solid";
  import { Avatar } from '@material-tailwind/react';

export default function UserButton({ user }) {
    return (
        <div className="hidden sm:flex sm:items-center sm:ms-6">
            <div className="ms-3 relative">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center gap-1 px-3 py-2 text-sm leading-4 font-medium rounded-md text-blue-gray-500 dark:text-blue-gray-400 dark:bg-gray-800 hover:text-blue-gray-700 dark:hover:text-blue-gray-300 focus:outline-none transition ease-in-out duration-150"
                            >
                                
                                { user.profileImg? (
                                    <Avatar src={user.profileImg} className="h-5 w-5"  variant="circular"/>
                                ):(
                                    <UserCircleIcon className="h-5 w-5" />
                                )}

                                {user.username}
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>
    );
}
