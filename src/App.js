import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0');
        setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
        switch (operation) {
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          default:
            break;
        }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" color="#E0E0E0" textColor="#000000" />
          <Button label="/" color="#E0E0E0" textColor="#000000" />
          <Button label="c" color="#FF6F6F" textColor="#FFFFFF" onClick={handleOnClear} />
          <Button label="." color="#E0E0E0" textColor="#000000" />
        </Row>
        <Row>
          <Button label="7" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('7')} />
          <Button label="8" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('8')} />
          <Button label="9" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('9')} />
          <Button label="-" color="#E0E0E0" textColor="#000000" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('4')} />
          <Button label="5" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('5')} />
          <Button label="6" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('6')} />
          <Button label="+" color="#E0E0E0" textColor="#000000" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('1')} />
          <Button label="2" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('2')} />
          <Button label="3" color="#F0F0F0" textColor="#000000" onClick={() => handleAddNumber('3')} />
          <Button label="=" color="#FF6F6F" textColor="#FFFFFF" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
