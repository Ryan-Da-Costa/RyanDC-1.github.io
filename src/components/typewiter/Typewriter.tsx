import { useRef } from 'react';
import { gsap } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import { Typography } from 'antd';

gsap.registerPlugin(TextPlugin);

interface Props {
  text: string[],
  startDelay: number
}

export default function Typewriter(props: Props) {

  const { text = [], startDelay = 0 } = props

  const ref = useRef(null!);

  useGSAP(() => {
    const main = gsap.timeline({ repeat: -1, delay: 1 + startDelay })
    gsap.fromTo('.cursor', { opacity: 0 }, { opacity: 1, duration: 0.8, repeat: -1, delay: startDelay })
    text.forEach(string => {
      const text = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 })
      text.to('.typewriter', { duration: 1.3, text: string })
      main.add(text)
    })
  }, { scope: ref });

  return (
    <div ref={ref} className="container" style={{ height: 'fit-content' }}>
      <Typography.Text className="typewriter font-16"/>
      <Typography.Text className="cursor font-16" style={{ paddingLeft: 2 }}>_</Typography.Text>
    </div>
  );
}
