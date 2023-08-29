import React, {FC, useEffect, useRef, useState} from 'react';
import {FileInputStyled, ImageWrap, Images, Row} from "./FileInput.styled";
import Button from "../Button/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import {observer} from "mobx-react-lite";

interface IFileInput {
    image: string | undefined,
    setImage: (img: string | undefined) => void,
    label: string,
}

const FileInput: FC<IFileInput> = observer(({image, setImage, label}) => {

    const input = useRef(null)

    return (
        <FileInputStyled>
            <Images>
                {image &&
                    <ImageWrap>
                        <DeleteIcon onClick={() => {
                            setImage(undefined)
                        }} className={'deleteIcon'}/>
                        <img src={image}/>
                    </ImageWrap>
                }
            </Images>
            <Row>
                <h4>{label}</h4>
                <Button onClick={() => {
                    //@ts-ignore
                    input.current.click()
                }}>
                    Загрузить
                    <input ref={input} type={"file"} hidden onInput={(e) => { // @ts-ignore
                        setImage(URL.createObjectURL(e.target.files[0]))
                    }}/>
                </Button>
            </Row>
        </FileInputStyled>

    );
});

export default FileInput;