import { Button, Divider, Form, Input, InputNumber } from "antd";
import "./index.css";

function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div classNma="upload-label">상품 사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드 해주세요.</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">판매자 명</div>}
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해주세요." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="판매자 명을 입력해주세요"
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">상품 이름</div>}
          name="name"
          rules={[{ required: true, message: "상품명을 입력해주세요." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품명을 입력해주세요"
          ></Input>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">상품 이름</div>}
          name="price"
          rules={[{ required: true, message: "가격을 입력하세요." }]}
        >
          <InputNumber
            defaultValue={0}
            className="upload-price"
            size="large"
            placeholder="가격을 입력해주세요."
          ></InputNumber>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">상품 소개</div>}
          name="description"
          rules={[{ required: true, message: "상품 소개를 입력하세요." }]}
        >
          <Input.TextArea
            size="large"
            className="product-description"
            showCount
            maxLength={300}
          ></Input.TextArea>
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            문제 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
