const resultado = document.querySelector(".resultado");
const consul = document.querySelector(".consul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const form = document.getElementById("form");
  const datos = new FormData(form);
  
  const consulta = async () => {
    const data = await fetch("./consulta.php", {
      method: "POST",
      headers: {
        Accept: "application.json",
      },
      body: datos,
    });
    const resp = await data.json();
    respuesta(resp);

  };

  consulta();

  function respuesta(numero) {
    if (numero.numeroDocumento) {
      resultado.style.display = "block";
      let newHTMLcode = `
            <span class="date">DNI:  ${numero.numeroDocumento}</span>
            <span class="date">Nombres:  ${numero.nombres}</span>
            <span class="date">Apellido paterno:  ${numero.apellidoPaterno}</span>
            <span class="date">Apellido materno:  ${numero.apellidoMaterno}</span>
          `;
      consul.innerHTML = newHTMLcode;
    } else {
      let newHTMLcode = `
            <span class="red">${numero.error}</span>
          `;
      consul.innerHTML = newHTMLcode;
    }
  }
});
