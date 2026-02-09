import React from "react";
import { Container, Title, SubTitle } from "./styles";

type Props = {
    title: string;
    subtitle: string;
};

export function HighLight(props: Props) {
    const { title, subtitle } = props;
    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    );
}
