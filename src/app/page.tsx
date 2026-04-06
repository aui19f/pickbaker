import MainHeader from "@/components/layout/MainHeader";
import SubTabNav from "@/components/layout/SubTabNav";
import { SUB_ITEMS } from "@/constants/navigation";

export default async function Home() {
  return (
    <div>
      <MainHeader title="제목" />

      <SubTabNav items={SUB_ITEMS} />
    </div>
  );
}
