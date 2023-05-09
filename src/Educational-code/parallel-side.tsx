import User from './profile/page;

async function getUser(username) {
  const res = await fetch(`https://api.example.com/artist/${username}`);
  return res.json();
}

async function getUserChallenges(username) {
  const res = await fetch(`https://api.example.com/artist/${username}/${username.challenge}`);
  return res.json();
}

export default async function Page({ params: { username } }) {
  // Initiate both requests in parallel
  const userData = getUser(username);
  const challengeData = getUserChallenges(username);

  // Wait for the promises to resolve
  const [artist, albums] = await Promise.all([userData, challengeData]);

  return (
    <>
      <h1>{user.name}</h1>
      <Challenges list={challenges}></Challenges>
    </>
  );
}
