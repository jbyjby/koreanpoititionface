var num; // num 변수를 선언합니다.

function diffday() {
  const masTime = new Date("2024-04-10");
  const todayTime = new Date();
  const diff = masTime.getTime() - todayTime.getTime();
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
  console.log(todayTime);
  console.log(diffDay);
  num = diffDay; //
  document.querySelector("#remain-time").innerHTML = num;
}

diffday(); // 함수를 호출하여 실행합니다.
