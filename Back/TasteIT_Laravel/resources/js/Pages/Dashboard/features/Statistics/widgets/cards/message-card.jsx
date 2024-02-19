import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";
import { Link } from "@inertiajs/react";

export function MessageCard({ id, profileImg, username, firstname, surname, action }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          src={profileImg}
          alt={username}
          variant="rounded"
          className="shadow-lg shadow-blue-gray-500/25"
        />
        <div>
          <Link href={`/dashboard/users/${id}`}>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-semibold"
            >
              {username}
            </Typography>
          </Link>
          <Typography className="text-xs font-normal text-blue-gray-400">
            {firstname} {surname}
          </Typography>
        </div>
      </div>
      {action}
    </div>
  );
}

MessageCard.defaultProps = {
  action: null,
};

MessageCard.propTypes = {
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  action: PropTypes.node,
};

MessageCard.displayName = "/src/widgets/cards/message-card.jsx";

export default MessageCard;
