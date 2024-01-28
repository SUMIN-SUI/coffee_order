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

function order() {
  let answer = confirm("주문하시겠습니까?");
  if (answer) {
    let order = prompt("메뉴를 작성해주세요");
    if (order === null) {
      alert("주문이 취소되었습니다.");
    } else if (order.trim() === "") {
      alert("메뉴를 입력해주세요.");
    }
    select(order);
  } else {
    alert("주문이 취소되었습니다.");
  }
}

function orderProcess(menu) {
  //남은커피가 0잔일 경우 처리
  let change = 0;
  let inputMoney = parseInt(
    prompt(`돈을 입력해주세요 (남은커피 :${menu.amount})`)
  );

  const menuC = { ...menu };

  if (inputMoney > menuC.price) {
    change = inputMoney - menuC.price;
    alert(`거스름돈 ${change}입니다`);
    alert(`${menuC.name} 주문이 완료되었습니다`);
    menuC.amount--;
  } else if (inputMoney < menuC.price) {
    alert("돈이 부족합니다.");
    order();
  } else if (inputMoney === menuC.price) {
    alert(`${menuC.name} 주문이 완료되었습니다`);
    menuC.amount--;
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
    default:
      alert("없는 메뉴입니다.");
  }
}
