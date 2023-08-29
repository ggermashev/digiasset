import React, {FC} from 'react';
import {InformationStyled, Title, Info} from "./Information.styled";

interface IInformation {
    title?: string,
    children?: React.ReactNode,
}

const Information: FC<IInformation> = ({title, children}) => {
    return (
        <InformationStyled>
            <Title>{title}</Title>
            <Info>{children}</Info>
        </InformationStyled>
    );
};

export default Information;