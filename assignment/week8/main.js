const baseUrl = "http://toyproject.kro.kr:8000/guestbook/";

getGuestbookList = () => {
    const response = axios.get(`${baseUrl}`)
      .then((response) => {
        console.log("방명록 리스트 조회 성공:", response.data);
  
        const data = response.data.result;
  
        data.map((datas, i) => {
          const list = document.createElement('div');
          list.id='list';
    
          const text = document.createElement('span');
          text.innerText=`
          ${i+1}번째 작성자: ${datas.writer}
          내용: ${datas.content}`
    
          const guestbookForm = document.getElementById('guestbookForm');
          guestbookForm.appendChild(list);
          list.appendChild(text);
        })
  
        })
  
      .catch((error) => {console.log("방명록 조회 오류:", error);
      });
  };