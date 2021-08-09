<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Derechos Humanos
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Son aquellos naturales a la condición humana, que están orientados a la dignidad sin ningún tipo de distinción como raza, color, sexo, idioma, religión, opinión política, origen nacional o social o posición económica; pero ¿cómo se asocia los derechos humanos con la muerte? Se habla de estos cuando se recuerda el derecho de las familias a reconocer y disponer una sepultura para sus seres queridos, el derecho a la verdad y a las condiciones relacionadas con la muerte de su familiar; la libertad de disponer las honras fúnebres para sus allegados; además de un trato equitativo y no discriminatorio frente a los procesos de personas no identificadas e identificadas no reclamadas.
    
        p.mb-4 Según Claire Moon (2020) el Derecho Internacional Humanitario (DIH), el cuerpo legal más importante y relevante, proporciona varias reglas que regulan cómo se deben tratar los muertos en el marco de un conflicto, específicamente las normas 112 a la 116 en las que se regula la búsqueda, recolección, tratamiento, retorno, disposición y la identificación de los muertos, principalmente en el contexto de los conflictos armados. Normas que tienen un distinguido recorrido y derivan de la Convención de la Haya de 1907, de las Convenciones de Ginebra de 1929 y 1949, de los Protocolos Adicionales de 1977 y del Estatuto de Roma de 1998 que inauguró la Corte Penal Internacional.
        p.mb-5 Mediante las normas citadas básicamente se establece que las partes tienen el deber de tomar, sin demora, todas las medidas posibles para buscar, recoger y evacuar a los muertos sin distinción desfavorable alguna (norma 112), que las partes en conflicto tomarán todas las medidas posibles para evitar que los muertos sean despojados y está prohibido mutilar los cadáveres (norma 113); que igualmente harán todo lo posible para facilitar la repatriación de los restos mortales de las personas fallecidas a solicitud de la parte a la que pertenecen o de sus familiares, y devolverán los efectos personales de los fallecidos (norma 114), el deber de inhumar a los muertos de manera respetuosa, igual que sus tumbas, manteniéndolas debidamente (norma 115), el deber de registrar toda la información posible antes de inhumar los cuerpos, además de la ubicación de las tumbas para facilitar la identificación de los muertos ( norma 116).

        .tarjeta.color-primario.p-4
          .row.justify-content-center
            .col-lg-7
              p Para finalizar se invita a que consulte en el material complementario el texto “Los derechos humanos de los muertos y sus familiares” de la autora Claire Moon, el cual presenta una reflexión sobre los derechos humanos de los muertos.
              a.anexo.mb-4.mb-lg-0(href="https://estudiosdeldesarrollo.mx/observatoriodeldesarrollo/wp-content/uploads/2020/07/ODadelantoCMoon.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  strong Los derechos humanos de los muertos y sus familiares.
            .col-lg-3
              img.MTneg(src='@/assets/curso/tema3/img02.svg')


</template>

<script>
export default {
  name: 'Tema3',
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
