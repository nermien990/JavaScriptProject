import Product from "./ProductModel.js";

export default class Data {
  dataOfProduct() {
    let p1 = new Product();
    p1._pName = "Baby Girl Hooded Patterned Fleece Lined Inflatable Coat";
    p1._price = "426 EGP";
    p1._details =
      "Cotton 100% BABY GIRL Coat \n Navy Baby Girl Hooded Patterned Fleece Lined Inflatable Coat";
    p1._pImg = "/images/img1.PNG";

    localStorage.setItem("p1_name", p1._pName);
    localStorage.setItem("p1_price", p1._price);
    localStorage.setItem("p1_details", p1._details);
    localStorage.setItem("p1_pImg", p1._pImg);

    let p2 = new Product();
    p2._pName = "Baby Girl Hooded Plush Coat";
    p2._price = "329 EGP";
    p2._details =
      "Polyester 100% BABY GIRL Coat \n Pink Baby Girl Hooded Plush Coat";
    p2._pImg = "/images/img2.PNG";

    localStorage.setItem("p2_name", p2._pName);
    localStorage.setItem("p2_price", p2._price);
    localStorage.setItem("p2_details", p2._details);
    localStorage.setItem("p2_pImg", p2._pImg);

    let p3 = new Product();
    p3._pName = "Baby Boy Patterned Hooded Inner Fleece Lined Coat";
    p3._price = "419 EGP";
    p3._details =
      "Model Measurements: Height: 1 \n Sample size: 3/4 Y \n Cotton 100% BABY BOY Newborn \n Navy Baby Boy Patterned Hooded Inner Fleece Lined Coat";
    p3._pImg = "/images/img3.PNG";

    localStorage.setItem("p3_name", p3._pName);
    localStorage.setItem("p3_price", p3._price);
    localStorage.setItem("p3_details", p3._details);
    localStorage.setItem("p3_pImg", p3._pImg);

    let p4 = new Product();
    p4._pName = "Baby Boy Quilted Filled Cotton Coat";
    p4._price = "299 EGP";
    p4._details =
      "Cotton 100% BABY BOY Newborn \n Bordeaux Baby Boy Quilted Filled Cotton Coat";
    p4._pImg = "/images/img4.PNG";

    localStorage.setItem("p4_name", p4._pName);
    localStorage.setItem("p4_price", p4._price);
    localStorage.setItem("p4_details", p4._details);
    localStorage.setItem("p4_pImg", p4._pImg);

    let p5 = new Product();
    p5._pName = "Baby Girl Quilted Filled Cotton Coat";
    p5._price = "299 EGP";
    p5._details =
      "Cotton 100% BABY GIRL Coat \n Khaki Baby Girl Quilted Filled Cotton Coat";
    p5._pImg = "/images/img5.PNG";

    localStorage.setItem("p5_name", p5._pName);
    localStorage.setItem("p5_price", p5._price);
    localStorage.setItem("p5_details", p5._details);
    localStorage.setItem("p5_pImg", p5._pImg);

    let p6 = new Product();
    p6._pName = "Baby Boy Hooded Thin Long Coat";
    p6._price = "279 EGP";
    p6._details =
      "Polyester 100% BABY BOY Coat \n Khaki Baby Boy Hooded Thin Long Coat";
    p6._pImg = "/images/img6.PNG";

    localStorage.setItem("p6_name", p6._pName);
    localStorage.setItem("p6_price", p6._price);
    localStorage.setItem("p6_details", p6._details);
    localStorage.setItem("p6_pImg", p6._pImg);

    let p7 = new Product();
    p7._pName = "Baby Boy Dinosaur Printed Hooded Thin Coat";
    p7._price = "230 EGP";
    p7._details =
      "Polyester 100% BABY BOY Coat \n Red Baby Boy Dinosaur Printed Hooded Thin Coat";
    p7._pImg = "/images/img7.PNG";

    localStorage.setItem("p7_name", p7._pName);
    localStorage.setItem("p7_price", p7._price);
    localStorage.setItem("p7_details", p7._details);
    localStorage.setItem("p7_pImg", p7._pImg);

    let p8 = new Product();
    p8._pName = "Baby Boy Coat";
    p8._price = "499 EGP";
    p8._details = "Polyester 100% BABY BOY Newborn \n Navy Baby Boy Coat";
    p8._pImg = "/images/img8.PNG";

    localStorage.setItem("p8_name", p8._pName);
    localStorage.setItem("p8_price", p8._price);
    localStorage.setItem("p8_details", p8._details);
    localStorage.setItem("p8_pImg", p8._pImg);
  }
}
