import Gallery from "@/components/Gallery"

type Props = {
    params: {
        term:string
    }
}
export const generateMetadata = ({params:{term}}:Props) => {
    return {
        title: `Results For ${term}`
    }
}

const page = ({params:{term}}:Props) => {
  return (
      <Gallery topic={term} />
  )
}

export default page