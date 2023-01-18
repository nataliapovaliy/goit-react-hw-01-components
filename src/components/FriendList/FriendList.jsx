import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export default function FriendList ({ friends }) {
    return (
        <>
            <ul className={css.friendList}>
                {friends.map(friend => {
                    return (
                        <>
                            {<FriendListItem
                                avatar={friend.avatar}
                                name={friend.name}
                                isOnline={friend.isOnline} />}
                        </>
                    )
                })}
            </ul>
        </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
};