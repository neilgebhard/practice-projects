const getDate = () => {
  // get current date in format DD-MM-YY
  const date = new Date().toLocaleDateString()

  return date
}

const Page = () => {
  const date = getDate()
  console.log(date)
  return <div>Page</div>
}

export default Page
