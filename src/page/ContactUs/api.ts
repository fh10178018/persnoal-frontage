import { message } from "antd";
import { useCallback, useState } from "react";
import { Api } from "../../api";



export const useContact = (
) => {
  // 上传加载状态
  const [isLoading, setIsLoading] = useState(false);
  type ContactReqBody = {
    name: string,
    eamail: string,
    message: string
  }

  // post请求编辑或者新建
  const contact = useCallback(
    (data: ContactReqBody) => {
      return Api({
        url: "/resumes/contact",
        method: 'POST',
        data: {
          ...data,
        }
      })
    }, []);

  // 完成上传提交
  const onFinish = useCallback(
    (values: any) => {
      setIsLoading(true);
      contact(values).then((res: any) => {
        const data = res.data;
        if (data.code === 1) {
          message.success("\"" + values.title + "\" 咨询文章创建成功")
        } else {
          message.error("文章创建失败")
        }
        setIsLoading(false);
      }).catch(() => {
        setIsLoading(false);
      });
    },
    [contact]
  );

  return [
    isLoading,
    onFinish
  ] as const;
};