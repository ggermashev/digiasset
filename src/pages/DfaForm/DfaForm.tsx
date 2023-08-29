import React, {useEffect, useState} from 'react';
import {DfaFormStyled, FormStyled} from "./DfaForm.styled";
import {useNavigate} from "react-router-dom";
import User from "../../store/User";
import Input from "../../ui/Input/Input";
import FileInput from "../../ui/FileInput/FileInput";
import Select from "../../ui/Select/Select";
import Button from "../../ui/Button/Button";

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

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState<string | undefined>()
    const [price, setPrice] = useState('')
    const [cat, setCat] = useState(cats[0])
    const [payment, setPayment] = useState(payments[0])

    const [titleIsValid, setTitleIsValid] = useState(false)
    const [descriptionIsValid, setDescriptionIsValid] = useState(false)
    const [priceIsValid, setPriceIsValid] = useState(false)


    return (
        <DfaFormStyled>
            <FormStyled>
                <Input
                    className={'width'}
                    label={"Название"}
                    value={title}
                    setValue={setTitle}
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
                <Input
                    label={'Цена, Руб'}
                    value={price}
                    setValue={setPrice}
                    type={'only_digits'}
                    isValid={priceIsValid}
                    setIsValid={setPriceIsValid}
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
                        if (titleIsValid && descriptionIsValid && priceIsValid) {
                            navigate('/profile')
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