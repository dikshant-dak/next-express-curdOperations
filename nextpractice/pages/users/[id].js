import React from 'react';
import { useRouter } from 'next/router';
import UserDetails from '@/components/UserDetails';

const UserId = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <p>Loading...</p>;
      }

  return (
    <div>
      {/* <h1>User Details Page</h1> */}
      <UserDetails id={id} />
    </div>
  )
}

export default UserId;
