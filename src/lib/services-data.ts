// lib/services-data.ts
import {
  Wrench, Cpu, ShieldCheck, Cog, AirVent, BatteryFull, Eye, Wind,
  Settings, Target, CarFront,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;     // texto corto en la tarjeta
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  hero?: string;       // subtítulo H2 en la página detalle
  includes?: string[]; // bullets "Qué incluye"
  benefits?: string[]; // bullets "Beneficios"
};

export const SERVICES: Service[] = [
  {
    slug: "mantenimiento-preventivo",
    title: "Mantenimiento Preventivo",
    summary: "Cambio de aceite, filtros y revisión general para evitar averías.",
    icon: Wrench,
    hero: "Alarga la vida útil del motor y previene averías.",
    includes: ["Aceite y filtro", "Filtro de aire, combustible y habitáculo", "Chequeo de 20 puntos"],
    benefits: ["Menos averías", "Consumo optimizado", "Historial de mantenimiento"],
  },
  {
    slug: "diagnostico-electronico",
    title: "Diagnóstico Electrónico",
    summary: "Detección de fallos con equipos de última generación.",
    icon: Cpu,
    hero: "Diagnóstico rápido y preciso para decidir bien la reparación.",
    includes: ["Lectura OBD/OBD2", "Informe de códigos", "Borrado de testigos (si procede)"],
    benefits: ["Ahorro de tiempo", "Decisiones informadas", "Evita cambios innecesarios"],
  },
  {
    slug: "frenos-y-suspension",
    title: "Frenos y Suspensión",
    summary: "Revisión y sustitución de pastillas, discos y amortiguadores.",
    icon: ShieldCheck,
    hero: "Seguridad y confort con sistemas revisados al detalle.",
    includes: ["Pastillas/discos", "Líquido de frenos", "Amortiguadores y copelas"],
    benefits: ["Frenadas estables", "Menor distancia de parada", "Conducción más cómoda"],
  },
  {
    slug: "motor-y-transmision",
    title: "Motor y Transmisión",
    summary: "Embragues, juntas y reparaciones clave con garantía.",
    icon: Cog,
    hero: "Intervenciones expertas en motor, embrague y transmisión.",
    includes: ["Embrague y volante bimasa", "Juntas y retenes", "Fugas aceite/refrigerante"],
    benefits: ["Rendimiento óptimo", "Menos vibraciones", "Garantía profesional"],
  },
  {
    slug: "neumaticos",
    title: "Neumáticos",
    summary: "Venta, montaje, equilibrado y reparación de pinchazos.",
    icon: CarFront,
    hero: "La elección correcta, al mejor precio, con montaje experto.",
    includes: ["Asesoramiento por uso", "Montaje y equilibrado", "Reparación de pinchazos"],
    benefits: ["Agarre y seguridad", "Mas confort", "Precio justo"],
  },
  {
    slug: "climatizacion",
    title: "Climatización",
    summary: "Carga de gas, revisión de fugas y mantenimiento del A/A.",
    icon: AirVent,
    hero: "Confort, visibilidad y aire limpio todo el año.",
    includes: ["Carga de gas", "Tinte UV y detección de fugas", "Filtro de habitáculo"],
    benefits: ["Menos vaho", "Aire más limpio", "Sistema eficiente"],
  },
  {
    slug: "baterias",
    title: "Baterías",
    summary: "Suministro, instalación y test con garantía.",
    icon: BatteryFull,
    hero: "Arranques fiables y diagnóstico eléctrico incluido.",
    includes: ["Test de batería y alternador", "Instalación", "Reciclaje responsable"],
    benefits: ["Cero sustos al arrancar", "Montaje seguro", "Garantía oficial"],
  },
  {
    slug: "visibilidad",
    title: "Visibilidad",
    summary: "Lámparas, ópticas, limpiaparabrisas y reglaje de faros.",
    icon: Eye,
    hero: "Conduce con máxima claridad en cualquier clima.",
    includes: ["Cambio de lámparas", "Escobillas", "Pulimentado y reglaje de faros"],
    benefits: ["Más seguridad nocturna", "Menos deslumbramientos", "ITV favorable"],
  },
  {
    slug: "escapes",
    title: "Escapes",
    summary: "Revisión y sustitución para rendimiento y emisiones.",
    icon: Wind,
    hero: "Sistema de escape en buen estado = motor sano.",
    includes: ["Tuberías y silenciosos", "Soportes y juntas", "Sondas (si procede)"],
    benefits: ["Menos ruido", "Emisiones dentro de norma", "Consumo ajustado"],
  },
  {
    slug: "distribucion",
    title: "Distribución",
    summary: "Cambio de kit según recomendación del fabricante.",
    icon: Settings,
    hero: "Evita roturas catastróficas cambiando a tiempo.",
    includes: ["Correa/cadena", "Tensores y rodillos", "Bomba de agua (si aplica)"],
    benefits: ["Motor protegido", "Funcionamiento suave", "Plan de mantenimiento al día"],
  },
  {
    slug: "enganches-de-remolque",
    title: "Enganches de Remolque",
    summary: "Instalación, reparación y homologación con total seguridad.",
    icon: CarFront,
    hero: "Enganches homologados y asesoramiento legal.",
    includes: ["Suministro e instalación", "Instalación eléctrica", "Documentación homologada"],
    benefits: ["Todo legal y seguro", "Compatibilidad garantizada", "Trabajo limpio"],
  },
  {
    slug: "calibracion-adas",
    title: "Calibración de Sistemas ADAS",
    summary: "Ajuste de cámaras y radares de asistencia a la conducción.",
    icon: Target,
    hero: "Alineación milimétrica para mantener la seguridad activa.",
    includes: ["Calibración estática/dinámica", "Informe final", "Verificación en ruta"],
    benefits: ["ADAS precisos", "Menos falsas alertas", "ITV sin sorpresas"],
  },
];

export const SERVICE_SLUGS = SERVICES.map(s => s.slug);
export function getService(slug: string) { return SERVICES.find(s => s.slug === slug); }
