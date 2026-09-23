import { useEffect, useRef, useState } from "react";

/**
 * Hook que retorna un ref y un boolean indicando si el elemento está en view.
 * - Al entrar al viewport → inView = true (animación se ejecuta)
 * - Al salir POR ARRIBA (usuario bajó y dejó la sección atrás) → se mantiene visible
 * - Al salir POR ABAJO (usuario subió de vuelta) → inView = false (se reinicia para la próxima bajada)
 *
 * @param {Object} options
 * @param {number} options.threshold - Porcentaje visible antes de disparar (0-1)
 * @param {string} options.rootMargin - Margen del root
 * @param {boolean} options.once - Si true, solo dispara una vez, nunca resetea
 */
export function useInView({
  threshold = 0.25,
  rootMargin = "0px 0px -80px 0px",
  once = false,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          // boundingClientRect.top < 0 → el elemento salió por arriba
          // (el usuario bajó y ya pasó esta sección) → mantener visible
          // boundingClientRect.top > 0 → el elemento está abajo del viewport
          // (el usuario subió de vuelta) → resetear para que anime al bajar de nuevo
          if (entry.boundingClientRect.top > 0) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
