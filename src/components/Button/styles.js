import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #B0B0B0; /* Borda suave */
    background-color: ${props => props.color || '#C0C0C0'}; /* Cor de fundo personalizada ou padrão */
    color: ${props => props.textColor || '#333333'}; /* Cor do texto personalizada ou padrão */
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 5px; /* Bordas arredondadas */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    
    &:hover {
        opacity: 0.8; /* Menos opacidade no hover */
        background-color: ${props => props.color ? darken(props.color, 0.1) : '#A0A0A0'}; /* Tom mais escuro ao passar o mouse */
    }

    &:active {
        background-color: ${props => props.color ? darken(props.color, 0.2) : '#909090'}; /* Tom ainda mais escuro quando pressionado */
    }
`


const darken = (color, percent) => {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);

    r = Math.max(0, Math.min(255, r - r * percent));
    g = Math.max(0, Math.min(255, g - g * percent));
    b = Math.max(0, Math.min(255, b - b * percent));

    return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}
