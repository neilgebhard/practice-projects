'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <div>There&apos;s been an error..</div>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  )
}
