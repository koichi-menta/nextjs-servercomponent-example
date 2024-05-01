import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p>
        サーバーコンポーネントとクライアントコンポーネントの特徴をまとめたプロジェクトです。
      </p>
      <p>
        <Link href="/client">クライアントレンダリングページ</Link>
      </p>
      <p>
        <Link href="/server">サーバーレンダリングページ</Link>
      </p>
      <p>
        <Link href="/route-handler">
          クライアントレンダリングページ(Route Handler)
        </Link>
      </p>
    </main>
  );
}
