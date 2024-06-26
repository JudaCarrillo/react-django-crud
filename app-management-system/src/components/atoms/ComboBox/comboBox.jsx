import styled from "styled-components";

const ComboBox = ({ options, label, onChange }) => {
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    const selectedValue = e.target.value;
    onChange(selectedValue);
  };

  return (
    <Container>
      <div>
        <Select onChange={handleSelectChange}>
          <option value="">{label}</option>
          {options &&
            options.map((option) => (
              <option className="bg-neutral-100" key={option.id} value={option.id}>
                {option.name}{" "}
              </option>
            ))}
        </Select>
      </div>
    </Container>
  );
};

export default ComboBox;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select = styled.select`
  display: flex;
  width: 230px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:hover{
    border-color: #007bff;
  }
`;
