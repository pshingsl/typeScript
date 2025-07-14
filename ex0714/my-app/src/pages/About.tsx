import React, { useEffect, useState } from 'react'
import axios from 'axios';

interface UserResponse {
  message: string;
}

// fetch 형식은 json으로 변환하고 then으로 사용해야함
// 위의 불편함을 해소하기 위해 axios 등장

const About = () => {
  const [data, setData] = useState<UserResponse|null>(null);

  useEffect(() => {
    const postUser = async () => {
      try {
        const response = await axios.post<UserResponse>("http://localhost:4000/users", {
          name : "길수" // router.post의 const {name} = req.body as {name : string};
        })

         console.log("Axios 응답 (response.data):", response.data);

        setData(response.data)
      } catch (e) {
        console.log(e)
        throw new Error()
      }
    }
    postUser()
  }, [])

  // 디버깅
  useEffect(() => {
    console.log(data)
  }, [data]) // 데이터가 변경 될 때마다 바뀜

  return (
    <>
      <div>About  </div>
      <p>{data?.message}</p> 
      {/* useQuery를 쓰면 처리하고  */}
    </>
  )
}

export default About