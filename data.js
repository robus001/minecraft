if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify([
    {
      name: "VIP",
      price: 5,
      description: "Rank VIP pe server",
      image: "https://i.imgur.com/8Km9tLL.png"
    }
  ]));
}

if (!localStorage.getItem("giftcards")) {
  localStorage.setItem("giftcards", JSON.stringify([]));
}

if (!localStorage.getItem("affiliates")) {
  localStorage.setItem("affiliates", JSON.stringify([]));
}
