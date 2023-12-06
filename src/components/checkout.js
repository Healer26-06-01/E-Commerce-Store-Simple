import React from "react";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();
    const [form, setForm] = React.useState({
        name: "",
        phone: "",
        shippingAddress: "",

        touched: {
            phone: false,
            password: false,
            shippingAddress: false
        },
    });

    const errors = {
        name: form.name.length === 0,
        phone: form.phone.length === 0,
        shippingAddress: form.shippingAddress.length === 0,
    };
    const disabled = Object.keys(errors).some((x) => errors[x]);

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleBlur = (ev) => {
        const { name } = ev.target;
        setForm((prevState) => {
            return {
                ...prevState,
                touched: { ...form.touched, [name]: true },
            };
        });
    };

    const handleSubmit = (ev) => {
        if (disabled) {
            ev.preventDefault();
            return;
        }
        navigate("/orderconfirmation");
    };

    const showError = (field) => (errors[field] ? form.touched[field] : false);

    return (
        <form onSubmit={handleSubmit}>
            <CheckoutContainer>
                {/* Row 1 */}
                <CheckoutTitle>Thông tin nhận hàng</CheckoutTitle>

                {/* Row 4 */}
                <CheckoutHeader>
                    <h4>Thông tin của bạn</h4>
                </CheckoutHeader>

                {/* Row 5 */}

                {/* Row 6 */}
                <CheckoutTable>
                    <CheckoutFormLabel>Tên</CheckoutFormLabel>
                    <CheckoutInput
                        type="text"
                        name="name"
                        invalid={showError("name")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Nhập tên"
                    />
                    <CheckoutFormLabel>Số điện thoại</CheckoutFormLabel>
                    <CheckoutInput
                        type="number"
                        name="phone"
                        invalid={showError("phone")}
                        onChange={handleChange}
                        placeholder="Nhập số điện thoại"
                    />
                </CheckoutTable>

                {/* Row 7 */}
                <CheckoutHeader>
                    <h4>Địa chỉ của bạn</h4>
                </CheckoutHeader>

                {/* Row 8 */}

                {/* Row 9 */}
                <CheckoutTable>
                    <CheckoutFormLabel>Địa chỉ nhận hàng</CheckoutFormLabel>


                    <CheckoutInput
                        type="text"
                        name="shippingAddress"
                        invalid={showError("shippingAddress")}
                        placeholder="Nhập địa chỉ"
                    />
                    {/* <input type="text" name="shippingAddress2" />
                        <input type="text" name="shippingCity" /> */}

                </CheckoutTable>

                <CancelButton onClick={() => navigate("/basket")}>
                    Trở về
                </CancelButton>

                <CheckoutButton disabled={disabled}>
                    Xác nhận đơn hàng
                </CheckoutButton>
            </CheckoutContainer>
        </form>
    );
};

export default Checkout;

const CheckoutContainer = styled.div`
    display: grid;
    padding: 150px;
    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
`;
const CheckoutTable = styled.div`
    grid-column: 1 / span 3;
    display: grid;
    grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
    grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
    column-gap: 20px;
    padding-left: 10px;
`;

const CheckoutHeader = styled.div`
    grid-column: 1 / span 3;
    padding-bottom: 20px;
    padding-top: 20px;
`;


const CheckoutTitle = styled.h2`
    grid-column: 1 / span 2;
    padding-bottom: 60px;
`;



const CheckoutFormLabel = styled.label`
    justify-self: end;
    align-self: center;
`;

const CheckoutInput = styled.input`
    border-width: 2px;
    border-style: solid;
    border-radius: 8px;
    padding: 10px;
    ${(props) =>
        props.invalid &&
        `
        border-color: red;
        border-width: 3px;
    `}
`;

const CheckoutButton = styled.button`
    border-radius: 8px;
    height: 40px;
    grid-column: 3;
`;

const CancelButton = styled.button`
    border-radius: 8px;
    height: 40px;
    grid-column: 1;
`;
