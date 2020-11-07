import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import IntroTextToggle from './IntroTextToggle';

const AnimatedP = ({ children }) => (
  // animating p => no more added divs
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.p>
);

// two different components so framer motion will animate on each mount-unmount
const LongIntro = () => (
  <>
    <AnimatedP>Durante la última década...</AnimatedP>
    <AnimatedP>
      Estudié un grado en alternancia en el IMH, Elgoibar. Trabajparios años
      como ingeniero industrial. Aprendí un monton muy grande sobre procesos
      comerciales y otras cosas.
    </AnimatedP>
    <AnimatedP>
      Descubrí que <strong>no era así como quería vivir</strong>. Decidí cambiar
      mi vida por completo y abandonarlo todo. O intentarlo.
    </AnimatedP>
    <AnimatedP>
      Me marché de viaje, con el vago plan de dar la vuelta al mundo. Me quedé
      por el camino.
    </AnimatedP>
    <AnimatedP>
      Pasé <strong>tres años</strong> recorriendo el este de Europa y un poco
      más. Viví en varios países, creando mi negocio online, escalando, y
      conociendo cientos de personas maravillosas.
    </AnimatedP>
    <AnimatedP>
      Volví a casa, para vivir en el monte alejado del ruido del mundo real.
      Para dedicar mi tiempo a estudiar, y a escalar y nadar casi a diario.
    </AnimatedP>
    <AnimatedP>
      Y a trabajar en mi negocio online, donde diseño y desarrollo{' '}
      <strong>páginas y aplicaciones web modernas</strong> con tecnologías
      punteras. Suelo romper el Internet a menudo pero siempre consigo
      arreglarlo.
    </AnimatedP>
  </>
);

const ShortIntro = () => (
  <>
    <AnimatedP>Durante la última década...</AnimatedP>
    <AnimatedP>
      Estudié un grado. Trabajé varios años como ingeniero industrial. Decidí
      cambiar mi vida y abandonarlo todo.
    </AnimatedP>
    <AnimatedP>
      Me marché de viaje, sin fechas ni planes. Pasé tres años viviendo en
      varios países, creando mi negocio online, escalando, y estudiando.
    </AnimatedP>
    <AnimatedP>
      Volví a casa, para vivir en el monte alejado del ruido. Para dedicar mi
      tiempo a estudiar, entrenar, y trabajar en mi negocio.
    </AnimatedP>
  </>
);

function IntroText() {
  const [isLongIntro, setIsLongIntro] = useState(false);

  return (
    <>
      <IntroTextToggle
        isLongIntro={isLongIntro}
        setIsLongIntro={setIsLongIntro}
      />
      {isLongIntro ? <LongIntro /> : <ShortIntro />}
    </>
  );
}

AnimatedP.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};

export default IntroText;
