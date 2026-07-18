import { useCounterAnimation } from '../../hooks/useCounterAnimation';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCard({ value, suffix = '', label }: StatCardProps) {
  const { ref, value: display } = useCounterAnimation(value);
  return (
    <div className="stat-card">
      <span className="stat-card-num" ref={ref}>
        {display}
        {suffix}
      </span>
      <div className="stat-card-label">{label}</div>
    </div>
  );
}
