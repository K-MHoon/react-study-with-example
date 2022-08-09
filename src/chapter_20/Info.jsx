import React, { useEffect } from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  // useEffect(() => {
  //   console.log("렌더링될 때마다 호출");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  //   useEffect(() => {
  //   console.log("마운트될 때만 호출");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // },[]);

  useEffect(() => {
    console.log("특정 필드(name) 업데이트될 때만 호출");
    console.log({
      name,
      nickname,
    });
  }, [name]);

  // useEffect(() => {
  //   console.log("뒷정리하기");
  //   console.log(name);
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
