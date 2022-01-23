import styled, {css} from "styled-components";

const Wrapper = styled.div`
    display: block;
`;

const FormWrapper = styled.form`
    padding: 1rem 0;
    width: 40%;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const FormLabel = styled.label`
    display: block;
    font-weight: 700;
`;

const InputStyle = css`
    display: block;
    margin: 1rem 0;
    border: none;
    border-bottom: 2px solid ${({theme}) => theme.colors.header};
    background-color: transparent;
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.subHeader};
    width: 100%;
`

const TextInput = styled.input`
    ${InputStyle}
`;

const TextAreaInput = styled.textarea`
    ${InputStyle}
`; 

const SubmitFlex = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SubmitInput = styled.input`
    background-color: transparent;
    border: 2px solid ${({theme}) => theme.colors.header};
    color: ${({theme}) => theme.colors.subHeader};
    margin: auto;
    font-size: 1.5rem;
    padding: 1.5rem;
    width: 80%;
`;

const RecruiterForm = ({name, company, website, minSalary, maxSalary, fullBody}) => (
    <Wrapper>
    <h2>Hey {name}! 👋</h2>
    <p>
        Thanks for reaching out!
    </p>
    <p>
        Please fill in the form below and I&apos;ll get back to you within <b>24 hours</b>.
    </p>
    <FormWrapper>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <TextInput type="text" id="name" name="name" value={name}></TextInput>
        <FormLabel htmlFor="onbehalf">Company:</FormLabel>
        <TextInput type="text" id="onbehalf" name="onbehalf" value={company}></TextInput>
        <FormLabel htmlFor="website">Website:</FormLabel>
        <TextInput type="url" id="website" name="website" value={website}></TextInput>
        <FormLabel htmlFor="minSalary">Minimum salary:</FormLabel>
        <TextInput type="number" step="500" min="80000" id="minSalary" name="minSalary" value={minSalary}></TextInput>
        <FormLabel htmlFor="maxSalary">Maximum salary:</FormLabel>
        <TextInput type="number" step="500" min="80000" id="maxSalary" name="maxSalary" value={maxSalary}></TextInput>
        <FormLabel htmlFor="lname">The pitch:</FormLabel>
        <TextAreaInput id="lname" name="pitch" rows="4" value={fullBody}></TextAreaInput>
        <SubmitFlex>
            <SubmitInput type="submit" value="Submit" />
        </SubmitFlex>
    </FormWrapper>
    </Wrapper>
)

export default RecruiterForm;
