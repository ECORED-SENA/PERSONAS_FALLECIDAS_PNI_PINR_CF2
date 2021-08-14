<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Exhumación
    
    .row.justify-content-center.mb-4
      .col-lg-8
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Ya abordado uno de los procesos que sería la inhumación, corresponde ahora definir la exhumación que proviene de las raíces ex y humus que significan respectivamente afuera y tierra, esto es, sacar a la superficie algo que está por debajo de ella.  
    
    p.mb-4 La Resolución del Ministerio de Protección Social 5194 de 2010 establece que exhumar es extraer cadáveres, restos humanos y restos óseos del lugar de inhumación, previa orden judicial o administrativa para fines legales o efectos numerarios.
    p.mb-4 Íntimamente relacionado con el concepto de inhumar está el lugar de exhumación y el área de exhumación, que hacen referencia a la zona o espacio alrededor de la tumba o bóveda donde se realiza la exhumación y la estructura física para la realización de necropsias o procesos posexhumaciones. Cuando se habla de exhumación, usualmente se encuentran discusiones en torno a quién tiene el derecho sobre ello, teniendo presente el valor simbólico de la tumba y el concepto del cadáver que no puede asociarse con una propiedad.
    p.mb-4 Entre las características importantes de la exhumación es necesario denotar:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-lg-0(titulo="I. Cementerio" :icono="require('@/assets/curso/tema2/img06.svg')")
        .tarjeta.color-secundario.p-4(data-aos="fade-up-left")
          .row.justify-content-center
            .col-lg-4.mb-4.mb-lg-0
              br
              h4 I. Cementerio
              p La clasificación en el cementerio debe permitir la localización del lugar de disposición temporal que tiene la persona no identificada y la persona identificada no reclamada.
            .col-lg-5
              img(src='@/assets/curso/tema2/img02.png')
      .py-4.py-lg-0(titulo="II. Limpieza" :icono="require('@/assets/curso/tema2/img07.svg')")
        .tarjeta.color-secundario.p-4
          .row.justify-content-center
            .col-lg-4.mb-4.mb-lg-0
              br
              h4 II. Limpieza
              p El área de exhumación debe tener buenas condiciones de orden, limpieza y dimensiones mínimas.
            .col-lg-5
              img(src='@/assets/curso/tema2/img03.png')
      .py-4.py-lg-0(titulo="III. Exhumación" :icono="require('@/assets/curso/tema2/img08.svg')")
        .tarjeta.color-secundario.p-4
          .row.justify-content-center
            .col-lg-4.mb-4.mb-lg-0
              br
              h4 III. Exhumación
              p El área de exhumación debe permitir la individualización y extracción de todos los componentes óseos que se encuentran en su tumba.
            .col-lg-5
              img(src='@/assets/curso/tema2/img04.png')
      .py-4.py-lg-0(titulo="IV. La sala" :icono="require('@/assets/curso/tema2/img09.svg')")
        .tarjeta.color-secundario.p-4
          .row.justify-content-center
            .col-lg-4.mb-4.mb-lg-0
              br
              h4 IV. La sala
              p La sala de exhumaciones podrá funcionar como morgue o laboratorio de tanatopraxia.
            .col-lg-5
              img(src='@/assets/curso/tema2/img05.png')

    p.mb-4 En primer lugar, debe adelantarse y revisarse la documentación y procedimientos que permitan la realización del proceso de exhumación. Posterior a ello, debe verificarse la ubicación y realizar la apertura de la bóveda o la tumba en tierra, momento en el cual el operario del cementerio debe tener todos los implementos de bioseguridad, tales como traje completo impermeable con capucha, botas, guantes, tapabocas N95 o máscaras con filtros y gafas o visor; esto por la exposición al alto riesgo de carácter biológico.
    p.mb-4 Después de la apertura se debe trasladar el cofre al área de exhumación para retirar y limpiar todos los restos óseos y embalarlos de manera segura, que debe ser rotulada con la información de la persona fallecida para entregarlo a sus familias para que dispongan el lugar de disposición final.
    p.mb-4 La exhumación de cadáveres o restos óseos será realizada por el personal al servicio de la administración del cementerio cuando se cumpla el tiempo mínimo de permanencia o con anterioridad a este plazo cuando sea por orden judicial, caso en el cual el procedimiento para la exhumación se realizará por la autoridad judicial competente.
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
