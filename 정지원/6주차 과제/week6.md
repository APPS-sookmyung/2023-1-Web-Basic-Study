input은 스스로 입력해서 업데이트해야함. 사용자가 input에 뭔갈 쓰면 onChange함수가 실행. 
onChange(): 데이터를 업데이트
    hours의 input value에 value={minutes / 60}으로 설정하면 state을 60으로 나눌 수 있음
    value = {math.round(minutes / 60)}하면 반올림

    <button onCLick={reset}>Reset</button>
    const reset = () => setMinutes(0)
    :state과 연결된 모든 것을 0으로 초기화시킴

const [flipped, setFlipped] = React,useState(false);
    :여기서의 flipped상태로 input을 enabled 또는 disabled로 바꿔줄 수 있음.
const onFlip = () => {
    reset();
    setFlipped((current) => !current);
};
    :flipped가 true라면 return false. flipped가 false라면 return true

value = {flipped ? amount*60 : amount}
    :flipped되었다면 amount*60의 값을 보여주고, flipped되지 않았다면 input에 입력한 amount값을 그대로 보여줌.

Props: 
- 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법. 
- 컴포넌트의 환경을 우리 마음대로 설정 가능. 
- Props는 btn으로부터 전달받는 properties. 
- 어떤 Props이던 Btn 함수로 보내면 Btn 함수의 첫번째 인자로 들어감.


ReactJs의 규칙에 의해, 컴포넌트가 상태를 바꾼다면 다시 render함.

부모 컴포넌트의 state가 변경되면 첫번째 props는 변하지만 두번째 props는 변하지 않음.-> re-render하지 않도록 하기 위해 React.memo()를 이용.

PropTypes:
사용자가 어떤 타입의 prop을 받고 있는지를 체크해줌.
    Btn.propTypes = {
        //prop의 형태가 어떄야하는지 속성 지정. text, fontSize...
    }



    


