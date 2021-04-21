import axios from "axios"

let openDoor = async () => {
  let res = await axios({
    url: "https://zhmj.bjyhhy.cn/mj/mjfk",
    method: "POST",
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat",
    },
    data: {
      controlType: 2,
      doorIndexCodes: "c6c125f12a1f42e885f1873134f6422d",
    },
  })

  console.log(res.data)
}

openDoor()
