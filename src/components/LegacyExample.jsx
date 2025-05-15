import React from 'react';
import { useFetch } from '../hooks';

/**
 * Example component demonstrating the compatibility layer
 */
function LegacyExample() {
  // Using the compatibility layer with the same API as before
  const { 
    data, 
    loading, 
    postData, 
    fetchApi 
  } = useFetch('get_profile', 'mount');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    postData(formData, (result) => {
      console.log('Profile updated successfully', result);
    });
  };

  // Handle refresh
  const handleRefresh = () => {
    fetchApi();
  };

  if (loading) return <div>Loading profile...</div>;

  return (
    <div>
      <h1>User Profile (Legacy API)</h1>
      <div>
        <h2>{data?.name}</h2>
        <p>{data?.email}</p>
      </div>

      <button onClick={handleRefresh}>Refresh Profile</button>

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
        <button type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
}

export default LegacyExample;
