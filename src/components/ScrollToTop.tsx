import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Desactivamos el scroll restoration automático del navegador globalmente.
// Sin esto, el browser intenta "recordar" la posición del scroll de cada ruta
// y la restaura al navegar, ignorando nuestro scrollTo(0,0).
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Scroll síncrono antes del paint del navegador
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
