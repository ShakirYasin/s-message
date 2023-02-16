import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

interface IAuthProps {
    session: Session | null;
    reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({session, reloadSession}) => {
    const [username, setUsername] = useState('')
    const onSubmit = async () => {
        try {
            // Create username mutation
        } catch (error) {
            console.log({onSubmitError: error});
        }
    }
  return (
    <Center height={"100vh"}>
        <Stack align={'center'} spacing={8}>
            {session ? (
                <>
                    <Text fontSize={"3xl"}>Create a Username</Text>
                    <Input placeholder="Enter a Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Button onClick={onSubmit} width={"full"}>Save</Button>
                </>
            ): (
                <>
                    <Text fontSize={"3xl"}>SMessgage</Text>
                    <Button onClick={() => signIn("google")} leftIcon={<Image src={"/images/googlelogo.png"} height={"20px"} />}>Continue with Google</Button>
                </>
            )}
        </Stack>
    </Center>
  )
};

export default Auth;
