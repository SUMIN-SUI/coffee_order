const espresso = {
  name: "에스프레소",
  price: 4000,
  amount: 10,
};

const americano = {
  name: "아메리카노",
  price: 4500,
  amount: 10,
};

const latte = {
  name: "카페라떼",
  price: 5000,
  amount: 10,
};

const mocha = {
  name: "카페모카",
  price: 5500,
  amount: 10,
};

const orderBtn = document.querySelector(".orderBtn");

function order(event) {
  let answer = confirm("주문하시겠습니까?");
  if (answer) {
    let order = prompt("메뉴를 작성해주세요");
    //order가 빈칸일때
    select(order);
    event.preventDefault();
  } else {
    alert("주문이 취소되었습니다.");
    return;
  }
}

function orderProcess(menu) {
  //남은커피가 0잔일 경우 처리
  let change = 0;
  let inputMoney = parseInt(
    prompt(`돈을 입력해주세요 (남은커피 :${menu.amount})`)
  );
  if (inputMoney > menu.price) {
    change = inputMoney - menu.price;
    alert(`거스름돈 ${change}입니다`);
    alert(`${menu.name} 주문이 완료되었습니다`);
    menu.amount--;
  } else if (inputMoney < menu.price) {
    alert("돈이 부족합니다.");
    order();
  } else if (money === menu.price) {
    alert(`${menu.name} 주문이 완료되었습니다`);
    menu.amount--;
  } else {
    alert("주문이 취소되었습니다.");
  }
}

function select(menu) {
  switch (menu) {
    case "에스프레소":
      orderProcess(espresso);
      break;
    case "아메리카노":
      orderProcess(americano);
      break;
    case "카페라떼":
      orderProcess(latte);
      break;
    case "카페모카":
      orderProcess(mocha);
      break;
  }
}

orderBtn.addEventListener("click", order);

// let coffee_price = 3000;
// let amount = 10;
// let input = 0;
// let change = 0;

// while (true) {
//   //
//   if (amount == 0) {
//     alert("커피가 다 떨어졌습니다. 판매를 중지합니다.");
//     break;
//   }

//   input = parseInt(prompt(`돈을 넣어주세요(남은커피 ${amount})`));

//   if (input == coffee_price) {
//     alert("커피를 줍니다.");
//     amount--;
//   } else if (input > coffee_price) {
//     change = input - coffee_price;
//     alert(`거스름돈 ${change}원과 커피를 줍니다. `);
//     amount--;
//   } else {
//     alert("돈이 부족합니다.");
//   }
// }
