export default function LogoCircular({
  // Color del círculo de fondo (apenas más grande que la línea exterior)
  bgColor,
  textColor = "fill-beige",
  colorTextCenter = "text-beige",
  children,
  texto1,
  texto2,
  centerFontSize = 60,
  rotateDeg = 0,
}) {
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 🎛️  PARÁMETROS PARA AJUSTAR EL TAMAÑO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  const viewSize = 305; // Tamaño del viewBox (cuadrado). Debe ser > cx+r y > cy+r
  const cx = viewSize / 2; // Centro X del círculo
  const cy = cx; // Centro Y del círculo
  const r = 106; // Radio → más grande = círculo más grande
  const fontSize = 10; // Tamaño del texto en píxeles SVG
  const innerFontSize = centerFontSize - 20;

  // Radio de la línea exterior
  const outerR = r + fontSize + 7;
  // Radio del círculo de fondo: apenas más grande que la línea exterior
  const bgR = outerR + 10;

  // Path de arco circular completo (truco: dos semiarcos)
  const circlePath = `
    M ${cx - r}, ${cy}
    a ${r},${r} 0 1,1 ${r * 2},0
    a ${r},${r} 0 1,1 -${r * 2},0
  `;

  return (
    <svg
      viewBox={`0 0 ${viewSize} ${viewSize}`}
      className={`w-full h-auto font-primary font-bold`}
    >
      {/* 0. Círculo de fondo — estático */}
      <circle cx={cx} cy={cy} r={bgR} className={bgColor} />

      {/* 1+2+3. Aro giratorio: línea exterior + guía + texto circular */}
      <g
        style={{
          transformOrigin: `${cx}px ${cy}px`,
          animation: "spin 30s linear infinite",
        }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={outerR}
          fill="none"
          stroke="beige"
          strokeWidth="1"
        />
        <path id="circlePath" d={circlePath} fill="transparent" />
        <text
          fontSize={fontSize}
          fontWeight="bold"
          letterSpacing="3"
          textAnchor="middle"
          textTransform="uppercase"
          className={`font-primary ${textColor}`}
        >
          <textPath href="#circlePath" startOffset="50%">
            NUESTRA BODA 05.12.26 NUESTRA BODA 05.12.26 NUESTRA BODA 05.12.26
          </textPath>
        </text>
      </g>

      {/* 4. Texto central — estático, con rotación propia */}
      {children ? (
        <foreignObject y={0} x={0} width={viewSize} height={viewSize}>
          <div
            className={`flex flex-col w-full h-full justify-center items-center ${colorTextCenter}`}
          >
            {children}
          </div>
        </foreignObject>
      ) : (
        <text
          x={cx}
          y={cy}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={centerFontSize}
          fontWeight="bold"
          textTransform="uppercase"
          className={`font-primary ${textColor}`}
          transform={`rotate(${rotateDeg} ${cx} ${cy})`}
        >
          {texto1}
          <tspan
            fontSize={innerFontSize}
            dominantBaseline="central"
            className="font-light"
          >
            &
          </tspan>
          {texto2}
        </text>
      )}
    </svg>
  );
}
