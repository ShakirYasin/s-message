import { NextPageContext } from "next"
import { getSession, useSession } from "next-auth/react"
import Auth from "../components/Auth/Auth"
import Chat from "../components/Chat/Chat"
import { Session } from "next-auth"


export default function Home() {
  const {data: session, status} = useSession()
  const reloadSession = () => {
    
  }

  return session?.user?.username ? <Chat /> : <Auth session={session} reloadSession={reloadSession} />
}

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}