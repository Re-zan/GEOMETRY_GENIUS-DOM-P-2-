//go to pages
document.getElementById("blog_btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

//random color
randomcolor("card_no1");
randomcolor("card_no2");
randomcolor("card_no3");
randomcolor("card_no4");
randomcolor("card_no5");
randomcolor("card_no6");

//triangle area calculation
document.getElementById("triangle_btn").addEventListener("click", function () {
  //get values
  const titleanme = geTheText("triangle_title");
  const triangle_base = geTheValue("triangle_b");
  const triangle_height = geTheValue("triangle_h");

  //valaidation
  if (
    (triangle_base === "" && triangle_height === "") ||
    (triangle_base !== "" && triangle_height === "") ||
    (triangle_base === "" && triangle_height !== "")
  ) {
    alert("Input Feild couldn't empty");
  } else if (
    (triangle_base < 0 && triangle_height < 0) ||
    (triangle_base < 0 && triangle_height > 0) ||
    (triangle_base > 0 && triangle_height < 0)
  ) {
    alert("Please Provide Only Positive Number In Both Input Feildes");
  } else if (
    (isNaN(triangle_base) === true && isNaN(triangle_height) === true) ||
    (isNaN(triangle_base) === false && isNaN(triangle_height) === true) ||
    (isNaN(triangle_base) === true && isNaN(triangle_height) === false)
  ) {
    alert("Please Provide Only  Numbers In Both Input Feildes");
  } else {
    const traingel_resutl = 0.5 * triangle_base * triangle_height;
    const twoDescimal = getDecimal(traingel_resutl);
    mainResult(titleanme, twoDescimal);
  }
});

//Rectangle
document.getElementById("rectangle_btn").addEventListener("click", function () {
  //get values
  const titleanme = geTheText("rectangle_title");
  const rectangle_w = geTheValue("rectangle_width");
  const rectangle_l = geTheValue("rectangle_length");

  //valaidation
  if (
    (rectangle_w === "" && rectangle_l === "") ||
    (rectangle_w !== "" && rectangle_l === "") ||
    (rectangle_w === "" && rectangle_l !== "")
  ) {
    alert("Input Feild couldn't empty");
  } else if (
    (rectangle_w < 0 && rectangle_l < 0) ||
    (rectangle_w < 0 && rectangle_l > 0) ||
    (rectangle_w > 0 && rectangle_l < 0)
  ) {
    alert("Please Provide Only Positive Number In Both Input Feildes");
  } else if (
    (isNaN(rectangle_w) === true && isNaN(rectangle_l) === true) ||
    (isNaN(rectangle_w) === false && isNaN(rectangle_l) === true) ||
    (isNaN(rectangle_w) === true && isNaN(rectangle_l) === false)
  ) {
    alert("Please Provide Only  Numbers In Both Input Feildes");
  } else {
    const rectangle_resutl = rectangle_w * rectangle_w;
    const twoDescimal = getDecimal(rectangle_resutl);

    mainResult(titleanme, twoDescimal);
  }
});

// Parallelogram
document
  .getElementById("parallelogram_btn")
  .addEventListener("click", function () {
    //get values
    const titleanme = geTheText("parallelogram_title");
    const parallelogram_base = geTheNum("parallelogram_b");
    const parallelogram_height = geTheNum("parallelogram_h");

    const parall_resutl = parallelogram_base * parallelogram_height;
    const twoDescimal = getDecimal(parall_resutl);
    mainResult(titleanme, twoDescimal);
  });

//Rhombus
document.getElementById("Rhombus_btn").addEventListener("click", function () {
  //get values
  const titleanme = geTheText("Rhombus_tittle");
  const Rhombus_base = geTheNum("Rhombus_b");
  const Rhombus_height = geTheNum("Rhombus_h");

  const Rhombus_resutl = 0.5 * Rhombus_base * Rhombus_height;
  const twoDescimal = getDecimal(Rhombus_resutl);
  mainResult(titleanme, twoDescimal);
});

// Pentagon
document.getElementById("Pentagon_btn").addEventListener("click", function () {
  //get values
  const titleanme = geTheText("Pentagon_title");
  const pentagon_p = geTheNum("Pentagon_p");
  const pentagon_b = geTheNum("Pentagon_b");

  const pentagon_resutl = 0.5 * pentagon_p * pentagon_b;
  const twoDescimal = getDecimal(pentagon_resutl);
  mainResult(titleanme, twoDescimal);
});

//Ellipse
document.getElementById("Ellipse_btn").addEventListener("click", function () {
  //get values
  const titleanme = geTheText("Ellipse_ttitle");
  const ellipse_a = geTheNum("Ellipse_a");
  const ellipse_b = geTheNum("Ellipse_b");

  const ellipse_resutl = Math.PI * ellipse_a * ellipse_b;
  const twoDescimal = getDecimal(ellipse_resutl);
  mainResult(titleanme, twoDescimal);
});
