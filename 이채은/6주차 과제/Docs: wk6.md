# React study 2주차

state 발생 (데이터 변경 시)→ event 발생→ 변경된 데이터 업데이트(ui 와 함수 자체 both)

- 연습한 예제: 분-시간 변환기 구현으로, state setting , ui 를 state 기반으로 변경하는 연습하기
- 자세한 건 코드 주석 참고로 대체
    
    ```html
    //form( 특히 input 폼) 작성 예시
    <html lang="ko">
    <head>
        <link rel="icon" type="image/png" href="http://example.com/myicon.png">
    </head>
    <body>
        <div id="root"></div> 
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        const root=document.getElementById("root");
    
        function App() { // class , for 사용하면 안됨
    
            const [amount, setAmount] = React.useState(0); // input value 받아와야 해서 
            //useState 뒤에다가 function 작성하는 습관
            const [flipped,setFlipped] = React.useState(false);
            const onChange = (event) => {
                setAmount(event.target.value);
            };
            const reset =()=> setAmount(0); // 리셋 버튼 누르는 함수 실행되면 -> 값이 0 으로 변함
            const onFlip =()=> {
                 reset();
                 setFlipped((current) => !current); // = !flipped//현재 상황이 flipped 이니까, flip 이 참-> 거짓 / 거짓-> 참 ( 뒤에는 리턴값 작성)
            }
    
            return (
    <div>
                <div> //minutes block
                    <h1 className="hi">Converter</h1>
                    <label htmlFor="minutes">Minutes</label>
                    <input value={flipped ? amount*60 : amount} // 위에서 input value 이름 정해줬기 때문에 여기서도 그대로 가지고 옴
                    id="minutes"
                    placeholder="Minutes"
                    type="number"
                    onChange={onChange}
                    disabled={flipped === true }
                    />
    							</div>
                    <h4>  You want to convert {amount} </h4>
                    <label htmlFor="hours">Hours</label>
                    <input value={flipped ? amount : Math.round(amount/60)} // 위에서 input value 이름 정해줬기 때문에 여기서도 그대로 가지고 옴
                    //**inline 조건문 사용구문 / if flipped 가 true 라면 minutes 사용해서 math.round 한 값을 value 로 넣어라 
                    //? 앞의 것이 참이라면 바로 뒤에 있는 amount 실행, 거짓이라면 : 뒤의 것 실행
                <div> // hours block
    								id="hours"
                    placeholder="Hours"
                    type="number"
                    disabled={flipped === false } // input 에 따라 disable 할지 말지 결정가능
                    onChange={onChange}
                     />
                    <button onClick={reset}> Reset </button>
                    <button onClick={onFlip}> {flipped ? "Turn Back" : "Invert"} </button>  //flipped 가 거짓일 때는 분을 시간으로 변경 
                 </div>
                </div>
            );
        }
       
    ReactDOM.render(<App/>, root);
    
    </script>
    </html>
    ```
    
    - 처음 flipped 의 부울 값은 false ( flip 되지 않은 상태 = 분 → 시간 으로 변경 )
    - flipped 가 실행되면 flipped 가 적용된 모든 요소들에 자동적으로 다 이 변화가 적용됨.
        
        const [flipped,setFlipped] = React.useState(false);  ⇒ state 구현하는 코드인데, 초기 데이터 flipped 의 값은 false 이고 , 이 flipped 에 적용할 함수가 setFlipped 임. 
        
        setFlipped 가 없으니까, 함수 정의해줌 
        
        → setFlipped((current) => !current); // current 부울 값을 반대로 바꾸는 역할 
        
    - minutes 칸과 hours 칸에 disabled={flipped === true } 코드 넣어서, 한개에 입력할때, 다른 한개는 입력불가능하게 막아두기
    
    ---
    
    ## <props >
    
     parent 요소에서 자식요소로 데이터 보내기 ( 자식 요소가 부모요소보다 더 중요한 경우가 많음. 근데 반대로 ! )
    
    ---
    
    모두 같은 스타일 적용하고 내부 텍스트만 다르게 설정하기 위해 어떻게 해야하나 ! 
    
    → 컴포넌트들을 more figurable 학 만들기 
    
    부울, 함수, 문자열 모두 보낼 수 있음 
    
    ---
    
    ### +a. <react memo>
    
    state 변하면 모든 매개변수/자식노드 로 정의된 부분들 다 변해야 하는데, (default)
    
    매개변수가 변하지 않으면 → re render 되지 않게 하고 싶음 ⇒ 메모기능
    
    → const MemorizedBtn=**React.memo(Btn)**   : 해당 코드 추가 
    
    ---
    
    ### <매개변수(probs) 의 종류>
    
    - propType  사용하는 경우: 내가 매개변수로 사용하려는 prob 이 어떤 타입인지 체크해주는 기능을 함.
        - 설정 1: <script src="[https://unpkg.com/prop-types@15.7.2/prop-types.js](https://unpkg.com/prop-types@15.7.2/prop-types.js)"> </script> 를 먼저 head 태그 내부에 작성해서 기능을 load 해줘야함
        - 설정2: 그 다음에는,
    
    ```
    Btn.propTypes ={ // btn.prototypes 작성법 주의하기 
            text: PropTypes.string.isRequired,
            fontSize: PropTypes.number, //이건 옵셔널함
        };
    ```
    
    이거 작성해줘야함.
    
    - 그리고, text: protoTypes.string.isRequired, 이런식으로 .isRequired 붙이게 되면, 매개변수 선언해준 부분에서 text 가 반드시 포함되어야함. ( 없으면 에러 발생 )
    
    ---
    
    ## <주의해야 하는 부분들 정리>
    
    - {} 이게 잇어야 j.s , 없으면 걍 텍스트
    - <h1> super converter </h1> <hr/> 자바 스크립트에 html 태그 사용하고 싶을때는
        
        뒤에 ‘/’ 붙여야함
        
    - 함수 내부 = 변수 설정 + return ( 여기에 html 요소들이 들어가야한다. )
