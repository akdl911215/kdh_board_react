import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RegisterAPI } from "../../api/BoardApi";

const Register = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    title: "",
    content: "",
    writerEmail: "",
    writerName: "",
  });
  const { title, content, writerEmail, writerName } = board;

  useEffect(() => console.log(board), [board]);

  const backList = () => navigate("/");

  const saveButton = () => {
    RegisterAPI(board)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          alert("게시글 등록 완료");
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`);

    setBoard({
      ...board,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <span>제목</span>
        <input type="text" name="title" value={title} onChange={onChange} />
      </div>
      <br />
      <div>
        <span>작성자</span>
        <input
          type="text"
          name="writerName"
          value={writerName}
          onChange={onChange}
        />
      </div>
      <div>
        <span>email</span>
        <input
          type="text"
          name="writerEmail"
          value={writerEmail}
          onChange={onChange}
        />
      </div>
      <div>
        <span>내용</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={content}
          onChange={onChange}
        />
      </div>
      <br />
      <div>
        <button onClick={saveButton}>저장</button>
        <button onClick={backList}>뒤로</button>
      </div>
    </>
  );
};

export default Register;
