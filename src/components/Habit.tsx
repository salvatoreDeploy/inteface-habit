interface HabitProps {
  info: number;
}

export function Habit(props: HabitProps) {
  return <p>{props.info}</p>;
}
