import React, {FC} from 'react';
import {DfaStyled, Col} from "./Dfa.styled";
import {IDfa} from "../../types/types";
import Button from "../../ui/Button/Button";

interface IDfaExt extends IDfa {
    className?: string,
    id?: string,
}

const Dfa: FC<IDfaExt> = ({
                              title,
                              image,
                              description,
                              initial_price,
                              price,
                              category,
                              confidence,
                              payment,
                              created_at,
                              owner,
                              className,
                              id
                          }) => {
    return (
        <DfaStyled className={className} id={id}>
            {image && <img src={image}/>}
            <Col>
                <h3>{title}</h3>
                <p>Категория: <span style={{fontWeight: 'bold'}}>{category}</span></p>
                <p>Цена: <span style={{fontWeight: 'bold'}}>{price}</span></p>
            </Col>
            <Col>
                <p>Оплата: <span style={{fontWeight: 'bold'}}>{payment}</span></p>
                <p>Доверие: <span style={{fontWeight: 'bold'}}>{confidence}</span></p>
            </Col>
            <Col>
                <Button onClick={() => {
                }}>Владелец</Button>
                <p>Выпущено: <span style={{fontWeight: 'bold'}}>{created_at}</span></p>
            </Col>
        </DfaStyled>
    );
};

export default Dfa;