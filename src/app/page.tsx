import Button from "@/components/forms/ui/Button";
import Input from "@/components/forms/Input/Input";

export default async function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">테스트</h1>
      <p>색상테스트</p>
      <div className="space-y-4">
        <Input name="input" sizing="sm" />
        <Input name="input" sizing="md" />
        <Input name="input" sizing="lg" />

        <Button sizing="sm">테스트버튼(sm)</Button>
        <Button sizing="md">테스트버튼(md)</Button>
        <Button sizing="lg">테스트버튼(lg)</Button>
        <Button variant="primary">테스트버튼(sm)</Button>
        <Button variant="primary-line">테스트버튼(md)</Button>
        <Button variant="primary">테스트버튼(sm)</Button>
        <Button variant="primary-line">테스트버튼(md)</Button>
        <Button variant="secondary">테스트버튼(sm)</Button>
        <Button variant="secondary-line">테스트버튼(md)</Button>
        <Button variant="accent">테스트버튼(sm)</Button>
        <Button variant="accent-line">테스트버튼(md)</Button>
      </div>
    </div>
  );
}
