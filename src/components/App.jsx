import React from 'react';
import user from './data/user'
import data from './data/data';
import friends from './data/friends'
import transaction from './data/transactions'
import { ProfileUser } from './profile/profile';
import { MarkupStatistics } from './statistic/statistic';
import { FriendList } from './friends/friends';
import { TransactionHistory } from './transaction/transaction';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ProfileUser
        name = {user.username}
        tag={user.tag}
        location={user.location}
        urlImg={user.avatar}
        follower={user.stats.followers}
        views={user.stats.views}
        like={user.stats.likes}>
      </ProfileUser>
      
      <MarkupStatistics
        title="Upload stats"
        stats={data}>
      </MarkupStatistics>
     
      <FriendList
        friends={friends}>
      </FriendList>

      <TransactionHistory
        transactions={transaction}>
      </TransactionHistory>
    </div>
  );
};
