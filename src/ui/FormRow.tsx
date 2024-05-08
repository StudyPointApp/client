import styled from "styled-components";
import React from "react";

const StyledFormRow = styled.div`
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding: 1.2rem 0;
    `;

const Label = styled.label`
      font-weight: 500;
    `;

const Error = styled.span`
      font-size: 1.4rem;
      color: var(--color-red-700);
    `;

interface FormRowProps {
    label?: string;
    error?: string;
    children: React.ReactElement;
}

function FormRow({ label, error, children }: FormRowProps) {
    return (
        <StyledFormRow>
            {label && <Label htmlFor={children.props.id}>{label}</Label>}
            {children}
            {error && <Error>{error}</Error>}
        </StyledFormRow>
    );
}

export default FormRow;