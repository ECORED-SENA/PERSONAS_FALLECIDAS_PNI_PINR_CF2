<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 Apreciado aprendiz bienvenido a esta experiencia de aprendizaje relacionada con el proceso de gestión de cementerios y que pretende ayudarle a apropiar elementos básicos para la inhumación y exhumación de personas. Para más información se sugiere revisar el siguiente recurso de aprendizaje que le dará un contexto inicial para su aprendizaje.

        .tarjeta.color-primario.p-4.mb-5(data-aos="fade-up")
          SlyderA
            .row.justify-content-center.p-4
              .col-lg-5.mb-4.mb-md-0
                br
                p El manejo de personas no identificadas y personas identificadas no reclamadas en los cementerios requiere un tratamiento especializado por parte de los funcionarios.           
              .col-lg-3
                img(src='@/assets/curso/intro/img01.svg')
            .row.justify-content-center.p-4
              .col-lg-5.mb-4.mb-md-0
                br
                p Este proceso se debe cumplir a partir los lineamientos dados por las normas y los procedimientos que sean necesarios para la custodia temporal de los restos inanimados.
              .col-lg-3
                img(src='@/assets/curso/intro/img02.svg')
            .row.justify-content-center.p-4
              .col-lg-5.mb-4.mb-md-0
                p La custodia hace referencia a una responsabilidad de los cementerios y a la acción de salvaguardar los restos inanimados de las personas no identificadas y no reclamadas en cementerios. La temporalidad de la custodia dura hasta cuando sea identificado  o sea reclamado por su familia.
              .col-lg-3
                img(src='@/assets/curso/intro/img03.svg')
            .row.justify-content-center.p-4
              .col-lg-5.mb-4.mb-md-0
                p Pero mientras las personas no identificadas y no reclamadas  permanezcan en custodia, los profesionales y operarios de este proceso deben salvaguardar el principio de la dignidad humana, procurando que pueda llevarse a cabo la despedida de las familias sobre sus muertos. Cabe mencionar que durante la custodia  está prohibida la cremación.
              .col-lg-3
                img(src='@/assets/curso/intro/img04.svg')
            .row.justify-content-center.p-4
              .col-lg-5.mb-4.mb-md-0
                br
                p La despedida de los familiares de su ser querido es una última oportunidad para rendir homenaje a la existencia de su ser querido y tener la certeza del lugar donde él reposará con su identidad e historia.
              .col-lg-3
                img(src='@/assets/curso/intro/img05.svg')
    
        p.mb-4 Identificado el contexto representado surgen retos y oportunidades para ayudar a la sociedad a cerrar procesos emocionales y legales que dignifican la existencia humana ¿se une a esta oportunidad?, gracias por aceptarla.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
