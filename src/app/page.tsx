import { supabase } from "@/lib/supabase";

export default async function Home() {
  // test_table에서 데이터를 가져옵니다.
  const { data, error } = await supabase.from("User").select("*");

  if (error) {
    return <div className="p-10 text-red-500">연동 실패: {error.message}</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Supabase 연동 테스트</h1>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
      {data && data.length > 0 ? (
        <p className="mt-4 text-green-600 font-medium">✅ 연동 성공!</p>
      ) : (
        <p className="mt-4 text-yellow-600">데이터가 비어있습니다.</p>
      )}
    </div>
  );
}
