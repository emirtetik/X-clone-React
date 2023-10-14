import RightbarSection from "~/components/RightbarSection";
import { useAccount } from "~/store/auth/hooks";
import { whoFollowUsers } from "~/mock";
import UserCard from "~/components/UserCard";
export default function WhoFollow() {
  const account = useAccount();

  return (
    <RightbarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
    >
      {whoFollowUsers.map((user) => <UserCard user={user} key={user.id} />)}
    </RightbarSection>
  );
}
