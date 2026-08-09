import { ArrowRight } from 'lucide-react';
import './FlowButton.css';

export function FlowButton({ text = "Konsultasi Gratis", href }) {
  const Component = href ? 'a' : 'button';
  
  return (
    <Component href={href} className="flow-btn">
      {/* Left arrow */}
      <ArrowRight className="flow-btn__arrow-left" />

      {/* Text */}
      <span className="flow-btn__text">{text}</span>

      {/* Expanding Circle */}
      <span className="flow-btn__circle"></span>

      {/* Right arrow */}
      <ArrowRight className="flow-btn__arrow-right" />
    </Component>
  );
}
