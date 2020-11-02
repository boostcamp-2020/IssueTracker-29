import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        id: '',
        pw: '',
    });
    const idInput = useRef();
    const { id, pw } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            id: '',
            pw: '',
        });
        idInput.current.focus();
    };
    return (
        <div>
            <label>
                아이디
            <input
                name="id"
                onChange={onChange}
                value={id}
                ref={idInput}
            />
            </label>

            <label>
                비밀번호
            <input
                name="pw"
                onChange={onChange}
                value={pw}
            />
            </label>
            <button onClick={onReset}>초기화</button>
            <button>Sign in with GitHub</button>
            <div>
                <b>값: </b>
                {id} ({pw})
            </div>
        </div>
    );
}

export default InputSample;