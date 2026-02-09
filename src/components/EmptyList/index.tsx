import { Container, Message } from "./styles";

type Props = {
    message: string;
};

export function ListEmpty(props: Props) {
    const { message } = props;
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    );
}
