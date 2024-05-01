import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>
        サーバーコンポーネントとクライアントコンポーネントの特徴をまとめたプロジェクトです。
      </p>
      <p></p>

      <Link href="/client">クライアントレンダリングページ</Link>
      <Link href="/server">サーバーレンダリングページ</Link>
    </main>
  );
}
