import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ComponentWithFunction = ({name, favoriteColor, children}) => {
    return (
        <div>
            안녕하세요 <b>{name}</b>입니다<br/>
			🐶 동생은 <b>{children}</b>이에요<br/>
			좋아하는 색은 <b>{favoriteColor}</b>입니다 !!!
        </div>
    );
};

//props 기본값 설정
ComponentWithFunction.defaultProps = {
	name: '홍길동'
};

//필수 props 지정 및 props 타입 지정 
ComponentWithFunction.propTypes = {
	name: PropTypes.string,
	favoriteColor: PropTypes.string.isRequired
};


export default ComponentWithFunction;