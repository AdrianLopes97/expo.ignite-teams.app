import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
};

export function GroupCard(props: Props) {
    const { title, ...rest } = props;
    return (
        <Container {...rest}>
            <Icon />
            <Title>{title}</Title>
        </Container>
    );
}
