function AllChallenges() {
  // const [challenges, setChallenges] = useState<
  //   | {
  //       [x: string]: any;
  //     }[]
  //   | null
  // >(null);
  // const fetchAllChallenges: () => Promise<void> = async () => {
  //   let { data: challenges, error } = await supabase
  //     .from("challenges")
  //     .select("*");
  //   setChallenges(challenges);
  // };

  // useEffect = () => {
  //   fetchAllChallenges();
  // };

  return (
    <div>
      <h1>All Challenges</h1>
      {/* {challenges &&
        challenges.map((challenge) => {
          <Text>challenge.name</Text>;
        })} */}
    </div>
  );
}
export default AllChallenges;
