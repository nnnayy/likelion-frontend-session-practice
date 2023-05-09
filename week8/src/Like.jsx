import React, { Component } from 'react';
import moonbear from './moonbear.jpg';
import './style.css';

class Like extends Component {
    state = {
        number: 0
    };

    render() {
        const {number} = this.state;

        return (
            <div className='container'>
                <h3>2023년 5월 6일</h3>
                <img src={moonbear} className='img' alt='산책하는 강쥐'/>
                <p>달곰이랑 45분 동안 동네를 산책했다 !</p>
				<button
                    className='btn'
					//onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정함
					onClick={() => {
					//this.setState를 사용해 state의 값을 변경함
					this.setState({ number: number + 1 });
					}}
				>
					❤️ {number}
				</button>
			</div>
        );
    }
}

export default Like;