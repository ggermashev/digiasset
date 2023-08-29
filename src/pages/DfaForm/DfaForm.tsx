import React, {useEffect, useState} from 'react';
import {DfaFormStyled, FormStyled} from "./DfaForm.styled";
import {useNavigate} from "react-router-dom";
import User from "../../store/User";
import Input from "../../ui/Input/Input";
import FileInput from "../../ui/FileInput/FileInput";
import Select from "../../ui/Select/Select";
import Button from "../../ui/Button/Button";
import {createDfa} from "../../api/api";
import {ICategory, IDfa, IPayment} from "../../types/types";

const DfaForm = () => {

    const navigate = useNavigate()

    useEffect(() => {

        setTimeout(() => {
            if (!User.isAuth) {
                navigate('/login')
            }
        }, 500)

        window.scroll(0,0)

    }, [])

    const cats = ['Ценная бумага', 'Контракт', 'Договор', 'Другое']
    const payments = ['Деньги', 'ЦФА']

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<string | undefined>()
    const [cat, setCat] = useState(cats[0])
    const [payment, setPayment] = useState(payments[0])

    const [titleIsValid, setTitleIsValid] = useState(false)
    const [descriptionIsValid, setDescriptionIsValid] = useState(false)


    return (
        <DfaFormStyled>
            <FormStyled>
                <Input
                    className={'width'}
                    label={"Название"}
                    value={name}
                    setValue={setName}
                    isValid={titleIsValid}
                    setIsValid={setTitleIsValid}
                />
                <FileInput label={'Картинка'} image={image} setImage={setImage}/>
                <Input
                    className={'width'}
                    label={"Описание"}
                    value={description}
                    setValue={setDescription}
                    type={"textarea"}
                    isValid={descriptionIsValid}
                    setIsValid={setDescriptionIsValid}
                />
                <Select
                    className={'select'}
                    title={'Категория'}
                    defaultOption={cats[0]}
                    options={cats.slice(1)}
                    value={cat}
                    setValue={setCat}
                />
                <Select
                    className={'select'}
                    title={'Оплата'}
                    defaultOption={payments[0]}
                    options={payments.slice(1)}
                    value={payment}
                    setValue={setPayment}
                />
                <Button
                    className={'submit-btn'}
                    onClick={() => {
                        if (titleIsValid && descriptionIsValid) {
                            createDfa({name: name, category: cat, payment, confidence: 'Не определено', price: 0, description} as IDfa).then(
                                val => {navigate('/profile')},
                                err => {console.log(err)}
                            )
                        } else {
                            alert('Форма заполенна некорректно')
                        }
                    }}
                >
                    Создать
                </Button>
            </FormStyled>
        </DfaFormStyled>
    );
};

export default DfaForm;