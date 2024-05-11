import Avatars from "@/components/avatars";
import VerticalNavbar from '@/components/verticalnav'
export default function UserProfile({ userData, bonus, members }) {
  return (
    <>
      <div>
        <Avatars size="lg" />
        <VerticalNavbar/>
      </div>
    </>
  );
}
