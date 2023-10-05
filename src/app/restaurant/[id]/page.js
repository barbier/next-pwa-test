import Link from "next/link";

export function generateStaticParams() {
  return [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
}

export default function Page({params}) {
  return(
    <main>
      <Link href="/">Voltar</Link>
      <h1>Restaurante {params.id}</h1>
    </main>
  )
}
