import React from 'react';
import { useQuery, useMutation } from '../hooks/reactQuery';

/**
 * Example component demonstrating React Query usage
 */
function ReactQueryExample() {
  // Fetch user profile data
  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refetch 
  } = useQuery('get_profile', {
    // Optional parameters
    staleTime: 5 * 60 * 1000, // 5 minutes
    onSuccess: (data) => {
      console.log('Profile data fetched successfully', data);
    },
    onError: (error) => {
      console.error('Error fetching profile data', error);
    },
  });

  // Create a mutation for updating the profile
  const { 
    mutate, 
    isPending, 
    isSuccess 
  } = useMutation('update_profile', {
    // Invalidate the profile query after successful update
    invalidateQueries: ['get_profile'],
    onSuccess: (data) => {
      console.log('Profile updated successfully', data);
    },
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    mutate(formData);
  };

  if (isLoading) return <div>Loading profile...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h2>{data?.name}</h2>
        <p>{data?.email}</p>
      </div>

      <button onClick={() => refetch()}>Refresh Profile</button>

      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            id="name" 
            name="name" 
            defaultValue={data?.name} 
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            id="email" 
            name="email" 
            defaultValue={data?.email} 
          />
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? 'Updating...' : 'Update Profile'}
        </button>
        {isSuccess && <div>Profile updated successfully!</div>}
      </form>
    </div>
  );
}

export default ReactQueryExample;
