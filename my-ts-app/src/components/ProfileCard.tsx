interface ProfileCardProps {
  name: string;
  age: number;
  bio?: string;
  isOnline: boolean;
}

function ProfileCard({ name, age, bio, isOnline }: ProfileCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px', textAlign: 'center' }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {bio && <p>Bio: {bio}</p>}
      <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default ProfileCard;