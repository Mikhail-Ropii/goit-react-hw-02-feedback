import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 20px;
`

export const Title = styled.h1`
    font-size: 25px;
    margin-bottom: 25px;
`
export const Buttons = styled.div`
    margin-bottom: 20px;
`

export const Button = styled.button`
    font-size: medium;
    :not(:last-child) {
        margin-right: 20px;
    }
    border-radius: 5px;
    box-shadow: 5px 5px 3px 0px #E2E2E2;
`

export const StatItem = styled.p`
    font-size: 16px;
    font-weight: 600;
`
