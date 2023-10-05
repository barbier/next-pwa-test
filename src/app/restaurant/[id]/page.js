import Link from "next/link";

export default function Page({params}) {
  return(
    <main>
      <Link href="/">Voltar</Link>
      <h1>Restaurante {params.id}</h1>
    </main>
  )
}