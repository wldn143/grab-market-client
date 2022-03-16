import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  React.useEffect(() => {
    setTime(time + 1);
  }, []); //두번째 인자에 값이 변경될 때마다 실행하니까 무한렌더링

  return (
    <div>
      <h3>{time}초</h3>
    </div>
  );
}

export default TimerComponent;
