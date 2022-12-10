import React from "react";
import Friend from './friend/friend';
import Paginator from '../../shared/paginator/paginator';
import userPhoto from '../../../assets/images/user.jpg';

import style from './friends.module.css';
import Preloader from "../../shared/preloader/preloader";

const Friends = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, unfollow, follow, toggleFollowingProgress, followingInProgress, isFetching, ...props}) => {

  return (
    <main className={style.friends}>
      <div className={style.header}>
        <ul className={style.tabsList}>
          <li className={`${style.tabItem} ${style.activ}`}>
            Люди
          </li>
          <li className={style.tabItem}>
            Друзья
          </li>
        </ul>
        <span className={style.counter}>
          {props.totalUsersCount}
        </span>
      </div>
      <div className={style.userslist}>
        {users.map(user => <Friend id={user.id} key={user.id} photo={user.photos.small != null ? user.photos.small : userPhoto} name={user.name} status={user.status != null ? user.status : 'Статус отсутствует'} followed={user.followed} unfollow={unfollow} follow={follow} toggleFollowingProgress={toggleFollowingProgress} followingInProgress={followingInProgress} />)}
      </div>
      <div className={style.footer}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div className={style.preloaderWrap}>
          {isFetching ? <Preloader /> : null}
        </div>
      </div>
    </main>
  );
};

export default Friends;