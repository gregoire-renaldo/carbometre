import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="calculate-footprint"
export default class extends Controller {
  connect() {
        // function calculate() {
    //   var myBox1 = document.getElementById('empreinte-entreprise').value;
    //   var myBox2 = document.getElementById('effectif').value;
    //   var totalPro = document.getElementById('totalPro');
    //   var myResult = myBox1 / myBox2;
    //   totalPro.value = myResult;
    // }

    const totalPro = document.getElementById('totalPro');
    const userEmpreinte = document.getElementById("empreinte-entreprise");
    const userEffectif = document.getElementById("effectif")

    userEmpreinte.addEventListener("input", divide1);
    function divide1() {
      let one = parseFloat(userEmpreinte.value) || 0;
      let two = parseFloat(userEffectif.value) || 1;
      let result = (one / two).toFixed(2)
      totalPro.innerHTML = result
    }

    userEffectif.addEventListener("input", divide2);
    function divide2() {
      let one = parseFloat(userEmpreinte.value) || 0;
      let two = parseFloat(userEffectif.value) || 1;
      let result = (one / two).toFixed(2)
      totalPro.innerHTML = result
    }


  }

}

