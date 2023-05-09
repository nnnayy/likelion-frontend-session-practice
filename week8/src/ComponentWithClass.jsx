import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentWithClass extends Component {
    render() {
        const {name, favoriteColor, children} = this.props;

        return (
            <div>
                안녕하세요 <b>{name}</b>이에요<br/>
				🐶 동생은 <b>{children}</b>예요<br/>
				제가 좋아하는 색깔은 <b>{favoriteColor}</b>입니다 !!!
            </div>
        );
    }
}

//props 기본값 설정
ComponentWithClass.defaultProps = {
    name: '홍길동'
};

//필수 props 지정 및 props 타입 지정 
ComponentWithClass.propTypes = {
    name: PropTypes.string,
    favoriteColor: PropTypes.string.isRequired
};

export default ComponentWithClass;