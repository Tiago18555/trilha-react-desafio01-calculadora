import { ButtonContainer } from './styles';

const Button = ({label, color, textColor, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button" color={color} textColor={textColor}>
       {label}
      </ButtonContainer>
    );
}
  
export default Button;
