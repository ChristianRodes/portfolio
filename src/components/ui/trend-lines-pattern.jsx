import { useId } from "react";
import { cn } from "@/lib/utils";

export function TrendLinesPattern({
  className,
  ...props
}) {
  const id = useId();

  // Generar líneas con pendiente ascendente muy pronunciada
  const generateAscendingPath = (startY, amplitude, phase) => {
    const width = 400;
    let path = `M 0 ${startY}`;
    for (let x = 10; x <= width; x += 10) {
      const normalizedX = x / width;
      // Pendiente muy pronunciada: -normalizedX * 100 crea un crecimiento fuerte
      const y =
        startY -
        normalizedX * 100 +
        Math.sin(normalizedX * Math.PI * 2.5 + phase) * amplitude;
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      width="400"
      height="280"
      viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Línea 1 - Azul claro */}
      <path
        d={generateAscendingPath(200, 12, 0)}
        stroke="#a8d5ff"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Línea 2 - Azul medio */}
      <path
        d={generateAscendingPath(190, 15, Math.PI / 5)}
        stroke="#6ba3d6"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Línea 3 - Azul oscuro */}
      <path
        d={generateAscendingPath(180, 10, Math.PI / 3)}
        stroke="#2563eb"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Relleno bajo la línea principal */}
      <path
        d={generateAscendingPath(200, 12, 0) + " L 400 280 L 0 280 Z"}
        fill={`url(#grad-${id})`}
      />
    </svg>
  );
}
