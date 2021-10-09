$("#formulario").prepend(`<section class="m-auto">
    
<form class="needs-validation" novalidate>
    <H3>Completa el formulario y te respondemos a la brevedad</H3>
    <div class="container">

    <!-- Name input -->
    <div class="form-outline mb-4">
      <input type="text" id="nombre" class="form-control" required />
      <label class="contacto--nombre" for="nombre">Nombre y Apellido</label>
      <div class="valid-feedback">OK!</div>
    </div>
  
    <!-- Email -->
        <input type="email" class="form-control" required id="floatingInputInvalid" placeholder="Ingrese su email @">
        <label class="contacto--email" for="floatingInputInvalid">Ingresa Email</label>
        <div class="valid-feedback">OK!</div>
   
    
    <!-- Mensaje -->
    <div class="form-outline mb-4">
      <textarea class="form-control" id="form4Example3" rows="4"></textarea>
      <label class="contacto--mensaje" for="form4Example3">Escribe tu mensaje</label>
    </div>
     
  
    <!-- enviar -->
    <button type="submit" class="btn btn-warning btn-lg mb-2">Enviar</button>
    </div>
  </form>
</section>
<script>
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
'use strict'

// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
.forEach(function (form) {
form.addEventListener('submit', function (event) {
if (!form.checkValidity()) {
  event.preventDefault()
  event.stopPropagation()
}

form.classList.add('was-validated')
}, false)
})
})()
</script>`);


