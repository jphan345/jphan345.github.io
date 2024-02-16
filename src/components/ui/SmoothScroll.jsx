import { ReactLenis } from '@studio-freight/react-lenis'


export default function SmoothScroll({ children }) {
  return (
    <ReactLenis 
        root
        options={ { duration: 1 } }
        easing={ (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)) }
        direction={'vertical'}
    >
      {children}
    </ReactLenis>
  );
}